"use client";

import React, { useState } from "react";
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

interface FormCardProps {
  title: string;
  description: string;
  inputs: { placeholder: string }[];
  dropdowns?: {
    placeholder: string;
    options: { value: string; label: string }[];
  }[];
  onDataChange: (data: any) => void;
}

const FormCard: React.FC<FormCardProps> = ({
  title,
  description,
  inputs,
  dropdowns,
  onDataChange,
}) => {
  const [formData, setFormData] = useState<any>({});
  const [selectedChains, setSelectedChains] = useState<string[]>([]);

  const sanitizeInputName = (placeholder: string): string => {
    return placeholder
      .toLowerCase()
      .replace(/[\s()-]+/g, "_") // Replace spaces, parentheses, and hyphens with underscore
      .replace(/_+/g, "_") // Replace multiple underscores with single underscore
      .replace(/^_|_$/g, ""); // Remove leading/trailing underscores
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newFormData);
    onDataChange(newFormData);
  };

  const handleChainSelect = (value: string) => {
    setSelectedChains((prevSelectedChains) =>
      prevSelectedChains.includes(value)
        ? prevSelectedChains.filter((chain) => chain !== value)
        : [...prevSelectedChains, value],
    );
  };

  const getSelectedChainNames = () => {
    const chainNames = dropdowns?.flatMap((dropdown) =>
      dropdown.options
        .filter((option) => selectedChains.includes(option.value))
        .map((option) => option.label),
    );
    return chainNames?.join(", ") || "";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {inputs.map((input, index) => (
          <Input
            key={index}
            name={sanitizeInputName(input.placeholder)}
            placeholder={input.placeholder}
            className="my-2"
            onChange={handleInputChange}
            value={formData[sanitizeInputName(input.placeholder)] || ""}
          />
        ))}
        {dropdowns &&
          dropdowns.map((dropdown, index) => (
            <>
              <div key={index} className="my-2">
                <Select onValueChange={handleChainSelect}>
                  <SelectTrigger>
                    <SelectValue placeholder={dropdown.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {dropdown.options.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="mt-4 text-sm">
                <strong>Selected Chains:</strong> {getSelectedChainNames()}
              </div>
            </>
          ))}
      </CardContent>
    </Card>
  );
};

export default FormCard;
