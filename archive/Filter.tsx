import { Select, SelectProps } from "@chakra-ui/react";

interface FilterProps extends SelectProps {
  onFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function Filter({ onFilterChange }: FilterProps) {
  return (
    <Select placeholder="Filter" onChange={onFilterChange}>
      <option value="sell">Sell</option>
      <option value="donate">Donate</option>
      <option value="loan">Loan</option>
    </Select>
  );
}
