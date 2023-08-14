import React from "react";
import {
  Table,
  Tbody,
  Tr,
  Td,
  Input,
  Thead,
  Th,
  Button,
} from "@chakra-ui/react";
import { TableRow } from "../Types/InventoryOrder";

const TABLE_COLUMN_TITLES = [
  "Item Name",
  "Quantity",
  "Unit Cost",
  "Total Cost (AUD)",
  "Expiry Date",
  "Manufacturer",
];

interface Props {
  tableData: TableRow[];
  setData: (newData: TableRow[]) => void;
}
// TODO: state mangament
const EditableTable = ({ tableData, setData }: Props) => {
  const handleAddRow = () => {
    const newRow: TableRow = {
      itemName: "",
      quantity: 0,
      unitCost: 0,
      totalCost: 0,
      expiryDate: null,
      manufacturer: "",
    };

    const newData = [...tableData, newRow];
    setData(newData);
  };

  const handleChange = (
    index: number,
    field: keyof TableRow,
    value: string | number
  ) => {
    const newData: TableRow[] = tableData.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setData(newData); // Using the provided setData type
  };

  function extractDatePart(date: Date | null | string): string {
    if (typeof date === "string") return date;
    if (date === null) return "";
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const day = date.getUTCDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return (
    <>
      <Table variant="simple">
        <Thead>
          <Tr>
            {TABLE_COLUMN_TITLES.map((title) => (
              <Th key={title}>{title}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((row, index) => (
            <Tr key={index}>
              <Td>
                <Input
                  type="text"
                  value={row.itemName}
                  onChange={(e) =>
                    handleChange(index, "itemName", e.target.value)
                  }
                  maxWidth="25rem"
                  borderColor="transparent"
                />
              </Td>
              <Td>
                <Input
                  type="number"
                  value={row.quantity.toString()}
                  onChange={(e) =>
                    handleChange(index, "quantity", e.target.value)
                  }
                  maxWidth="10rem"
                  borderColor="transparent"
                />
              </Td>
              <Td>
                <Input
                  type="number"
                  value={row.unitCost}
                  onChange={(e) =>
                    handleChange(index, "unitCost", e.target.value)
                  }
                  maxWidth="5rem"
                  borderColor="transparent"
                />
              </Td>
              <Td>
                <Input
                  type="number"
                  value={row.totalCost}
                  onChange={(e) =>
                    handleChange(index, "totalCost", e.target.value)
                  }
                  maxWidth="5rem"
                  borderColor="transparent"
                />
              </Td>
              <Td>
                <Input
                  type="date"
                  value={extractDatePart(row.expiryDate)}
                  onChange={(e) =>
                    handleChange(index, "expiryDate", e.target.value)
                  }
                  maxWidth="10rem"
                  borderColor="transparent"
                />
              </Td>
              <Td>
                <Input
                  type="text"
                  value={row.manufacturer}
                  onChange={(e) =>
                    handleChange(index, "manufacturer", e.target.value)
                  }
                  maxWidth="10rem"
                  borderColor="transparent"
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Button onClick={handleAddRow} colorScheme="blue" mt={4}>
        + Add Row
      </Button>
    </>
  );
};

export default EditableTable;
