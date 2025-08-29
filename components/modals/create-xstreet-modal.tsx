"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  EFireStations,
  EHPPosts,
  EPatrolAreas,
  EPDAgencies,
} from "@/models/enums";
import { Label } from "@/components/ui/label";
import { Checkbox } from "../ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Separator } from "../ui/separator";
import { MultiSelectInput } from "../ui/multi-select-input";
import { toast } from "sonner";
import { Plus, Trash2 } from "lucide-react";
import { StreetAutocomplete } from "@/components/ui/street-autocomplete";
import { getStreets, getLocations } from "@/services/dataService";
import { ResponseOrders } from "@/data/plans";

interface ICreateXStreetModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLocationCreated: (open: boolean) => void;
  mainStreet: string;
}

interface CrossingStreetForm {
  street: string;
  postal: string[];
  twp: string;
  municp: string;
  hasHeli: 0 | 1;
  fdDistrict: EFireStations | "";
  pdDistrict: EPDAgencies | "";
  fireBox: string;
  post: EHPPosts | "";
  patrolArea: EPatrolAreas | "";
  fdRunOrder: EFireStations[];
  pdRunOrder: EPDAgencies[];
}

export default function CreateXStreetModal({
  open,
  onOpenChange,
  onLocationCreated,
  mainStreet,
}: ICreateXStreetModalProps) {
  const [crossingStreets, setCrossingStreets] = useState<CrossingStreetForm[]>([
    {
      street: "",
      postal: [],
      twp: "",
      municp: "",
      hasHeli: 0,
      fdDistrict: "",
      pdDistrict: "",
      fireBox: "",
      post: "",
      patrolArea: "",
      fdRunOrder: [],
      pdRunOrder: [],
    },
  ]);
  const [submitting, setSubmitting] = useState(false);
  const [streetSuggestions, setStreetSuggestions] = useState<string[]>([]);
  const [postalInputs, setPostalInputs] = useState<string[]>(() =>
    crossingStreets.map((cs) => cs.postal.join(", "))
  );

  const FD_OPTIONS = Object.values(EFireStations).map((station) => ({
    label: `Station ${station.replace("STATION_", "")}`,
    value: station,
  }));

  const PD_OPTIONS = Object.values(EPDAgencies).map((agency) => ({
    label: `${agency.replace("AGENCY_", "")}`,
    value: agency,
  }));

  const POST_OPTIONS = Object.values(EHPPosts).map((post) => ({
    label: `Post ${post}`,
    value: post,
  }));

  const PATROL_OPTIONS = Object.values(EPatrolAreas).map((area) => ({
    label: `Area ${area.replace("AREA_", "")}`,
    value: area,
  }));

  const handleInputChange = (index: number, field: string, value: any) => {
    setCrossingStreets((prev) =>
      prev.map((street, i) =>
        i === index ? { ...street, [field]: value } : street
      )
    );
  };

  const addCrossingStreet = () => {
    setCrossingStreets((prev) => [
      ...prev,
      {
        street: "",
        postal: [],
        twp: "",
        municp: "",
        hasHeli: 0,
        fdDistrict: "",
        pdDistrict: "",
        fireBox: "",
        post: "",
        patrolArea: "",
        fdRunOrder: [],
        pdRunOrder: [],
      },
    ]);
    setPostalInputs((prev) => [...prev, ""]);
  };

  const removeCrossingStreet = (index: number) => {
    if (crossingStreets.length > 1) {
      setCrossingStreets((prev) => prev.filter((_, i) => i !== index));
      setPostalInputs((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = async () => {
    const validStreets = crossingStreets.filter(
      (street) => street.street && street.postal.length > 0
    );

    if (validStreets.length === 0) {
      toast.error(
        "Please fill in at least one crossing street with required fields"
      );
      return;
    }

    setSubmitting(true);
    try {
      // TODO: Implement actual API call

      const res = await fetch("/api/cross-street/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          street: mainStreet.trim(),
          crossingStreets: validStreets,
        }),
      });

      if (res.status === 201) {
        window.location.reload();
        toast.success(
          `${validStreets.length} crossing street(s) created successfully for ${mainStreet}`
        );
        onLocationCreated(false);
        setCrossingStreets([
          {
            street: "",
            postal: [],
            twp: "",
            municp: "",
            hasHeli: 0,
            fdDistrict: "",
            pdDistrict: "",
            fireBox: "",
            post: "",
            patrolArea: "",
            fdRunOrder: [],
            pdRunOrder: [],
          },
        ]);
      } else {
        const errorText = await res.text();
        toast.error(`Failed to create location: ${errorText}`);
      }
    } catch (error) {
      toast.error("Failed to create crossing streets");
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    setPostalInputs((prev) => {
      // Rebuild to match current crossingStreets length/content
      const next = crossingStreets.map(
        (cs, i) => prev[i] ?? cs.postal.join(", ")
      );
      return next;
    });
  }, [crossingStreets]);

  useEffect(() => {
    const loadStreetSuggestions = async () => {
      try {
        const [streets, locations] = await Promise.all([
          getStreets(),
          getLocations(),
        ]);

        const suggestions = new Set<string>();

        // Add main streets
        streets.forEach((street) => suggestions.add(street.name));
        locations.forEach((location) => {
          suggestions.add(location.mainStreet);
          if (location.crossStreet1) suggestions.add(location.crossStreet1);
          if (location.crossStreet2) suggestions.add(location.crossStreet2);
        });

        // Add crossing streets
        streets.forEach((street) => {
          street.crossingStreets?.forEach((crossing) => {
            suggestions.add(crossing.street);
          });
        });

        setStreetSuggestions(Array.from(suggestions).sort());
      } catch (error) {
        console.error("Failed to load street suggestions:", error);
      }
    };

    if (open) {
      loadStreetSuggestions();
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl w-[80vw] sm:max-w-7xl rounded-xs overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Add Crossing Streets to {mainStreet}</DialogTitle>
          <DialogDescription>
            Add one or more crossing streets with emergency service details
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {crossingStreets.map((crossingStreet, index) => (
            <div key={index} className="border rounded-xs p-4 space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">
                  Crossing Street {index + 1}
                </h3>
                {crossingStreets.length > 1 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeCrossingStreet(index)}
                    className="text-red-600 hover:text-red-700 rounded-xs"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Basic Information */}
                <StreetAutocomplete
                  label="Street Name *"
                  value={crossingStreet.street}
                  onChange={(value: string) =>
                    handleInputChange(index, "street", value)
                  }
                  placeholder="Enter street name"
                  suggestions={streetSuggestions}
                />

                <div className="space-y-2">
                  <Label>Postal Codes *</Label>
                  <Input
                    value={postalInputs[index] ?? ""}
                    onChange={(e) => {
                      const value = e.target.value;

                      // keep raw string for UX
                      setPostalInputs((prev) => {
                        const copy = [...prev];
                        copy[index] = value;
                        return copy;
                      });

                      // parse into array for your data model
                      const parsed = value
                        .split(",")
                        .map((p) => p.trim())
                        .filter(Boolean);

                      handleInputChange(index, "postal", parsed);
                    }}
                    className="rounded-xs"
                    placeholder="Enter postal codes (comma separated)"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Township</Label>
                  <Input
                    value={crossingStreet.twp}
                    onChange={(e) =>
                      handleInputChange(index, "twp", e.target.value)
                    }
                    className="rounded-xs"
                    placeholder="Enter township"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Municipality</Label>
                  <Input
                    value={crossingStreet.municp}
                    onChange={(e) =>
                      handleInputChange(index, "municp", e.target.value)
                    }
                    className="rounded-xs"
                    placeholder="Enter municipality"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Fire Box</Label>
                  <Input
                    value={crossingStreet.fireBox}
                    onChange={(e) => {
                      const value = e.target.value;
                      handleInputChange(index, "fireBox", value);

                      if (value) {
                        const [prefix] = value.split("-");
                        if (prefix) {
                          const fdDistrict =
                            prefix.length === 1 ? `0${prefix}` : prefix;
                          handleInputChange(index, "fdDistrict", fdDistrict);
                        }
                      }
                    }}
                    className="rounded-xs"
                    placeholder="Enter fire box"
                  />
                </div>

                {/* Emergency Services */}
                <div className="space-y-2">
                  <Label>Fire District</Label>
                  <Select
                    value={crossingStreet.fdDistrict}
                    onValueChange={(value) =>
                      handleInputChange(index, "fdDistrict", value)
                    }
                  >
                    <SelectTrigger className="rounded-xs">
                      <SelectValue placeholder="Select fire district" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xs">
                      {FD_OPTIONS.map((option) => (
                        <SelectItem
                          className="rounded-xs"
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Police District</Label>
                  <Select
                    value={crossingStreet.pdDistrict}
                    onValueChange={(value) => {
                      handleInputChange(index, "pdDistrict", value);
                      if (value === EPDAgencies.PBPD) {
                        handleInputChange(
                          index,
                          "patrolArea",
                          EPatrolAreas.Area5
                        );
                        handleInputChange(index, "post", EHPPosts.North);
                        handleInputChange(
                          index,
                          "pdRunOrder",
                          ResponseOrders.PBPD_BCSO_SAHP_SSPD_RCSO_MBPD_LCSO_LSPD
                        );
                      } else if (value === EPDAgencies.SSPD) {
                        handleInputChange(
                          index,
                          "patrolArea",
                          EPatrolAreas.Area6
                        );
                        handleInputChange(index, "post", EHPPosts.North);
                        handleInputChange(
                          index,
                          "pdRunOrder",
                          ResponseOrders.SSPD_BCSO_SAHP_PBPD_LCSO_LSPD_RCSO_MBPD
                        );
                      } else if (
                        value === EPDAgencies.MBPD ||
                        value === EPDAgencies.RCSO
                      ) {
                        handleInputChange(
                          index,
                          "patrolArea",
                          EPatrolAreas.Area7
                        );
                        handleInputChange(index, "post", EHPPosts.North);
                        if (value === EPDAgencies.MBPD) {
                          handleInputChange(
                            index,
                            "pdRunOrder",
                            ResponseOrders.MBPD_RCSO_SAHP_BCSO_PBPD_SSPD_LCSO_LSPD
                          );
                        }
                      } else if (
                        value === EPDAgencies.LSPD ||
                        value === EPDAgencies.LCSO
                      ) {
                        handleInputChange(index, "post", EHPPosts.South);
                      } else if (value === EPDAgencies.BCSO) {
                        handleInputChange(index, "post", EHPPosts.North);
                      }
                    }}
                  >
                    <SelectTrigger className="rounded-xs">
                      <SelectValue placeholder="Select police district" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xs">
                      {PD_OPTIONS.map((option) => (
                        <SelectItem
                          className="rounded-xs"
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Highway Patrol Post</Label>
                  <Select
                    value={crossingStreet.post}
                    onValueChange={(value) =>
                      handleInputChange(index, "post", value)
                    }
                  >
                    <SelectTrigger className="rounded-xs">
                      <SelectValue placeholder="Select HP post" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xs">
                      {POST_OPTIONS.map((option) => (
                        <SelectItem
                          className="rounded-xs"
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Patrol Area</Label>
                  <Select
                    value={crossingStreet.patrolArea}
                    onValueChange={(value) =>
                      handleInputChange(index, "patrolArea", value)
                    }
                  >
                    <SelectTrigger className="rounded-xs">
                      <SelectValue placeholder="Select patrol area" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xs">
                      {PATROL_OPTIONS.map((option) => (
                        <SelectItem
                          className="rounded-xs"
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`hasHeli-${index}`}
                    checked={crossingStreet.hasHeli === 1}
                    onCheckedChange={(checked) =>
                      handleInputChange(index, "hasHeli", checked ? 1 : 0)
                    }
                    className="rounded-xs w-6 h-6"
                  />
                  <Label htmlFor={`hasHeli-${index}`}>
                    Helicopter Available
                  </Label>
                </div>
              </div>

              <Separator />

              {/* Run Orders */}
              <div className="space-y-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Fire Department Run Order</Label>
                  <MultiSelectInput
                    options={FD_OPTIONS}
                    selected={crossingStreet.fdRunOrder}
                    onSelectionChange={(selected) =>
                      handleInputChange(index, "fdRunOrder", selected)
                    }
                    placeholder="Search and select fire stations..."
                  />
                </div>

                <div className="space-y-2">
                  <Label>Police Department Run Order</Label>
                  <MultiSelectInput
                    options={PD_OPTIONS}
                    selected={crossingStreet.pdRunOrder}
                    onSelectionChange={(selected) =>
                      handleInputChange(index, "pdRunOrder", selected)
                    }
                    placeholder="Search and select police agencies..."
                  />
                </div>
              </div>
            </div>
          ))}

          <Button
            type="button"
            variant="outline"
            onClick={addCrossingStreet}
            className="w-full bg-transparent"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Another Crossing Street
          </Button>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-2 pt-4">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={submitting}
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={submitting}>
            {submitting
              ? "Creating..."
              : `Create ${crossingStreets.length} Crossing Street${
                  crossingStreets.length > 1 ? "s" : ""
                }`}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
