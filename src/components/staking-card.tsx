import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface StakingCardProps {
  heading: string;
  subheading: string;
  placeholder: string;
}

export function StakingCardComponent({ heading, subheading, placeholder }: StakingCardProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{heading}</CardTitle>
        <CardDescription>{subheading}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Amount</Label>
              <Input id="name" placeholder={placeholder} />
            </div>
            <div className="flex flex-col space-y-1.5 text-sm">
              Balance: 
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Withdraw</Button>
        <Button>Stake</Button>
      </CardFooter>
    </Card>
  )
}