/*  Quantities of items of items used and corresonding dates for a given item*/
export interface ItemRundown {
  [itemName: string]: {
    quantities: number[];
    dates: Date[];
  };
}

export interface DataOptions {
  [key: string]: InventoryOrder;
}

export interface ItemPredictions {
  [itemName: string]: number;
}
