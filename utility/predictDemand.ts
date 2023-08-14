import { ItemPredictions, ItemRundown } from "../Types/dataMapping";

/* 
The parameter 'n' is optional and defaults to 3, but you can adjust it to consider a different number of previous months.
 Note that this is a relatively simple and naive approach and may not be suitable for all types of data. More advanced models like ARIMA or even deep learning models like LSTM might provide more accurate forecasts if you have a substantial amount of historical data and understand the underlying patterns in the demand 
*/

export function predictDemand(
  itemRundown: ItemRundown,
  n: number = 3
): ItemPredictions {
  const predictions: { [itemName: string]: number } = {};

  for (const itemName in itemRundown) {
    const quantities = itemRundown[itemName].quantities;
    // TODO: dates are optional and not needed for forcasting
    const dates = itemRundown[itemName].dates;

    if (quantities.length < n || dates.length < n) {
      console.warn(`Not enough data for item: ${itemName}`);
      continue;
    }

    let sum = 0;
    for (let i = quantities.length - n; i < quantities.length; i++) {
      sum += quantities[i];
    }

    // Calculate the average of the quantities for the past 'n' months.
    const prediction = sum / n;

    // Use this average as the forecast for the next month.
    predictions[itemName] = prediction;
  }

  return predictions;
}
