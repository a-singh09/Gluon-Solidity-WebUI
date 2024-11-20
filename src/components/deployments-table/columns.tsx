"use client"

import Link from 'next/link';
import { ColumnDef } from "@tanstack/react-table"
import { CaretSortIcon } from "@radix-ui/react-icons"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  name: string
  base_token: string
  tvl: string
  critical_ratio: string
  target_ratio: string
}

import { MoveUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "base_token",
    header: "Base ERC-20 Token",
  },
  {
    accessorKey: "tvl",
    header: "TVL",
  },
  {
    accessorKey: "critical_ratio",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Critical Ratio
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "target_ratio",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Target Ratio
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const deployment = row.id

      return (
        <Link href={`/deployments/id#${deployment}`}>
          <Button variant="secondary">More<MoveUpRight /></Button>
        </Link>
      )
    },
  },
  // ...
]
