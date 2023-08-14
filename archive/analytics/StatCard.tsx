import {
  Stat,
  StatArrow,
  StatGroup,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import React from "react";
import { ItemPredictions, ItemRundown } from "../../Types/dataMapping";
interface Props {
  itemPrediction: ItemPredictions;
  itemsRundown: ItemRundown;
  itemName: string;
}

const MONTH_NAMES: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const StatCard = ({ itemPrediction, itemName, itemsRundown }: Props) => {
  const predictedSupply = itemPrediction[itemName];
  const quantities = itemsRundown[itemName].quantities;
  const lastMonthSupply = quantities[quantities.length - 1];
  const change = (predictedSupply - lastMonthSupply) / lastMonthSupply;
  const dates = itemsRundown[itemName].dates;
  const monthNumber = (dates[dates.length - 1].getMonth() + 1) % 12;
  const monthName = MONTH_NAMES[monthNumber - 1];

  return (
    <StatGroup>
      <Stat padding="2rem">
        <StatLabel>{monthName} Forecast</StatLabel>
        <StatNumber>{Math.round(predictedSupply)}</StatNumber>
      </Stat>
      <Stat padding="2rem">
        <StatLabel>Change</StatLabel>
        <StatNumber>
          {change > 0 ? (
            <StatArrow type="increase" />
          ) : (
            <StatArrow type="decrease" />
          )}
          {Math.round(change * 100)}%
        </StatNumber>
      </Stat>
    </StatGroup>
  );
};

export default StatCard;
