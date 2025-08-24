"use client";
import { Button } from "@/components/ui/button";
import { IUser } from "@/models/interfaces";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { ReactNode, useEffect, useState } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
  AreaChart,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { getDashboardData } from "@/services/dataService";
import { AlarmClock, AlertTriangle, Clock, Phone, PhoneCall, Shield, CheckCircle, Flame, Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import CallsignModal from "../modals/callsign-modal";
import LoadingState from "../loading-state";

interface DashboardCard {
  title: string;
  icon: ReactNode;
  value: string | number;
  subTitle: string;
}

interface PieChartData {
  label: string;
  value: number;
  color: string;
}

interface PieChart {
  title: string;
  subTitle: string;
  data: PieChartData[];
}

interface ChartDataPoint {
  day: string;
  calls: number;
  date?: string;
}

interface Chart {
  title: string;
  subTitle: string;
  filters: string[];
  data: Record<string, ChartDataPoint[]>;
}

interface Table {
  title: string;
  subTitle: string;
  columns: string[];
  data: Record<1 | 2 | 3 | 4 | 5 | 6, string | number>[];
}

interface BottomSectionItem {
  label: string | number;
  value: string | number;
  text?: string;
}

interface BottomSection {
  title: string;
  data: BottomSectionItem[];
}

export interface DashboardData {
  cards: DashboardCard[];
  pieChart: PieChart;
  chart: Chart;
  table: Table;
  bottom: BottomSection[];
}

interface IDashboardContentProps {
  user: IUser;
}

export default function DashboardContent({ user }: IDashboardContentProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dashboard, setDashboard] = useState("user");
  const [data, setData] = useState<DashboardData | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState("7D");
  const [isCallsignModalOpen, setIsCallsignModalOpen] = useState(false);
  const [hasUserDismissedModal, setHasUserDismissedModal] = useState(false);
  const router = useRouter();

  const handleStartDispatching = () => {
    router.push("/dispatch");
  };

  const handleDashboardChange = async (): Promise<DashboardData> => {
    const data = await getDashboardData(user.id, dashboard);
    if (!data) {
      console.error("Failed to fetch dashboard data");
    }
    return data as DashboardData;
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await handleDashboardChange();
      setData(fetchedData);
      // Set the initial selected period to the first filter option
      if (fetchedData?.chart?.filters?.length > 0) {
        setSelectedPeriod(fetchedData.chart.filters[0]);
      }
    };
    fetchData();
    setIsLoading(false);
  }, [dashboard]);

  // Helper function to get usage data based on selected period
  const getUsageData = () => {
    if (!data) return [];
    return data.chart.data[selectedPeriod] || [];
  };

  // Helper function to transform pie chart data for recharts
  const getServiceData = () => {
    if (!data) return [];
    return data.pieChart.data.map(item => ({
      service: item.label,
      calls: item.value,
      color: item.color
    }));
  };

  // Helper function to get priority color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Echo":
        return "bg-purple-500"
      case "Delta":
        return "bg-red-500"
      case "Charlie":
        return "bg-yellow-500"
      case "Bravo":
        return "bg-blue-500"
      case "Alpha":
        return "bg-green-500"
      case "Omega":
        return "bg-gray-500"
      default:
        return "bg-gray-300"
    }
  };

  // Helper function to get service icon
  const getServiceIcon = (service: string) => {
    switch (service) {
      case "Police":
        return <Shield className="h-4 w-4 text-blue-500" />
      case "Fire":
        return <Flame className="h-4 w-4 text-red-500" />
      case "EMS":
        return <Heart className="h-4 w-4 text-green-500" />
      default:
        return <Phone className="h-4 w-4 text-gray-500" />
    }
  };

  // Helper function to transform table data for easier rendering
  const getRecentCalls = () => {
    if (!data) return [];
    return data.table.data.map((row, index) => ({
      id: index,
      time: row[1] as string,
      type: row[2] as number,
      service: row[3] as string,
      priority: row[4] as string,
      status: row[5] as string,
      location: row[6] as string,
    }));
  };

  // Helper function to get bottom section data
  const getBottomSectionData = () => {
    if (!data) return [];
    return data.bottom;
  };

  return (
    <div className="flex justify-center">
      <div className="min-h-screen container p-6">
        <div className="x-auto space-y-6">
          <div className="bg-secondary rounded-xs shadow-sm border p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-primary">
                  Welcome back, {user.username}
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  className="cursor-pointer rounded-xs"
                  variant="destructive"
                  onClick={() => handleStartDispatching()}
                >
                  Start Dispatching
                </Button>
                <Select value={dashboard} onValueChange={setDashboard}>
                  <SelectTrigger className="rounded-xs">
                    <SelectValue placeholder="Select Dashboard" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xs">
                    <SelectItem value="user" className="rounded-xs">User</SelectItem>
                    <SelectItem value="ems" className="rounded-xs">EMS</SelectItem>
                    <SelectItem value="fire" className="rounded-xs">Fire</SelectItem>
                    <SelectItem value="police" className="rounded-xs">Police</SelectItem>
                    <SelectItem value="total" className="rounded-xs">Total</SelectItem>
                    {user.isAdmin === 1 && (
                      <SelectItem value="admin" className="rounded-xs">Admin</SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          {isLoading && !data && (
            <div>
              <LoadingState />
            </div>
          )}
          {data && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.cards.map((card, index) => (
                  <Card key={index} className="rounded-xs">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0">
                      <CardTitle className="text-sm font-medium">
                        {card.title}
                      </CardTitle>
                      {card.icon}
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{card.value}</div>
                      <p className="text-xs text-muted-foreground">
                        {card.subTitle}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Service Distribution Chart */}
                <Card className="rounded-xs">
                  <CardHeader>
                    <CardTitle>{data.pieChart.title}</CardTitle>
                    <CardDescription>
                      {data.pieChart.subTitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] flex items-center">
                      <div className="flex-1">
                        <PieChart width={200} height={200}>
                          <Pie
                            data={getServiceData()}
                            cx={100}
                            cy={100}
                            innerRadius={0}
                            outerRadius={80}
                            dataKey="calls"
                            labelLine={false}
                          >
                            {getServiceData().map((entry: any, index: number) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={entry.color}
                              />
                            ))}
                          </Pie>
                        </PieChart>
                      </div>
                      <div className="flex flex-col justify-center space-y-3 ml-4">
                        {getServiceData().map((entry: any, index: number) => (
                          <div
                            key={entry.service}
                            className="flex items-center space-x-2"
                          >
                            <div
                              className="w-3 h-3 rounded-sm"
                              style={{
                                backgroundColor: entry.color,
                              }}
                            ></div>
                            <span className="text-sm font-medium">
                              {entry.service}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              ({entry.calls})
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Usage Over Time Chart */}
                <Card className="rounded-xs">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>{data.chart.title}</CardTitle>
                        <CardDescription>
                          {data.chart.subTitle}
                        </CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        {data.chart.filters.map((filter) => (
                          <Button
                            key={filter}
                            variant={
                              selectedPeriod === filter ? "default" : "outline"
                            }
                            size="sm"
                            className="rounded-xs"
                            onClick={() => setSelectedPeriod(filter)}
                          >
                            {filter}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        calls: {
                          label: "Calls",
                          color: "#3b82f6",
                        },
                      }}
                      className="h-[200px]"
                    >
                      <AreaChart data={getUsageData()}>
                        <defs>
                          <linearGradient
                            id="colorCalls"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#3b82f6"
                              stopOpacity={0.3}
                            />
                            <stop
                              offset="95%"
                              stopColor="#3b82f6"
                              stopOpacity={0.1}
                            />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis
                          dataKey="day"
                          tickLine={false}
                          axisLine={false}
                          tick={{ fontSize: 12 }}
                        />
                        <YAxis
                          tickLine={false}
                          axisLine={false}
                          tick={{ fontSize: 12 }}
                        />
                        <ChartTooltip
                          content={<ChartTooltipContent />}
                          contentStyle={{
                            backgroundColor: "white",
                            border: "1px solid #e5e7eb",
                            borderRadius: "8px",
                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="calls"
                          stroke="#3b82f6"
                          strokeWidth={2}
                          fill="url(#colorCalls)"
                          dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                          activeDot={{
                            r: 6,
                            stroke: "#3b82f6",
                            strokeWidth: 2,
                            fill: "white",
                          }}
                        />
                      </AreaChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Calls Table */}
              <Card className="rounded-xs">
                <CardHeader>
                  <CardTitle>{data.table.title}</CardTitle>
                  <CardDescription>{data.table.subTitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        {data.table.columns.map((column, index) => (
                          <TableHead key={index}>{column}</TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {getRecentCalls().map((call) => (
                        <TableRow key={call.id}>
                          <TableCell className="font-medium">{call.time}</TableCell>
                          <TableCell>{call.type}</TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              {getServiceIcon(call.service)}
                              <span>{call.service}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <div className={`w-2 h-2 rounded-full ${getPriorityColor(call.priority)}`}></div>
                              <span className="text-sm">{call.priority}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                call.status === "Completed"
                                  ? "default"
                                  : call.status === "Abandoned"
                                    ? "destructive"
                                    : "secondary"
                              }
                              className="rounded-xs"
                            >
                              {call.status === "Completed" ? (
                                <CheckCircle className="w-3 h-3 mr-1" />
                              ) : call.status === "Abandoned" ? (
                                <AlertTriangle className="w-3 h-3 mr-1" />
                              ) : (
                                <AlertTriangle className="w-3 h-3 mr-1" />
                              )}
                              {call.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">{call.location}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Bottom Section Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {getBottomSectionData().map((section, index) => (
                  <Card key={index} className="rounded-xs">
                    <CardHeader>
                      <CardTitle className="text-lg">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {section.data.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">{item.label}</span>
                          <span className={`font-semibold ${item.text || ''}`}>{item.value}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <CallsignModal
        isOpen={isCallsignModalOpen}
        onClose={() => setIsCallsignModalOpen(false)}
      />
    </div>
  );
}
