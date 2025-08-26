"use client";

import { ILocation, IUser } from "@/models/interfaces";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { MapPin, Phone, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import CreateLocationModal from "@/components/modals/create-location-modal";
import { toast } from "sonner";

interface ILocationListProps {
  user: IUser;
  locations: ILocation[];
}

export default function LocationList({ user, locations }: ILocationListProps) {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [selectedCids, setSelectedCids] = useState<{
    name: string;
    cids: string;
  } | null>(null);

  const handleCidsClick = (locationName: string, cids: string) => {
    setSelectedCids({ name: locationName, cids });
  };

  return (
    <div>
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">
            Locations {user.isAdmin && "Management"}
          </h1>
          {user.isAdmin && (
            <p className="text-muted-foreground pt-1">
              Manage verified locations
            </p>
          )}
        </div>
        <Button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 rounded-xs"
        >
          <Plus className="h-4 w-4" />
          Add Location
        </Button>
      </header>
      <Card className="rounded-xs">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            All Locations ({locations.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Fire Box</TableHead>
                <TableHead>Districts</TableHead>
                <TableHead>Run Orders</TableHead>
                <TableHead>Features</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {locations.map((location) => (
                <TableRow key={location.id}>
                  <TableCell>
                    <div className="font-medium">{location.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Postal: {location.postal}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{location.mainStreet}</div>
                      <div className="text-muted-foreground">
                        {location.crossStreet1} / {location.crossStreet2}
                      </div>
                      {location.municp && (
                        <div className="text-muted-foreground">
                          {location.twp} ({location.municp})
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className="rounded-xs" variant="outline">
                      {location.fireBox}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>
                        <Badge variant="outline" className="text-xs rounded-xs">
                          Fire District: {location.fdDistrict}
                        </Badge>
                        <Badge variant="outline" className="text-xs rounded-xs">
                          Police District: {location.pdDistrict}
                        </Badge>
                      </div>
                      <Badge variant="outline" className="text-xs rounded-xs">
                        Patrol Area: {location.patrolArea}
                      </Badge>
                      <Badge variant="outline" className="text-xs rounded-xs">
                        Post: {location.post}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1 flex flex-col">
                      <Badge variant="outline" className="text-xs rounded-xs">
                        Fire: {location.fdRunOrder.join(", ")}
                      </Badge>
                      <Badge variant="outline" className="text-xs rounded-xs">
                        Police: {location.pdRunOrder.join(", ")}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {location.hasHeli && (
                        <Badge
                          variant="secondary"
                          className="text-xs flex items-center gap-1 rounded-xs"
                        >
                          🚁 Heli
                        </Badge>
                      )}
                      {location.cids && (
                        <Badge
                          variant="outline"
                          className="text-xs flex items-center gap-1 rounded-xs"
                          onClick={() =>
                            handleCidsClick(location.name, location.cids!)
                          }
                        >
                          <Phone className="h-3 w-3" />
                          CIDS
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Dialog open={!!selectedCids} onOpenChange={() => setSelectedCids(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              CIDS Information - {selectedCids?.name}
            </DialogTitle>
            <DialogDescription>
              Critical Information Dispatch System details for this location
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm leading-relaxed whitespace-pre-wrap">
                {selectedCids?.cids}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <CreateLocationModal
        open={showForm}
        onOpenChange={setShowForm}
        onLocationCreated={setShowForm}
      />
    </div>
  );
}
