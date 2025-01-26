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

interface FormCardProps {
  title: string;
  description: string;
  inputs: { placeholder: string; type?: string }[];
  onDataChange: (data: any) => void;
}

const FormCard: React.FC<FormCardProps> = ({
  title,
  description,
  inputs,
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
            type={input.type || "text"}
            className="my-2"
            onChange={handleInputChange}
            value={formData[sanitizeInputName(input.placeholder)] || ""}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default FormCard;
