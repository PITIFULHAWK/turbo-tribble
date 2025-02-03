"use client";

import { useState } from "react";
import { Check, ChevronsUpDown, MapPin } from "lucide-react";
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Label } from "@/components/ui/label";

interface LocationInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const locations = [
  { value: "new-york", label: "New York" },
  { value: "london", label: "London" },
  { value: "tokyo", label: "Tokyo" },
  { value: "paris", label: "Paris" },
  { value: "berlin", label: "Berlin" },
];

export default function LocationInput({ label, value, onChange }: LocationInputProps) {
  const [open, setOpen] = useState(false);

  const getCurrentLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Location:", position.coords.latitude, position.coords.longitude);
          onChange("Current Location");
          setOpen(false); 
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="space-y-1">
      <Label>{label}</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between text-sm">
            {value
              ? locations.find((location) => location.value === value)?.label || value
              : `Select ${label.toLowerCase()} location...`}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[calc(100vw-2rem)] sm:w-[16rem] p-0">
            
          <Command>
            <CommandInput placeholder={`Search ${label.toLowerCase()} location...`} />
            <CommandList>
              <CommandEmpty>No location found.</CommandEmpty>
              <CommandGroup>
                <CommandItem
                  onSelect={() => {
                    getCurrentLocation();
                  }}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Use current location
                </CommandItem>
                {locations.map((location) => (
                  <CommandItem
                    key={location.value}
                    onSelect={() => {
                      onChange(location.value);
                      setOpen(false);
                    }}
                  >
                    <Check className={cn("mr-2 h-4 w-4", value === location.value ? "opacity-100" : "opacity-0")} />
                    {location.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
