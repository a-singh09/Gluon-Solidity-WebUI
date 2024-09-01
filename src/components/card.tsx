import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface CardComponentProps {
    title: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    readOnly?: boolean;
    buttonText?: string;
    onButtonClick?: () => void;
    tokenName?: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ title, value, onChange, readOnly = false, buttonText, onButtonClick, tokenName }) => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                        <Input
                            id={title.toLowerCase()}
                            value={value}
                            onChange={onChange}
                            readOnly={readOnly}
                            className="border-none focus:ring-0 focus:ring-transparent focus:outline-none focus-visible:ring-0 focus-visible:outline-none bg-transparent shadow-none font-bold text-xl"
                            placeholder="0.00"
                        />
                        {tokenName && <span className="text-gray-500 font-bold text-xl">{tokenName}</span>}
                    </div>
                </div>
            </CardContent>
            {buttonText && onButtonClick && (
                <CardFooter>
                    <Button onClick={onButtonClick}>{buttonText}</Button>
                </CardFooter>
            )}
        </Card>
    );
};

export default CardComponent;