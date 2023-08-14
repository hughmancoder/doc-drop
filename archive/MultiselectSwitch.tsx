import { Radio, RadioGroup } from "@chakra-ui/react";
import { useState } from "react";

const positions = ["Private", "Public", "Custom Sharing"];

function MultiSelectSwitch() {
  const [selectedPosition, setSelectedPosition] = useState<string>(""); // Selected position

  const handlePositionChange = (position: string) => {
    setSelectedPosition(position);
  };

  return (
    <RadioGroup onChange={handlePositionChange} value={selectedPosition}>
      {positions.map((position) => (
        <Radio key={position} value={position} paddingY={4} paddingX={4}>
          {position}
        </Radio>
      ))}
    </RadioGroup>
  );
}

export default MultiSelectSwitch;
