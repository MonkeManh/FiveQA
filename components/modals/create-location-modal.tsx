"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  EFireStations,
  EHPPosts,
  EPatrolAreas,
  EPDAgencies,
} from "@/models/enums";
import { Plus } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
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
import { ILocation } from "@/models/interfaces";
import { toast } from "sonner";

interface CreateLocationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLocationCreated: (open: boolean) => void;
}

export default function CreateLocationModal({
  open,
  onOpenChange,
  onLocationCreated,
}: CreateLocationModalProps) {
  const [form, setForm] = useState<ILocation>({
    id: 0,
    name: "",
    postal: "",
    mainStreet: "",
    crossStreet1: "",
    crossStreet2: "",
    apt: "",
    twp: "",
    municp: "",
    cids: "",
    hasHeli: false,
    fireBox: "",
    fdDistrict: EFireStations.Station1,
    pdDistrict: EPDAgencies.LSPD,
    post: EHPPosts.North,
    patrolArea: EPatrolAreas.Area1,
    fdRunOrder: [] as EFireStations[],
    pdRunOrder: [] as EPDAgencies[],
  });
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (name: string, value: any) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFDRunOrderChange = (selected: string[]) => {
    handleInputChange("fdRunOrder", selected as EFireStations[]);
  };

  const handlePDRunOrderChange = (selected: string[]) => {
    handleInputChange("pdRunOrder", selected as EPDAgencies[]);
  };

  const handleCreateLocation = async (loc: ILocation) => {
    if (!loc.name) return toast.error("Missing location name!");
    if (!loc.postal) return toast.error("Missing postal!");
    if (!loc.mainStreet) return toast.error("Missing main street!");
    if (!loc.crossStreet1 || !loc.crossStreet2)
      return toast.error("Missing cross streets!");
    if (!loc.hasHeli)
      return toast.error("Missing helicopter landing availability!");
    if (!loc.fireBox) return toast.error("Missing fire box!");
    if (!loc.fdDistrict) return toast.error("Missing fire district!");
    if (!loc.pdDistrict) return toast.error("Missing police district!");
    if (!loc.post) return toast.error("Missing HP post!");
    if (!loc.patrolArea) return toast.error("Missing patrol area!");
    if (!loc.fdRunOrder || loc.fdRunOrder.length === 0)
      return toast.error("Missing fire run order!");
    if (!loc.pdRunOrder || loc.pdRunOrder.length === 0)
      return toast.error("Missing police run order!");
    // If all validations pass, proceed with creating the location
    console.log("New location created:", loc);
    setSubmitting(true);

    try {
      const res = await fetch("/api/location/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          location: loc,
        }),
      });

      if (res.status === 201) {
        toast.success("Location created successfully!");
      } else {
        const errorText = await res.text();
        toast.error(`Failed to create location: ${errorText}`);
      }
    } catch (error) {
      console.error("Error creating location:", error);
      toast.error("An error occurred while creating the location.");
    }
    setSubmitting(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // TODO: Call API to create location
      // await fetch("/api/locations", { method: "POST", body: JSON.stringify(form) });
      await handleCreateLocation(form);
      onLocationCreated(false);
      onOpenChange(false);
      setForm({
        id: 0,
        name: "",
        postal: "",
        mainStreet: "",
        crossStreet1: "",
        crossStreet2: "",
        apt: "",
        twp: "",
        municp: "",
        cids: "",
        hasHeli: false,
        fireBox: "",
        fdDistrict: EFireStations.Station1,
        pdDistrict: EPDAgencies.LSPD,
        post: EHPPosts.North,
        patrolArea: EPatrolAreas.Area1,
        fdRunOrder: [] as EFireStations[],
        pdRunOrder: [] as EPDAgencies[],
      });
    } finally {
      setSubmitting(false);
    }
  };

  const FD_OPTIONS = Object.values(EFireStations).map((station) => ({
    label: `Station ${station.replace("STATION_", "")}`,
    value: station,
  }));

  const PD_OPTIONS = Object.values(EPDAgencies).map((agency) => ({
    label: `${agency.replace("AGENCY_", "")}`,
    value: agency,
  }));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl w-[80vw] sm:max-w-7xl rounded-xs">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Add New Location
          </DialogTitle>
          <DialogDescription>
            Create a new verified location with all required details
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Location Name *</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                className="rounded-xs h-fit"
                autoComplete="off"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="postal">Postal Code *</Label>
              <Input
                id="postal"
                value={form.postal}
                onChange={(e) => handleInputChange("postal", e.target.value)}
                required
                className="rounded-xs h-fit"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="mainStreet">Main Street *</Label>
              <Input
                id="mainStreet"
                value={form.mainStreet}
                onChange={(e) =>
                  handleInputChange("mainStreet", e.target.value)
                }
                required
                className="rounded-xs h-fit"
                autoComplete="off"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="crossStreet1">Cross Street 1 *</Label>
              <Input
                id="crossStreet1"
                value={form.crossStreet1}
                onChange={(e) =>
                  handleInputChange("crossStreet1", e.target.value)
                }
                required
                className="rounded-xs h-fit"
                autoComplete="off"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="crossStreet2">Cross Street 2 *</Label>
              <Input
                id="crossStreet2"
                value={form.crossStreet2}
                onChange={(e) =>
                  handleInputChange("crossStreet2", e.target.value)
                }
                required
                className="rounded-xs h-fit"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="apt">Apartment/Unit</Label>
              <Input
                id="apt"
                value={form.apt}
                onChange={(e) => handleInputChange("apt", e.target.value)}
                className="rounded-xs h-fit"
                autoComplete="off"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="twp">Township</Label>
              <Input
                id="twp"
                value={form.twp}
                onChange={(e) => handleInputChange("twp", e.target.value)}
                className="rounded-xs h-fit"
                autoComplete="off"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="municp">Municipality</Label>
              <Input
                id="municp"
                value={form.municp}
                onChange={(e) => handleInputChange("municp", e.target.value)}
                className="rounded-xs h-fit"
                autoComplete="off"
              />
            </div>
          </div>

          <Separator />

          <div>
            <header className="font-semibold mb-4">Fire Department</header>
            <div className="grid grid-cols-2 gap-4 items-start">
              <div className="grid grid-cols-2 items-start gap-10">
                <div className="flex items-start gap-2">
                  <div className="space-y-2">
                    <Label htmlFor="fireBox">Fire Box *</Label>
                    <Input
                      id="fireBox"
                      value={form.fireBox}
                      onChange={(e) =>
                        handleInputChange("fireBox", e.target.value)
                      }
                      required
                      className="rounded-xs h-fit w-fit"
                      autoComplete="off"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hasHeli">Helicopter</Label>
                    <Checkbox
                      id="hasHeli"
                      checked={form.hasHeli}
                      onCheckedChange={(checked) =>
                        handleInputChange("hasHeli", checked)
                      }
                      className="rounded-xs w-7 h-7"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fdDistrict">Fire District *</Label>
                  <Select
                    value={form.fdDistrict}
                    onValueChange={(value) =>
                      handleInputChange("fdDistrict", value)
                    }
                  >
                    <SelectTrigger className="rounded-xs">
                      <SelectValue className="rounded-xs" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xs">
                      {Object.values(EFireStations).map((station) => (
                        <SelectItem
                          key={station}
                          value={station}
                          className="rounded-xs"
                        >
                          Station {station}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 col-span-2">
                  <Label htmlFor="cids">CIDS Information</Label>
                  <Textarea
                    id="cids"
                    value={form.cids}
                    onChange={(e) => handleInputChange("cids", e.target.value)}
                    rows={2}
                    placeholder="Critical Information Dispatch System details..."
                    className="rounded-xs"
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>FD Run Order *</Label>
                <div className="flex flex-wrap gap-2">
                  <MultiSelectInput
                    options={FD_OPTIONS}
                    selected={form.fdRunOrder || []}
                    onSelectionChange={handleFDRunOrderChange}
                    placeholder="Select fire stations in order..."
                  />
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <header className="font-semibold mb-4">Police Department</header>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pdDistrict">Police District *</Label>
                  <Select
                    value={form.pdDistrict}
                    onValueChange={(value) =>
                      handleInputChange("pdDistrict", value)
                    }
                  >
                    <SelectTrigger className="rounded-xs">
                      <SelectValue className="rounded-xs" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xs">
                      {Object.values(EPDAgencies).map((station) => (
                        <SelectItem
                          key={station}
                          value={station}
                          className="rounded-xs"
                        >
                          {station}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="post">HP Post *</Label>
                  <Select
                    value={form.post}
                    onValueChange={(value) => handleInputChange("post", value)}
                  >
                    <SelectTrigger className="rounded-xs">
                      <SelectValue className="rounded-xs" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xs">
                      {Object.values(EHPPosts).map((station) => (
                        <SelectItem
                          key={station}
                          value={station}
                          className="rounded-xs"
                        >
                          {station}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="patrolArea">Patrol Area *</Label>
                  <Select
                    value={form.patrolArea}
                    onValueChange={(value) =>
                      handleInputChange("patrolArea", value)
                    }
                  >
                    <SelectTrigger className="rounded-xs">
                      <SelectValue className="rounded-xs" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xs">
                      {Object.values(EPatrolAreas).map((station) => (
                        <SelectItem
                          key={station}
                          value={station}
                          className="rounded-xs"
                        >
                          Area {station}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>PD Run Order *</Label>
                <div className="flex flex-wrap gap-2">
                  <MultiSelectInput
                    options={PD_OPTIONS}
                    selected={form.pdRunOrder || []}
                    onSelectionChange={handlePDRunOrderChange}
                    placeholder="Select police agencies in order..."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={submitting}>
              {submitting ? "Creating..." : "Create Location"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
