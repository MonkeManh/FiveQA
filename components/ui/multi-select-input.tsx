"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ChevronDown } from "lucide-react";

interface MultiSelectInputProps {
  options: { label: string; value: string }[];
  selected: string[];
  onSelectionChange: (selected: string[]) => void;
  placeholder?: string;
  label?: string;
}

export function MultiSelectInput({
  options,
  selected,
  onSelectionChange,
  placeholder = "Select items...",
  label,
}: MultiSelectInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const availableOptions = options.filter(
    (option) => !selected.includes(option.value)
  );

  const filteredOptions = availableOptions.filter((option) =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setInputValue("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectOption = (optionValue: string) => {
    onSelectionChange([...selected, optionValue]);
    setInputValue("");
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleRemoveSelected = (option: string) => {
    onSelectionChange(selected.filter((item) => item !== option));
  };

  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsOpen(true);
  };

  const moveItem = (fromIndex: number, toIndex: number) => {
    const newSelected = [...selected];
    const [movedItem] = newSelected.splice(fromIndex, 1);
    newSelected.splice(toIndex, 0, movedItem);
    onSelectionChange(newSelected);
  };

  const getOptionLabel = (value: string) => {
    const option = options.find((opt) => opt.value === value);
    return option ? option.label : value;
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="border border-input rounded-xs p-2 focus-within:ring-offset-2">
        <div className="flex flex-wrap gap-1 mb-2">
          {selected.map((item, index) => (
            <Badge
              key={item}
              variant="secondary"
              className="flex items-center gap-1"
            >
              <span className="text-xs text-muted-foreground">
                {index + 1}.
              </span>
              {getOptionLabel(item)}
              <div className="flex items-center gap-1 ml-1">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-4 w-4 p-0 hover:bg-destructive hover:text-destructive-foreground"
                  onClick={() => handleRemoveSelected(item)}
                >
                  <X className="h-3 w-3" />
                </Button>
                <div className="flex flex-col">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-3 w-3 p-0 text-xs"
                    onClick={() => moveItem(index, Math.max(0, index - 1))}
                    disabled={index === 0}
                  >
                    ↑
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-3 w-3 p-0 text-xs"
                    onClick={() =>
                      moveItem(index, Math.min(selected.length - 1, index + 1))
                    }
                    disabled={index === selected.length - 1}
                  >
                    ↓
                  </Button>
                </div>
              </div>
            </Badge>
          ))}
        </div>
        <div className="flex items-center">
          {selected.length !== options.length && (
            <>
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                placeholder={
                  selected.length === 0 ? placeholder : "Add more..."
                }
                className="border-none bg-transparent ring-transparent"
              />
              <ChevronDown className="h-4 w-4 text-muted-foreground ml-2" />
            </>
          )}
        </div>
      </div>

      {isOpen && filteredOptions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-popover border border-border rounded-md shadow-md max-h-60 overflow-auto">
          {filteredOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              className="w-full text-left px-3 py-2 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
              onClick={() => handleSelectOption(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
