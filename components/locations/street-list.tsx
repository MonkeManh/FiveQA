"use client";
import { IStreets, IUser } from "@/models/interfaces";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Bird,
  ChevronDown,
  ChevronRight,
  Flame,
  FlameIcon,
  Lock,
  MapPin,
  Plus,
  Shield,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import CreateXStreetModal from "@/components/modals/create-xstreet-modal";

interface IStreetListProps {
  user: IUser;
  streets: IStreets[];
}

export default function StreetList({ user, streets }: IStreetListProps) {
  const [newStreetName, setNewStreetName] = useState<string>("");
  const [showNewStreet, setShowNewStreet] = useState<boolean>(false);
  const [isSubmittingNewStreet, setIsSubmittingNewStreet] =
    useState<boolean>(false);
  const [showCrossingForm, setShowCrossingForm] = useState<string | null>(null);
  const [expandedStreets, setExpandedStreets] = useState<Set<string>>(
    new Set()
  );
  const [selectedFireRunOrder, setSelectedFireRunOrder] = useState<{
    name: string;
    runOrder: string[];
  } | null>(null);
  const [selectedPDRunOrder, setSelectedPDRunOrder] = useState<{
    name: string;
    runOrder: string[];
  } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);

  const totalPages = Math.ceil(streets.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStreets = streets.slice(startIndex, endIndex);

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1);
  };

  const toggleStreetExpansion = (streetName: string) => {
    const newExpanded = new Set(expandedStreets);
    if (newExpanded.has(streetName)) {
      newExpanded.delete(streetName);
    } else {
      newExpanded.add(streetName);
    }
    setExpandedStreets(newExpanded);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("Submitting new street:", newStreetName);
    e.preventDefault();
    setIsSubmittingNewStreet(true);

    try {
      const res = await fetch("/api/streets/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ street: newStreetName.trim() }),
      });

      if (res.status === 201) {
        toast.success("Location created successfully!");
        window.location.reload();
        setShowNewStreet(false);
        setNewStreetName("");
      } else {
        const errorText = await res.text();
        toast.error(`Failed to create location: ${errorText}`);
      }
    } catch (error) {
      console.error("Error creating new street:", error);
      toast.error("Failed to create new street");
    } finally {
      setIsSubmittingNewStreet(false);
    }
  };

  const getSortablePostal = (crossing: any) => {
    if (!crossing.postal || crossing.postal.length === 0) return "99999";
    // Use the first postal code for sorting, pad with zeros for proper string comparison
    return crossing.postal[0].padStart(5, "0");
  };

  return (
    <div>
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">
            Streets {user.isAdmin && "Management"}
          </h1>
          {user.isAdmin && (
            <p className="text-muted-foreground pt-1">
              Manage streets and their intersections
            </p>
          )}
        </div>
        <Dialog open={showNewStreet} onOpenChange={setShowNewStreet}>
          <DialogTrigger asChild>
            <Button className="rounded-xs">
              <Plus className="h-4 w-4 mr-2" />
              Add Street
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-container max-h-[90vh] overflow-y-auto rounded-xs">
            <DialogHeader>
              <DialogTitle>Add New Street</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Street Name *</Label>
                <Input
                  id="name"
                  value={newStreetName}
                  onChange={(e) => setNewStreetName(e.target.value)}
                  placeholder="Enter street name"
                  required
                  disabled={isSubmittingNewStreet}
                  className="rounded-xs"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowNewStreet(false)}
                  className="rounded-xs"
                  disabled={isSubmittingNewStreet}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="rounded-xs"
                  disabled={isSubmittingNewStreet}
                >
                  {isSubmittingNewStreet ? "Creating street..." : "Add Street"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </header>
      <div className="space-y-4">
        {currentStreets.map((street, index) => {
          return (
            <Card key={index} className="rounded-xs py-4 px-4">
              <CardHeader className="px-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleStreetExpansion(street.name)}
                      className="p-1 rounded-xs"
                    >
                      {expandedStreets.has(street.name) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </Button>
                    <CardTitle className="text-xl">{street.name}</CardTitle>
                    <Badge variant="secondary" className="text-xs rounded-xs">
                      {street.crossingStreets
                        ? street.crossingStreets.length
                        : 0}{" "}
                      crossing street
                      {street.crossingStreets &&
                      street.crossingStreets.length === 1
                        ? ""
                        : "s"}
                    </Badge>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-xs"
                    onClick={() => setShowCrossingForm(street.name)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Crossing
                  </Button>
                </div>
              </CardHeader>
              {expandedStreets.has(street.name) && (
                <CardContent className="space-y-4 pt-0">
                  {street.crossingStreets &&
                    street.crossingStreets
                      .sort((a, b) =>
                        getSortablePostal(a).localeCompare(getSortablePostal(b))
                      )
                      .map((crossing, index) => (
                        <Card
                          key={index}
                          className="rounded-xs border-l-blue-500 py-4"
                        >
                          <CardContent className="px-4">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold text-lg">
                                {crossing.street}
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {crossing.postal.map((postal) => (
                                  <Badge
                                    key={postal}
                                    variant="outline"
                                    className="text-xs"
                                  >
                                    <MapPin className="h-3 w-3 mr-1" />
                                    {postal}
                                  </Badge>
                                ))}
                                {crossing.hasHeli === 1 && (
                                  <Badge variant="outline" className="text-xs">
                                    🚁 Heli
                                  </Badge>
                                )}
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                              <div className="space-y-1">
                                <p className="font-medium">Location</p>
                                <div className="text-muted-foreground">
                                  {crossing.twp} ({crossing.municp})
                                </div>
                              </div>
                              <div className="space-y-1">
                                <p className="font-medium">Fire Box</p>
                                <Badge className="rounded-xs" variant="outline">
                                  {crossing.fireBox}
                                </Badge>
                              </div>
                              <div className="space-y-1">
                                <p className="font-medium">Districts</p>
                                <div className="flex items-center gap-1">
                                  <Badge
                                    variant="outline"
                                    className="text-xs rounded-xs"
                                  >
                                    Fire District: {crossing.fdDistrict}
                                  </Badge>
                                  <Badge
                                    variant="outline"
                                    className="text-xs rounded-xs"
                                  >
                                    Police District: {crossing.pdDistrict}
                                  </Badge>
                                </div>
                                <Badge
                                  variant="outline"
                                  className="text-xs rounded-xs"
                                >
                                  Patrol Area: {crossing.patrolArea}
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className="text-xs rounded-xs"
                                >
                                  Post: {crossing.post}
                                </Badge>
                              </div>
                              <div className="space-y-1">
                                <p className="font-medium">Run Orders</p>
                                <div className="flex items-center gap-1">
                                  <Badge
                                    variant="outline"
                                    className="text-xs rounded-xs"
                                    onClick={() =>
                                      setSelectedFireRunOrder({
                                        name: crossing.street,
                                        runOrder: crossing.fdRunOrder,
                                      })
                                    }
                                  >
                                    Fire Stations
                                  </Badge>
                                  <Badge
                                    variant="outline"
                                    className="text-xs rounded-xs"
                                    onClick={() =>
                                      setSelectedPDRunOrder({
                                        name: crossing.street,
                                        runOrder: crossing.pdRunOrder,
                                      })
                                    }
                                  >
                                    Police Agencies
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>
      <Dialog
        open={!!selectedFireRunOrder}
        onOpenChange={() => setSelectedFireRunOrder(null)}
      >
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FlameIcon className="h-5 w-5 text-red-500" />
              Fire Run Order - {selectedFireRunOrder?.name}
            </DialogTitle>
            <DialogDescription>
              The fire department station run order for this street
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <div className="bg-muted p-4 rounded-lg flex flex-wrap gap-2">
              {selectedFireRunOrder?.runOrder.map((station, index) => (
                <span key={index} className="flex items-center gap-1">
                  <Badge variant="outline" className="text-xs rounded-xs">
                    Station {station}
                  </Badge>
                  {index !== selectedFireRunOrder?.runOrder.length - 1 && "→"}
                </span>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog
        open={!!selectedPDRunOrder}
        onOpenChange={() => setSelectedPDRunOrder(null)}
      >
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-red-500" />
              Police Agency Order - {selectedPDRunOrder?.name}
            </DialogTitle>
            <DialogDescription>
              The police agencies run order for this street
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <div className="bg-muted p-4 rounded-lg flex flex-wrap gap-2">
              {selectedPDRunOrder?.runOrder.map((station, index) => (
                <span key={index} className="flex items-center gap-1">
                  <Badge variant="outline" className="text-xs rounded-xs">
                    {station}
                  </Badge>
                  {index !== selectedPDRunOrder?.runOrder.length - 1 && "→"}
                </span>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <CreateXStreetModal
        open={showCrossingForm !== null}
        onOpenChange={(open) =>
          setShowCrossingForm(open ? showCrossingForm : null)
        }
        onLocationCreated={() => setShowCrossingForm(null)}
        mainStreet={showCrossingForm || ""}
      />
    </div>
  );
}
