"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  Shield,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  FireExtinguisher,
  Ambulance,
  Activity,
  Plane,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getEMSPlans } from "@/data/plans/ems/emsPlans";
import { IRPUnit } from "@/models/interfaces";
import Footer from "@/components/footer";

function getTypeIcon(type: string) {
  switch (type) {
    case "Engine":
      return <FireExtinguisher />;
    case "Transport (BLS)":
      return <Ambulance />;
    case "Transport (ALS)":
      return <Ambulance />;
    case "Transport (ACLS)":
      return <Ambulance />;
    case "EMS Officer":
      return <Activity />;
    case "Helo":
      return <Plane />;
    default:
      null;
  }
}

export default function ResponsePlansPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIncidentType, setSelectedIncidentType] =
    useState<string>("all");
  const [showPoliceOnly, setShowPoliceOnly] = useState(false);
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  const allPlans = getEMSPlans();

  // Get unique incident types for filter
  const incidentTypes = useMemo(() => {
    const types = new Set(allPlans.map((plan) => plan.incidentType));
    return Array.from(types).sort();
  }, [allPlans]);

  // Filter plans based on search and filters
  const filteredPlans = useMemo(() => {
    return allPlans.filter((plan) => {
      const matchesSearch =
        plan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        plan.incidentType.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesIncidentType =
        selectedIncidentType === "all" ||
        plan.incidentType === selectedIncidentType;

      const matchesPoliceFilter = !showPoliceOnly || plan.sendPolice;

      return matchesSearch && matchesIncidentType && matchesPoliceFilter;
    });
  }, [allPlans, searchTerm, selectedIncidentType, showPoliceOnly]);

  const toggleRowExpansion = (planId: number) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(planId)) {
      newExpanded.delete(planId);
    } else {
      newExpanded.add(planId);
    }
    setExpandedRows(newExpanded);
  };

  const getTotalUnits = (units: IRPUnit[]) => {
    return units.reduce((total, unit) => total + unit.quantity, 0);
  };

  const getUnitTypesBadges = (units: IRPUnit[]) => {
    const uniqueTypes = new Set(units.map((unit) => unit.type));
    return Array.from(uniqueTypes).slice(0, 3); // Show first 3 types
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const planParam = urlParams.get("plan");
    if (planParam) {
      const planId = Number(planParam);
      if (!isNaN(planId)) {
        const plan = allPlans.find((p) => p.id === planId);
        if (plan) {
          setSearchTerm(plan.name);
          urlParams.delete("plan");
          const newUrl =
            window.location.pathname + "?" + urlParams.toString();
          window.history.replaceState({}, "", newUrl);
        }
      }
    }
  }, [allPlans]);

  return (
    <main>
      <div className="flex justify-center">
        <div className="container mx-auto py-8 px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">
              EMS Response Plans
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive list of emergency medical service response plans and
              unit deployments
            </p>
          </div>

          {/* Search and Filters */}
          <Card className="mb-6 rounded-xs">
            <CardHeader>
              <CardTitle>Search & Filter</CardTitle>
              <CardDescription>
                Find specific response plans by name, incident type, or
                requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search plans by name or incident type..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 rounded-xs"
                    />
                  </div>
                </div>

                <Select
                  value={selectedIncidentType}
                  onValueChange={setSelectedIncidentType}
                >
                  <SelectTrigger className="w-full md:w-48 rounded-xs">
                    <SelectValue placeholder="Incident Type" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xs">
                    <SelectItem value="all" className="rounded-xs">All Types</SelectItem>
                    {incidentTypes.map((type) => (
                      <SelectItem key={type} value={type} className="rounded-xs">
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button
                  variant={showPoliceOnly ? "default" : "outline"}
                  onClick={() => setShowPoliceOnly(!showPoliceOnly)}
                  className="w-full md:w-auto rounded-xs"
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Police Required
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Table */}
          <Card className="rounded-xs">
            <CardHeader>
              <CardTitle>Response Plans ({filteredPlans.length})</CardTitle>
              <CardDescription>
                Click on any row to view detailed unit deployment information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-xs border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12"></TableHead>
                      <TableHead>Plan Name</TableHead>
                      <TableHead>Incident Type</TableHead>
                      <TableHead>Total Units</TableHead>
                      <TableHead>Unit Types</TableHead>
                      <TableHead>Special Requirements</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPlans.map((plan) => (
                      <React.Fragment key={plan.id}>
                        <TableRow className="cursor-pointer hover:bg-muted/50">
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleRowExpansion(plan.id)}
                            >
                              {expandedRows.has(plan.id) ? (
                                <ChevronUp className="h-4 w-4" />
                              ) : (
                                <ChevronDown className="h-4 w-4" />
                              )}
                            </Button>
                          </TableCell>
                          <TableCell className="font-medium rounded-xs">
                            {plan.name}
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className="rounded-xs">{plan.incidentType}</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="rounded-xs">
                              {getTotalUnits(plan.units)} units
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {getUnitTypesBadges(plan.units).map(
                                (type, index) => (
                                  <Badge
                                    key={index}
                                    variant="outline"
                                    className="text-xs rounded-xs"
                                  >
                                    {type}
                                  </Badge>
                                )
                              )}
                              {plan.units.length > 3 && (
                                <Badge variant="outline" className="text-xs rounded-xs">
                                  +{plan.units.length - 3} more
                                </Badge>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              {plan.sendPolice && (
                                <Badge
                                  variant="destructive"
                                  className="text-xs rounded-xs"
                                >
                                  <Shield className="mr-1 h-3 w-3" />
                                  Police
                                </Badge>
                              )}
                              {plan.sendFire && (
                                <Badge
                                  variant="destructive"
                                  className="text-xs rounded-xs"
                                >
                                  <AlertTriangle className="mr-1 h-3 w-3" />
                                  Fire
                                </Badge>
                              )}
                            </div>
                          </TableCell>
                        </TableRow>
                        {expandedRows.has(plan.id) && (
                          <TableRow>
                            <TableCell colSpan={6} className="bg-muted/20">
                              <div className="py-4">
                                <h4 className="font-semibold mb-3">
                                  Unit Deployment Details
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                  {plan.units.map((unit, index) => (
                                    <div
                                      key={index}
                                      className="flex items-center justify-between p-3 bg-secondary rounded-xs border"
                                    >
                                      <span className="font-medium flex items-center gap-2">
                                        {getTypeIcon(unit.type)} {unit.type}
                                      </span>
                                      <Badge variant="outline" className="rounded-xs">
                                        {unit.quantity}{" "}
                                        {unit.quantity === 1 ? "unit" : "units"}
                                      </Badge>
                                    </div>
                                  ))}
                                </div>
                                {(plan.sendPolice || plan.sendFire) && (
                                  <div className="mt-4 p-3 bg-yellow-200/10 border rounded-lg">
                                    <h5 className="font-semibold text-yellow-500 mb-2">
                                      Special Requirements:
                                    </h5>
                                    <div className="flex gap-2">
                                      {plan.sendPolice && (
                                        <Badge variant="destructive">
                                          Police notification required
                                        </Badge>
                                      )}
                                      {plan.sendFire && (
                                        <Badge
                                          variant="outline"
                                          className="text-yellow-700 border-yellow-300"
                                        >
                                          Fire department notification required
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        )}
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {filteredPlans.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <Search className="mx-auto h-12 w-12 mb-4 opacity-50" />
                  <p className="text-lg font-medium">No response plans found</p>
                  <p>Try adjusting your search criteria or filters</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </main>
  );
}
