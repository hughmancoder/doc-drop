export interface TableRow {
  itemName: string;
  quantity: number;
  unitCost: number;
  totalCost: number;
  expiryDate: Date | null;
  manufacturer: string;
}

export interface InventoryOrder {
  receiptDate: Date;
  items: TableRow[];
  totalItems: number;
  totalQuantity: number;
  totalCost: number;
}
