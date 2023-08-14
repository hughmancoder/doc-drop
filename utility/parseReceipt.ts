import { TableRow } from "../Types/InventoryOrder";

/* Takes in unformatted receipt text and returns an array of TableData objects by formatting data */
export const parseReceipt = (receiptText: string): TableRow[] => {
  const lines = receiptText.split("\n");
  const items = [];

  for (let i = 5; i < lines.length - 4; i++) {
    // This regex pattern matches two or more consecutive whitespace characters.
    const [itemName, quantity, unitCost, totalCost, expiryDate, manufacturer] =
      lines[i].split(/\s{2,}/);

    if (
      itemName &&
      quantity &&
      unitCost &&
      totalCost &&
      expiryDate &&
      manufacturer
    ) {
      items.push({
        itemName,
        quantity: parseInt(quantity),
        unitCost: parseFloat(unitCost.replace("$", "")),
        totalCost: parseFloat(totalCost.replace("$", "")),
        // test valid date format

        expiryDate: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(expiryDate)
          ? new Date(expiryDate)
          : null,

        manufacturer,
      });
    }
  }

  return items;
};
