"use client";
import { postals } from "@/data/locations/postals";
import { streets } from "@/data/locations/streets";
import { ILocation, INewCall, IPostal, IStreets } from "@/models/interfaces";
import { useRouter } from "next/navigation";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoadingState from "@/components/loading-state";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import CallsignModal from "@/components/modals/cancel-call-modal";
import { ArrowLeft, CircleArrowLeft, CircleArrowRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatPhoneNumber } from "@/lib/utils";

type ILocationOption = {
  display: string;
  searchTerms: string[];
  type: "street" | "postal" | "location";
  streetData?: IStreets["crossingStreets"][0] & { mainStreet: string };
  postalData?: IPostal & {
    selectedStreet: string;
    crossStreet1: string;
    crossStreet2: string;
  };
  locationData?: ILocation;
};

interface ICreateCallFormProps {
  locations: ILocation[];
}
  
export default function CreateCallForm({ locations }: ICreateCallFormProps) {
  const [callData, setCallData] = useState<INewCall>({
    location: "",
    apt_unit: "",
    city: "",
    municp: "",
    loc_name: "",
    notes: "",
    cross_streets: "",
    caller_number: "",
    caller_name: "",
    isLocalCaller: false,
    isTransfer: false,
    isTestCase: false,
    service: "",
    page_opened_time: new Date(),
    first_keystroke_time: undefined,
    call_created_time: undefined,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] =
    useState<number>(-1);
  const suggestionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const suggestionsContainerRef = useRef<HTMLDivElement>(null);
  const callerNumberRef = useRef<HTMLInputElement>(null);
  const callerNameRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLButtonElement>(null);
  const createCallRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const CITIES = useMemo(() => {
    const citySet = new Set<string>();

    // Add cities from streets data
    streets.forEach((street) => {
      street.crossingStreets.forEach((crossing) => {
        if (crossing.twp) citySet.add(crossing.twp);
      });
    });

    // Add cities from postals data
    postals.forEach((postal) => {
      if (postal.twp) citySet.add(postal.twp);
    });

    // Add cities from locations data
    locations.forEach((location) => {
      if (location.twp) citySet.add(location.twp);
    });

    return Array.from(citySet).sort();
  }, []);

  const MUNICIPALITIES = useMemo(() => {
    const municpSet = new Set<string>();

    // Add municipalities from streets data
    streets.forEach((street) => {
      street.crossingStreets.forEach((crossing) => {
        if (crossing.municp) municpSet.add(crossing.municp);
      });
    });

    // Add municipalities from postals data
    postals.forEach((postal) => {
      if (postal.municp) municpSet.add(postal.municp);
    });

    // Add municipalities from locations data
    locations.forEach((location) => {
      if (location.municp) municpSet.add(location.municp);
    });

    return Array.from(municpSet).sort();
  }, []);

  const processedLocationOptions = useMemo(() => {
    const postalOptions: ILocationOption[] = [];
    const streetOptions: ILocationOption[] = [];
    const locationOptions: ILocationOption[] = [];

    // Process postals data first
    postals.forEach((postal) => {
      if (postal.streets.availableStreets) {
        Object.entries(postal.streets.availableStreets).forEach(
          ([streetName, streetInfo]) => {
            const display = `${postal.postal} ${streetName}`;
            const searchTerms = [
              postal.postal.toLowerCase(),
              streetName.toLowerCase(),
            ];

            postalOptions.push({
              display,
              searchTerms,
              type: "postal",
              postalData: {
                ...postal,
                selectedStreet: streetName,
                crossStreet1: streetInfo.crossStreet1,
                crossStreet2: streetInfo.crossStreet2,
              },
            });
          }
        );
      } else if (postal.streets.mainStreet) {
        const display = `${postal.postal} ${postal.streets.mainStreet}`;
        const searchTerms = [
          postal.postal.toLowerCase(),
          postal.streets.mainStreet.toLowerCase(),
        ];

        postalOptions.push({
          display,
          searchTerms,
          type: "postal",
          postalData: {
            ...postal,
            selectedStreet: postal.streets.mainStreet,
            crossStreet1: postal.streets.crossStreet1 || "Not Found",
            crossStreet2: postal.streets.crossStreet2 || "Not Found",
          },
        });
      }
    });

    // Process streets data with proper sorting
    // First, sort streets alphabetically by name
    const sortedStreets = [...streets].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    sortedStreets.forEach((street) => {
      // Sort crossing streets by their postal values numerically
      const sortedCrossingStreets = [...street.crossingStreets].sort((a, b) => {
        // Get the first postal from each crossing street for comparison
        const aFirstPostal = a.postal[0];
        const bFirstPostal = b.postal[0];

        // Convert to integers for proper numerical sorting
        const aPostalNum = Number.parseInt(aFirstPostal, 10);
        const bPostalNum = Number.parseInt(bFirstPostal, 10);

        return aPostalNum - bPostalNum;
      });

      sortedCrossingStreets.forEach((crossingStreet) => {
        // Sort postals within each crossing street numerically
        const sortedPostals = [...crossingStreet.postal].sort((a, b) => {
          const aNum = Number.parseInt(a, 10);
          const bNum = Number.parseInt(b, 10);
          return aNum - bNum;
        });

        sortedPostals.forEach((postal) => {
          const display = `${street.name} @ ${crossingStreet.street} (${postal})`;
          const searchTerms = [
            street.name.toLowerCase(),
            crossingStreet.street.toLowerCase(),
            postal.toLowerCase(),
          ];

          streetOptions.push({
            display,
            searchTerms,
            type: "street",
            streetData: { ...crossingStreet, mainStreet: street.name },
          });
        });
      });
    });

    // Process locations data last
    locations.forEach((location) => {
      const display = `${location.name} - ${location.postal} ${location.mainStreet}`;
      const searchTerms = [
        location.name.toLowerCase(),
        location.postal.toLowerCase(),
        location.mainStreet.toLowerCase(),
      ];

      locationOptions.push({
        display,
        searchTerms,
        type: "location",
        locationData: location,
      });
    });

    // Return in order: postals, streets, locations
    return [...postalOptions, ...streetOptions, ...locationOptions];
  }, []);

  const handleLocationChange = (value: string) => {
    setCallData((prev) => ({ ...prev, location: value }));
    setSelectedSuggestionIndex(-1); // Reset selection when typing
    suggestionRefs.current = []; // Reset refs when suggestions change
    if (showLocationSuggestions) {
      if (value.length > 0) {
        // Split the search term into words and filter out empty strings and special characters
        const searchWords = value
          .toLowerCase()
          .split(/\s+/)
          .filter((word) => word.length > 0 && word !== "@");

        const filtered = processedLocationOptions.filter((option) => {
          // Check if all search words are found in the search terms or display text
          return searchWords.every((word) => {
            return (
              option.searchTerms.some((term) => term.includes(word)) ||
              option.display.toLowerCase().includes(word)
            );
          });
        });

        setFilteredSuggestions(filtered.map((option) => option.display));
      } else {
        // Show all options when input is empty but focused
        setFilteredSuggestions(
          processedLocationOptions.map((option) => option.display)
        );
      }
    }
  };

  const selectLocationSuggestion = (suggestion: string) => {
    setCallData((prev) => ({ ...prev, location: suggestion }));
    setShowLocationSuggestions(false);

    // Find the selected option to get data
    const selectedOption = processedLocationOptions.find(
      (option) => option.display === suggestion
    );

    if (selectedOption) {
      if (selectedOption.type === "street" && selectedOption.streetData) {
        const { streetData } = selectedOption;

        // Auto-populate form fields from street data
        setCallData((prev) => ({
          ...prev,
          city: streetData.twp || "",
          municp: streetData.municp || "",
          cross_streets: "/",
          notes: `Box ${streetData.fireBox} - Patrol Area ${streetData.patrolArea} - Post ${streetData.post}`,
        }));
      } else if (
        selectedOption.type === "postal" &&
        selectedOption.postalData
      ) {
        const { postalData } = selectedOption;
        // Set cross streets from postal data
        const crossStreetsList = [
          postalData.crossStreet1,
          postalData.crossStreet2,
        ]
          .filter((street) => street && street !== "Not Found")
          .join(" / ");

        setCallData((prev) => ({
          ...prev,
          city: postalData.twp || "",
          municp: postalData.municp || "",
          cross_streets: crossStreetsList || "Not Found",
          notes: `Box ${postalData.fireBox} - Patrol Area ${postalData.patrolArea} - Post ${postalData.post}`,
        }));
      } else if (
        selectedOption.type === "location" &&
        selectedOption.locationData
      ) {
        const { locationData } = selectedOption;
        // Set cross streets from location data
        const crossStreetsList = [
          locationData.crossStreet1,
          locationData.crossStreet2,
        ]
          .filter((street) => street && street !== "Not Found")
          .join(" / ");

        setCallData((prev) => ({
          ...prev,
          location: `${locationData.postal} ${locationData.mainStreet}`,
          city: locationData.twp || "",
          municp: locationData.municp || "",
          loc_name: locationData.name,
          cross_streets: crossStreetsList || "Not Found",
          notes: `Box ${locationData.fireBox} - Patrol Area ${locationData.patrolArea} - Post ${locationData.post}`,
        }));
      }
    }

    setTimeout(() => {
      callerNumberRef.current?.focus();
    }, 50);
  };

  const handleLocationKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showLocationSuggestions || filteredSuggestions.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedSuggestionIndex((prev) =>
          prev < filteredSuggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedSuggestionIndex((prev) =>
          prev > 0 ? prev - 1 : filteredSuggestions.length - 1
        );
        break;
      case "Enter":
      case "ArrowRight":
        e.preventDefault();
        if (
          selectedSuggestionIndex >= 0 &&
          selectedSuggestionIndex < filteredSuggestions.length
        ) {
          selectLocationSuggestion(
            filteredSuggestions[selectedSuggestionIndex]
          );
        }
        break;
      case "Escape":
        e.preventDefault();
        setShowLocationSuggestions(false);
        setSelectedSuggestionIndex(-1);
        break;
    }
  };

  const createCall = async (): Promise<void> => {
    if (!callData.location || !callData.service) return;
    const existingCall = localStorage.getItem("NEW_CALL");
    if (existingCall) {
      const parsedCall = JSON.parse(existingCall);
      if (parsedCall.run_number) {
        toast.error(
          "You already have a call in progress. Please complete or cancel it before creating a new one."
        );
        return;
      }
    }

    const currentTime = new Date();

    const case_entry: INewCall = {
      location: callData.location,
      apt_unit: callData.apt_unit || "",
      city: callData.city || "",
      municp: callData.municp || "",
      loc_name: callData.loc_name || "",
      notes: callData.notes || "",
      cross_streets: callData.cross_streets || "/",
      caller_number: callData.caller_number || "",
      caller_name: callData.caller_name || "",
      isLocalCaller: callData.isLocalCaller || false,
      isTransfer: callData.isTransfer || false,
      isTestCase: callData.isTestCase || false,
      service: callData.service || "",
      page_opened_time: callData.page_opened_time || currentTime,
      first_keystroke_time: callData.first_keystroke_time || currentTime,
      call_created_time: currentTime,
    };

    const runNumber = await handleAPICallCreation(case_entry);
    const new_call = {
      run_number: runNumber,
      case_entry,
    };

    localStorage.setItem("NEW_CALL", JSON.stringify(new_call));

    if (callData.service === "pd") {
      router.push("/create-call/police");
    } else if (callData.service === "fire") {
      router.push("/create-call/fire");
    } else if (callData.service === "ems") {
      router.push("/create-call/ems");
    } else {
      toast.error("Please select a valid service.");
    }
  };

  const handleAPICallCreation = async (
    case_entry: INewCall
  ): Promise<void | string> => {
    try {
      const res = await fetch("/api/call/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          case_entry,
        }),
      });

      if (res.status === 201) {
        const data = await res.json();
        toast.success("Call created successfully!");
        return data.callNumber;
      } else {
        const errorText = await res.text();
        toast.error(`Failed to create call: ${errorText}`);
      }
    } catch (error) {
      console.error("Error creating call:", error);
      toast.error("An error occurred while creating the call.");
    }
  };

  useEffect(() => {
    if (callData.caller_number && callData.caller_number.length >= 14) {
      callerNameRef.current?.focus();
    }
  }, [callData.caller_number]);

  useEffect(() => {
    const recordFirstKeystroke = () => {
      if (!callData.first_keystroke_time) {
        setCallData((prev) => ({
          ...prev,
          first_keystroke_time: new Date(),
        }));
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.isContentEditable
      ) {
        recordFirstKeystroke();
        document.removeEventListener("keydown", handleKeyDown);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [callData.first_keystroke_time]);

  useEffect(() => {
    if (
      selectedSuggestionIndex >= 0 &&
      suggestionRefs.current[selectedSuggestionIndex]
    ) {
      suggestionRefs.current[selectedSuggestionIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [selectedSuggestionIndex]);

  useEffect(() => {
    if (callData.isTransfer) {
      setCallData((prev) => ({
        ...prev,
        caller_number: "(000) 000-0000",
        caller_name: "TXFR",
        isLocalCaller: false,
      }));
      setTimeout(() => {
        serviceRef.current?.click();
      }, 50);
    }
  }, [callData.isTransfer]);

  useEffect(() => {
    const hasSavedCall = localStorage.getItem("NEW_CALL");
    if (!hasSavedCall) return setIsLoading(false);

    const savedCall = JSON.parse(localStorage.getItem("NEW_CALL") || "{}");
    if (savedCall.case_entry) {
      setCallData((prev) => ({
        ...prev,
        location: savedCall.case_entry.location || "",
        apt_unit: savedCall.case_entry.aptUnit || "",
        city: savedCall.case_entry.city || "",
        municp: savedCall.case_entry.municp || "",
        loc_name: savedCall.case_entry.locName || "",
        notes: savedCall.case_entry.notes || "",
        cross_streets: savedCall.case_entry.crossStreets || "",
        caller_number: savedCall.case_entry.callerNumber || "",
        caller_name: savedCall.case_entry.callerName || "",
        isLocalCaller: savedCall.case_entry.isLocalCaller || false,
        isTransfer: savedCall.case_entry.isTransfer || false,
        isTestCase: savedCall.case_entry.isTestCase || false,
        service: savedCall.case_entry.service || "",
        page_opened_time: new Date(
          savedCall.case_entry.pageOpenedTime || new Date()
        ),
      }));

      if (savedCall.case_entry.firstKeystrokeTime) {
        setCallData((prev) => ({
          ...prev,
          first_keystroke_time: new Date(
            savedCall.case_entry.firstKeystrokeTime
          ),
        }));
      }

      if (savedCall.case_entry.callCreatedTime) {
        setCallData((prev) => ({
          ...prev,
          call_created_time: new Date(savedCall.case_entry.callCreatedTime),
        }));
      }
    }

    setIsLoading(false);
  }, []);

  const handleCreateKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    // If the key is right arrow, run createCall()
    if (e.key === "ArrowRight") {
      e.preventDefault();
      createCall();
    }
  };

  const handleServiceKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const evtInit: KeyboardEventInit = {
        key: "Enter",
        code: "Enter",
        keyCode: 13,
        which: 13,
        bubbles: true,
        cancelable: true,
      };
      const active = document.activeElement as HTMLElement | null;
      if (!active) return;
      return active.dispatchEvent(new KeyboardEvent("keydown", evtInit));
    }
  };

  const handleCallerNumberKeyDown = useCallback<
    React.KeyboardEventHandler<HTMLInputElement>
  >((e) => {
    if ((e.nativeEvent as any).isComposing) return;
    if (
      e.key !== "ArrowRight" ||
      e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey
    )
      return;

    const el = e.currentTarget;
    const { selectionStart, selectionEnd, value } = el;

    if (
      selectionStart !== null &&
      selectionEnd !== null &&
      selectionStart === selectionEnd &&
      selectionEnd === value.length
    ) {
      e.preventDefault();
      callerNameRef.current?.focus();
    }
  }, []);

  const handleCallerNameKeyDown = useCallback<
    React.KeyboardEventHandler<HTMLInputElement>
  >((e) => {
    if ((e.nativeEvent as any).isComposing) return;
    if (
      e.key !== "ArrowRight" ||
      e.altKey ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey
    )
      return;

    const el = e.currentTarget;
    const { selectionStart, selectionEnd, value } = el;

    if (
      selectionStart !== null &&
      selectionEnd !== null &&
      selectionStart === selectionEnd &&
      selectionEnd === value.length
    ) {
      e.preventDefault();
      serviceRef.current?.click();
    }
  }, []);

  return (
    <Card className="max-w-5xl mx-auto rounded-xs">
      {!isLoading ? (
        <>
          <CardHeader>
            <CardTitle className="text-xl">Create New Call</CardTitle>
            <CardDescription>
              Please enter the details for the new call.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Location with Search */}
            <div className="relative">
              <div className="flex items-center gap-4">
                <Label htmlFor="location" className="w-24 text-right">
                  Location
                </Label>
                <div className="flex-1 relative">
                  <Input
                    id="location"
                    autoComplete="off"
                    value={callData.location}
                    onChange={(e) => handleLocationChange(e.target.value)}
                    onKeyDown={handleLocationKeyDown}
                    autoFocus
                    onFocus={() => {
                      setShowLocationSuggestions(true);
                      setSelectedSuggestionIndex(-1); // Reset selection when focusing
                      // Show all options when focused
                      if (callData.location.length === 0) {
                        setFilteredSuggestions(
                          processedLocationOptions.map(
                            (option) => option.display
                          )
                        );
                      } else {
                        const searchWords = callData.location
                          .toLowerCase()
                          .split(/\s+/)
                          .filter((word) => word.length > 0 && word !== "@");

                        const filtered = processedLocationOptions.filter(
                          (option) => {
                            return searchWords.every((word) => {
                              return (
                                option.searchTerms.some((term) =>
                                  term.includes(word)
                                ) || option.display.toLowerCase().includes(word)
                              );
                            });
                          }
                        );

                        setFilteredSuggestions(
                          filtered.map((option) => option.display)
                        );
                      }
                    }}
                    onBlur={() => {
                      // Delay hiding to allow click on suggestions
                      setTimeout(() => {
                        setShowLocationSuggestions(false);
                        setSelectedSuggestionIndex(-1);
                      }, 150);
                    }}
                    placeholder="Start typing an address..."
                    className="rounded-xs"
                  />
                  {showLocationSuggestions &&
                    filteredSuggestions.length > 0 && (
                      <div
                        ref={suggestionsContainerRef}
                        className="absolute top-full left-0 right-0 z-10 bg-secondary border rounded-t-none shadow-lg max-h-48 overflow-y-auto"
                      >
                        {filteredSuggestions.map((suggestion, index) => (
                          <div
                            key={index}
                            ref={(el) => {
                              suggestionRefs.current[index] = el;
                            }}
                            className={`px-4 py-2 cursor-pointer ${
                              index === selectedSuggestionIndex
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-black/10"
                            }`}
                            onClick={() => selectLocationSuggestion(suggestion)}
                            onMouseEnter={() =>
                              setSelectedSuggestionIndex(index)
                            }
                          >
                            {suggestion}
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              </div>
            </div>

            {/* Apt/Unit and City - Side by Side */}
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <Label htmlFor="apt-unit" className="w-24 text-right">
                  Apt/Unit
                </Label>
                <Input
                  id="apt-unit"
                  value={callData.apt_unit}
                  onChange={(e) =>
                    setCallData((prev) => ({
                      ...prev,
                      apt_unit: e.target.value,
                    }))
                  }
                  placeholder="Enter apartment or unit number"
                  className="flex-1 rounded-xs"
                />
              </div>
              <div className="flex items-center gap-4">
                <Label htmlFor="city" className="w-16 text-right">
                  City
                </Label>
                <Select
                  value={callData.city}
                  onValueChange={(e) =>
                    setCallData((prev) => ({ ...prev, city: e }))
                  }
                >
                  <SelectTrigger className="flex-1 rounded-xs">
                    <SelectValue placeholder="Select a city" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xs">
                    {CITIES.map((cityOption) => (
                      <SelectItem
                        className="rounded-xs"
                        key={cityOption}
                        value={cityOption}
                      >
                        {cityOption}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Municp and Empty Space - Side by Side */}
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <Label htmlFor="municp" className="w-24 text-right">
                  Municp
                </Label>
                <Select
                  value={callData.municp}
                  onValueChange={(e) =>
                    setCallData((prev) => ({ ...prev, municp: e }))
                  }
                >
                  <SelectTrigger className="flex-1 rounded-xs">
                    <SelectValue placeholder="Select municipality" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xs">
                    {MUNICIPALITIES.map((munOption) => (
                      <SelectItem
                        className="rounded-xs"
                        key={munOption}
                        value={munOption}
                      >
                        {munOption}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div></div> {/* Empty space */}
            </div>

            {/* Loc Name with Status Select */}
            <div className="flex items-center gap-4">
              <Label htmlFor="loc-name" className="w-24 text-right">
                Loc Name
              </Label>
              <div className="flex gap-2 flex-1">
                <Input
                  id="loc-name"
                  value={callData.loc_name}
                  onChange={(e) =>
                    setCallData((prev) => ({
                      ...prev,
                      loc_name: e.target.value,
                    }))
                  }
                  placeholder="Enter location name"
                  autoComplete="off"
                  className="flex-1 rounded-xs"
                />
              </div>
            </div>

            {/* Notes */}
            <div className="flex items-start gap-4">
              <Label htmlFor="notes" className="w-24 text-right pt-2">
                Notes
              </Label>
              <Input
                id="notes"
                value={callData.notes}
                readOnly
                disabled
                className="flex-1 rounded-xs"
              />
            </div>

            {/* Cross Streets - Uneditable */}
            <div className="flex items-center gap-4">
              <Label htmlFor="cross-streets" className="w-24 text-right">
                Cross Streets
              </Label>
              <Input
                id="cross-streets"
                value={callData.cross_streets || "/"}
                readOnly
                disabled
                className="flex-1 rounded-xs"
              />
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4 flex-1">
                <Label htmlFor="caller-number" className="w-24 text-right">
                  Caller Number
                </Label>
                <Input
                  id="caller-number"
                  ref={callerNumberRef}
                  value={callData.caller_number}
                  onChange={(e) =>
                    setCallData((prev) => ({
                      ...prev,
                      caller_number: formatPhoneNumber(e.target.value),
                    }))
                  }
                  onKeyDown={handleCallerNumberKeyDown}
                  placeholder="(XXX) XXX-XXXX"
                  autoComplete="off"
                  className="flex-1 rounded-xs"
                />
              </div>
              <div className="flex items-center gap-4 flex-1">
                <Label htmlFor="caller-name" className="w-24 text-right">
                  Caller Name
                </Label>
                <Input
                  id="caller-name"
                  ref={callerNameRef}
                  value={callData.caller_name}
                  onChange={(e) =>
                    setCallData((prev) => ({
                      ...prev,
                      caller_name: e.target.value,
                    }))
                  }
                  placeholder="Enter caller's name"
                  autoComplete="off"
                  className="flex-1 rounded-xs"
                  onKeyDown={handleCallerNameKeyDown}
                />
              </div>
            </div>

            {(callData.caller_number || callData.caller_name) && (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <Label className="w-24 text-right">Local Caller?</Label>
                  <Switch
                    checked={callData.isLocalCaller}
                    onCheckedChange={(isLocal) =>
                      setCallData((prev) => ({
                        ...prev,
                        isLocalCaller: isLocal,
                      }))
                    }
                  />
                </div>
                <div className="flex items-center gap-4 flex-1">
                  <Label className="w-24 text-right">Transfer?</Label>
                  <Switch
                    checked={callData.isTransfer}
                    onCheckedChange={(isTransfer) =>
                      setCallData((prev) => ({ ...prev, isTransfer }))
                    }
                  />
                </div>
                {callData.caller_name.toLowerCase().includes("test") && (
                  <div className="flex items-center gap-4 flex-1">
                    <Label className="text-right">Is this a Test Case?</Label>
                    <Switch
                      checked={callData.isTestCase}
                      onCheckedChange={(isTest) =>
                        setCallData((prev) => ({ ...prev, isTestCase: isTest }))
                      }
                    />
                  </div>
                )}
              </div>
            )}

            <div className="flex items-center gap-4">
              <Label className="w-24 text-right">Service</Label>
              <Select
                value={callData.service}
                onValueChange={(value) => {
                  setCallData((prev) => ({ ...prev, service: value }));
                  setTimeout(() => {
                    createCallRef.current?.focus();
                  }, 50);
                }}
              >
                <SelectTrigger
                  ref={serviceRef}
                  className="flex-1 rounded-xs"
                  onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
                    if (e.key === "ArrowRight") {
                      e.preventDefault();
                      serviceRef.current?.click();
                    }
                  }}
                >
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent
                  onKeyDown={handleServiceKeyDown}
                  className="rounded-xs"
                >
                  <SelectItem className="rounded-xs" value="pd">
                    Police Department
                  </SelectItem>
                  <SelectItem className="rounded-xs" value="fire">
                    Fire Department
                  </SelectItem>
                  <SelectItem className="rounded-xs" value="ems">
                    Emergency Medical Services
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full flex flex-row justify-between items-center mt-8">
              <div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        onClick={() => router.push("/dispatch")}
                        className="rounded-xs"
                      >
                        <CircleArrowLeft className="h-4 w-4 scale-125 text-destructive" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Back to Dispatch</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex flex-row-reverse items-center gap-2">
                {callData.service && (
                  <>
                    <Button
                      ref={createCallRef}
                      className="cursor-pointer focus:ring-2 focus:ring-destructive/50 rounded-xs"
                      variant="outline"
                      onClick={() => {
                        const existingCall = localStorage.getItem("NEW_CALL");
                        if (existingCall) {
                          const parsedCall = JSON.parse(existingCall);
                          router.push(
                            `/create-call/${parsedCall.case_entry.service}`
                          );
                        } else {
                          createCall();
                        }
                      }}
                      onKeyDown={handleCreateKeyDown}
                    >
                      {localStorage.getItem("NEW_CALL")
                        ? "Continue"
                        : "Create Call"}
                      <CircleArrowRight className="h-4 w-4 text-green-500" />
                    </Button>
                    <Button
                      type="reset"
                      variant="ghost"
                      onClick={() => setIsCancelModalOpen(true)}
                      className="rounded-xs"
                    >
                      Cancel
                    </Button>
                  </>
                )}
              </div>
            </div>
          </CardContent>
        </>
      ) : (
        <div className="w-full min-h-[60vh] flex items-center justify-center">
          <LoadingState />
        </div>
      )}
      {isCancelModalOpen && (
        <CallsignModal
          isOpen={isCancelModalOpen}
          onClose={() => setIsCancelModalOpen(false)}
        />
      )}
    </Card>
  );
}
