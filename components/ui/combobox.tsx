"use client";

import * as React from "react";
import { useCallback, useMemo } from "react";
import { ChevronsUpDown } from "lucide-react";
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

export interface Option {
  value: string | number;
  label: string;
  add?: string;
  className?: string;
  searchableText?: string;
  subOptions?: Option[];
}

export type ComboboxSelection =
  | { main: string | number | null; sub: string | number | null }
  | string
  | number;

type TriggerButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "value" | "onChange"
>;

export interface ComboboxProps extends TriggerButtonProps {
  options: Option[];
  /** You can pass either a primitive (legacy) or an object { main, sub } */
  value: ComboboxSelection;
  /**
   * Always called with an object when the user selects:
   * - main option: { main: value, sub: null }
   * - sub option:  { main: parentValue, sub: value }
   *
   * (You may still pass a primitive in `value` for display/back-compat.)
   */
  onValueChange: (value: {
    main: string | number | null;
    sub: string | number | null;
  }) => void;
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
  /** Hide the input field inside the popover */
  noInput?: boolean;
  /** Hide chevron to better fit small-height triggers */
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

    // Normalize subOptions: ensure each sub has a defined value + searchableText
    const normalizedOptions = useMemo(() => {
      return options.map((opt) => {
        const subOptions = opt.subOptions?.map((sub, i) => ({
          ...sub,
          value: sub.value ?? `${opt.value}::${i}`,
          searchableText:
            sub.searchableText ?? `${sub.label} ${opt.label} ${opt.value}`,
        }));
        return { ...opt, subOptions };
      });
    }, [options]);

    // Helpers to read main/sub from incoming value (object or primitive)
    const getMainValue = (v: ComboboxSelection): string | number | null => {
      if (v && typeof v === "object" && "main" in v) {
        return (v as { main: string | number | null }).main ?? null;
      }
      return (v as string | number) ?? null;
    };
    const getSubValue = (v: ComboboxSelection): string | number | null => {
      if (v && typeof v === "object" && "sub" in v) {
        return (v as { sub: string | number | null }).sub ?? null;
      }
      return null;
    };

    React.useEffect(() => {
      if (autoFocus && !hasInitiallyMounted.current) {
        setOpen(true);
        setTimeout(() => {
          inputRef.current?.focus();
        }, 0);
        hasInitiallyMounted.current = true;
      }
    }, [autoFocus, setOpen]);

    // Selected main option (for display base)
    const selectedOption = useMemo(() => {
      const mainVal = getMainValue(value);
      if (mainVal == null) return undefined;

      const mainOption = normalizedOptions.find((opt) => opt.value === mainVal);
      if (mainOption) return mainOption;

      // If a primitive sub value was passed as the main (legacy), show its parent
      for (const option of normalizedOptions) {
        if (option.subOptions?.some((sub) => sub.value === mainVal)) {
          return option;
        }
      }
      return undefined;
    }, [normalizedOptions, value]);

    // Resolve sub label for display: supports sub as value OR already a label
    const selectedSubLabel = useMemo(() => {
      const mainVal = getMainValue(value);
      const subVal = getSubValue(value);

      if (mainVal == null || subVal == null) return "";

      const parent = normalizedOptions.find((o) => o.value === mainVal);
      if (!parent?.subOptions?.length) return "";

      // Match by value first
      const byValue = parent.subOptions.find((s) => s.value === subVal)?.label;
      if (byValue) return byValue;

      // If subVal is actually a label string we stored earlier, accept it
      if (typeof subVal === "string") {
        const byLabel = parent.subOptions.find(
          (s) => s.label === subVal
        )?.label;
        if (byLabel) return byLabel;
        // fallback to the provided string
        return subVal;
      }

      return "";
    }, [normalizedOptions, value]);

    // Filter function for Command
    const filterFn = useCallback(
      (val: string, search: string) => {
        if (strictSearch) {
          return val.includes(search) ? 1 : 0;
        }
        return val.toLowerCase().includes(search.toLowerCase()) ? 1 : 0;
      },
      [strictSearch]
    );

    // When a user selects anything, we ALWAYS emit an object { main, sub }
    const handleSelect = useCallback(
      (optionValue: string | number, parentValue?: string | number) => {
        if (typeof parentValue !== "undefined") {
          // sub-option selected
          onValueChange({ main: parentValue, sub: optionValue });
        } else {
          // main option selected
          onValueChange({ main: optionValue, sub: null });
        }
        setOpen(false);
      },
      [onValueChange, setOpen]
    );

    // ArrowRight should "confirm" like Enter inside the menu
    React.useEffect(() => {
      if (!open) return;
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          event.stopPropagation();
          const enterEvent = new KeyboardEvent("keydown", {
            key: "Enter",
            bubbles: true,
            cancelable: true,
          });
          inputRef.current?.dispatchEvent(enterEvent);
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open]);

    const triggerText = selectedOption
      ? `${selectedOption.label}${
          selectedSubLabel ? ` — ${selectedSubLabel}` : ""
        }`
      : placeholder;

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-full justify-between",
              smallRounded && "rounded-xs"
            )}
            disabled={disabled}
            {...props}
          >
            {triggerText}
            {!heightFit && (
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            )}
          </Button>
        </PopoverTrigger>

        <PopoverContent
          className={cn(
            "w-[var(--radix-popover-trigger-width)] p-0",
            smallRounded && "rounded-xs"
          )}
          align="start"
          style={{ maxHeight: "calc(var(--vh, 1vh) * 50)" }} // 50vh cap
        >
          <Command className={cn("w-full", className)} filter={filterFn}>
            {!noInput && (
              <CommandInput
                ref={inputRef}
                placeholder={searchPlaceholder}
                className={cn("w-full", smallRounded && "rounded-xs")}
                autoFocus
              />
            )}

            <CommandList className="w-full max-h-[300px] overflow-y-auto scroll-smooth">
              <CommandEmpty className="text-muted-foreground rounded-sm px-2 py-1.5">
                {emptyText}
              </CommandEmpty>

              <CommandGroup>
                {normalizedOptions.map((option) => (
                  <React.Fragment key={option.value}>
                    {/* Main option */}
                    <CommandItem
                      value={
                        option.searchableText ||
                        `${option.value} ${option.label}`
                      }
                      onSelect={() => handleSelect(option.value)}
                      className={cn(
                        smallRounded && "rounded-xs",
                        "cursor-pointer",
                        option.className
                      )}
                    >
                      {option.label}{" "}
                      <span className="text-muted-foreground text-xs">
                        {option.add ? `(${option.add})` : null}
                      </span>
                    </CommandItem>

                    {/* Sub-options */}
                    {option.subOptions?.map((sub, i) => (
                      <CommandItem
                        key={`${option.value}-${sub.value ?? `idx${i}`}`}
                        value={
                          sub.searchableText || `${sub.value} ${sub.label}`
                        }
                        // Instead of sending sub.value, send sub.label so your case stores the label
                        onSelect={() => handleSelect(sub.label, option.value)}
                        className={cn(
                          smallRounded && "rounded-xs",
                          "cursor-pointer pl-6 text-blue-500",
                          sub.className
                        )}
                      >
                        {sub.label}{" "}
                        <span className="text-muted-foreground text-xs">
                          {sub.add ? `(${sub.add})` : null}
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
