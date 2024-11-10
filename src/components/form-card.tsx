import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FormCardProps {
  title: string;
  description: string;
  inputs: { placeholder: string }[];
  footerButtonText?: string;
}

const FormCard: React.FC<FormCardProps> = ({ title, description, inputs, footerButtonText }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {inputs.map((input, index) => (
          <Input key={index} placeholder={input.placeholder} className="my-2" />
        ))}
      </CardContent>
      {footerButtonText && (
        <CardFooter className="border-t px-6 py-4">
          <Button>{footerButtonText}</Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default FormCard;