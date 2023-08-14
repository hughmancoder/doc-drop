import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import MotionWrapper from "../MotionWrapper";
import LinePlot from "./LinePlot";
import { DATA_OPTIONS } from "../../pages/analytics";
import { DataOptions, ItemRundown } from "../../Types/dataMapping";
import { TableRow } from "../../Types/InventoryOrder";
import StatCard from "./StatCard";
import { predictDemand } from "../../utility/predictDemand";

export const getItemsRundown = (dataOptions: DataOptions): ItemRundown => {
  const itemsRundown: ItemRundown = {};

  for (const [key, orderValue] of Object.entries(dataOptions)) {
    const receiptDate = orderValue.receiptDate;

    for (const [, value] of Object.entries(orderValue.items)) {
      const typedValue = value as TableRow;
      const itemName = typedValue.itemName;
      const quantity = typedValue.quantity;

      if (!itemsRundown[itemName]) {
        itemsRundown[itemName] = { quantities: [], dates: [] };
      }

      itemsRundown[itemName].quantities.push(quantity);
      itemsRundown[itemName].dates.push(receiptDate);
    }
  }

  return itemsRundown;
};

const ItemPlots = () => {
  const itemsRundown = getItemsRundown(DATA_OPTIONS);
  const itemsPredictions = predictDemand(itemsRundown);
  return (
    <Flex>
      <SimpleGrid columns={{ sm: 1, md: 1, lg: 2, xl: 3 }} spacing={4}>
        {Object.keys(itemsRundown).map((itemName, i) => {
          // TODO: fix
          const dates = itemsRundown[itemName].dates;

          const dateStrings = dates.map((date) =>
            date.toString().substring(0, 10)
          );

          return (
            <MotionWrapper key={itemName} index={i}>
              <Card minW="md">
                <CardHeader>
                  <Heading size="sm">{itemName}</Heading>
                </CardHeader>
                <CardBody>
                  <LinePlot
                    YaxisLabel={itemName}
                    labels={dateStrings}
                    data={itemsRundown[itemName].quantities}
                  />
                  <StatCard
                    itemName={itemName}
                    itemPrediction={itemsPredictions}
                    itemsRundown={itemsRundown}
                  />
                </CardBody>
              </Card>
            </MotionWrapper>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};

export default ItemPlots;
