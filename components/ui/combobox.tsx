"use client";

import * as React from "react";
import { useCallback, useMemo } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Option {
  value: string | number;
  label: string;
  add?: string;
  className?: string;
  searchableText?: string;
  subOptions?: Option[];
}

export interface ComboboxProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  options: Option[];
  value: string | number;
  onValueChange: (value: string | number) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  strictSearch?: boolean;
  autoFocus?: boolean;
  className?: string;
  open?: boolean;
  smallRounded?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  noInput?: boolean;
  heightFit?: boolean;
}

export const Combobox = React.forwardRef<HTMLButtonElement, ComboboxProps>(
  (
    {
      options,
      value,
      onValueChange,
      placeholder = "Select option",
      searchPlaceholder = "Search...",
      emptyText = "No results found.",
      strictSearch = false,
      autoFocus = false,
      className,
      open: controlledOpen,
      smallRounded = false,
      onOpenChange,
      disabled = false,
      noInput = false,
      heightFit = false,
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = React.useState(false);
    const open = controlledOpen ?? internalOpen;
    const setOpen = onOpenChange ?? setInternalOpen;
    const inputRef = React.useRef<HTMLInputElement>(null);
    const hasInitiallyMounted = React.useRef(false);

    React.useEffect(() => {
      if (autoFocus && !hasInitiallyMounted.current) {
        setOpen(true);
        setTimeout(() => {
          inputRef.current?.focus();
        }, 0);
        hasInitiallyMounted.current = true;
      }
    }, [autoFocus, setOpen]);

    // Memoize selected option lookup
    const selectedOption = useMemo(() => {
      // First check if it's a main option
      const mainOption = options.find((opt) => opt.value === value);
      if (mainOption) return mainOption;

      // If not found, check sub-options and return the parent option for display
      for (const option of options) {
        if (option.subOptions) {
          const subOption = option.subOptions.find(
            (sub) => sub.value === value
          );
          if (subOption) {
            // Return the main option for display purposes
            return option;
          }
        }
      }

      return undefined;
    }, [options, value]);

    // Memoize filter function
    const filterFn = useCallback(
      (value: string, search: string) => {
        if (strictSearch) {
          return value.includes(search) ? 1 : 0;
        }
        return value.toLowerCase().includes(search.toLowerCase()) ? 1 : 0;
      },
      [strictSearch]
    );

    // Memoize option selection handler
    const handleSelect = useCallback(
      (optionValue: string | number) => {
        onValueChange(optionValue);
        setOpen(false);
      },
      [onValueChange, setOpen]
    );

    React.useEffect(() => {
      if (!open) return;

      // If the user presses their right arrow key, simulate an enter button press
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          event.stopPropagation();
          // Simulate an enter key press
          const enterEvent = new KeyboardEvent("keydown", {
            key: "Enter",
            bubbles: true,
            cancelable: true,
          });
          inputRef.current?.dispatchEvent(enterEvent);
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [open]);

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={`w-full justify-between ${
              smallRounded ? "rounded-xs" : ""
            }`}
            disabled={disabled}
            {...props}
          >
            {selectedOption ? selectedOption.label : placeholder}
            {!heightFit && (
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className={`w-[var(--radix-popover-trigger-width)] p-0 ${
            smallRounded ? "rounded-xs" : ""
          }`}
          align="start"
          style={{ maxHeight: "calc(var(--vh, 1vh) * 50)" }} // Limit max height to 50vh
        >
          <Command className={cn(`w-full`, className)} filter={filterFn}>
            <CommandInput
              ref={inputRef}
              placeholder={searchPlaceholder}
              className={`w-full ${smallRounded ? "rounded-xs" : ""}`}
              autoFocus
            />
            <CommandList className="w-full max-h-[300px] overflow-y-auto scroll-smooth">
              <CommandEmpty className="text-muted-foreground rounded-sm px-2 py-1.5">
                {emptyText}
              </CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <React.Fragment key={option.value}>
                    <CommandItem
                      value={
                        option.searchableText ||
                        `${option.value} ${option.label}`
                      }
                      onSelect={() => handleSelect(option.value)}
                      className={`${smallRounded ? "rounded-xs" : ""} ${cn(
                        "cursor-pointer",
                        option.className
                      )}`}
                    >
                      {option.label}{" "}
                      <span className="text-muted-foreground text-xs">
                        {option.add ? `(${option.add})` : null}
                      </span>
                    </CommandItem>
                    {option.subOptions?.map((subOption) => (
                      <CommandItem
                        key={subOption.value}
                        value={
                          subOption.searchableText ||
                          `${subOption.value} ${subOption.label}`
                        }
                        onSelect={() => handleSelect(subOption.value)}
                        className={`${smallRounded ? "rounded-xs" : ""} ${cn(
                          "cursor-pointer pl-6 text-blue-500",
                          subOption.className
                        )}`}
                      >
                        {subOption.label}{" "}
                        <span className="text-muted-foreground text-xs">
                          {subOption.add ? `(${subOption.add})` : null}
                        </span>
                      </CommandItem>
                    ))}
                  </React.Fragment>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }
);

Combobox.displayName = "Combobox";
