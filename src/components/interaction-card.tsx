import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface InteractionCardComponentProps {
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  balance?: string;
  tokenName?: string;
  isEditable?: boolean;
  isRelevant?: boolean;
  disabled?: boolean;
}

const InteractionCardComponent: React.FC<InteractionCardComponentProps> = ({
  title,
  value,
  onChange,
  tokenName,
  balance,
  isEditable = true,
  isRelevant = true,
  disabled = false
}) => {
  return (
    <Card
      className={`w-80 h-40 ${
        isRelevant ? "opacity-100" : "opacity-50"
      } transition-opacity`}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <Input
              id={title.toLowerCase()}
              value={isRelevant ? value : ""}
              onChange={onChange}
              type="number"
              step="1"
              readOnly={!isEditable}
              placeholder="0.00"
              disabled={disabled}
              onKeyPress={(e) => {
                // Allow only digits and control keys (backspace, delete, etc.)
                if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
                  e.preventDefault();
                }
              }}
              className={`${
                isEditable ? "font-bold" : "font-normal cursor-not-allowed"
              } text-3xl border-none bg-transparent shadow-none focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none`}
            />
            <span className="text-gray-500 font-bold text-xl">
              {tokenName}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="text-gray-400 text-sm">
        You have {balance} {tokenName} tokens
      </CardFooter>
    </Card>
  );
};

export default InteractionCardComponent;
