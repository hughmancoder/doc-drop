import React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { TableRow } from "../Types/InventoryOrder";
import { DataTable } from "./DataTable";
interface Props {
  tableData: TableRow[];
}

const columnHelper = createColumnHelper<TableRow>();

const columns = [
  columnHelper.accessor("itemName", {
    cell: (info) => info.getValue(),
    header: "Item Name",
  }),
  columnHelper.accessor("quantity", {
    cell: (info) => info.getValue(),
    header: "Quantity",
    meta: {
      isNumeric: true,
    },
  }),
  columnHelper.accessor("unitCost", {
    cell: (info) => info.getValue(),
    header: "Unit Cost",
    meta: {
      isNumeric: true,
    },
  }),
  columnHelper.accessor("totalCost", {
    cell: (info) => info.getValue(),
    header: "Total Cost (AUD)",
    meta: {
      isNumeric: true,
    },
  }),
  columnHelper.accessor("expiryDate", {
    cell: (props) => {
      const date = props.getValue();
      if (!date) return "N/A";
      const formattedDate = date.toString();
      return formattedDate.substring(0, 15);
    },
    header: "Expiry Date",
    meta: {
      isDate: true,
    },
  }),
  columnHelper.accessor("manufacturer", {
    cell: (info) => info.getValue(),
    header: "Manufacturer",
  }),
];

export const ReadonlyTable = ({ tableData }: Props) => {
  return <DataTable columns={columns} data={tableData} />;
};
