import { Button, HStack, Icon } from "@chakra-ui/react";
import React from "react";

import Filterbutton from "./Filterbutton";

const PopularOptions = [
  "General Practitioner",
  "Radiologist",
  "Podiatrist",
  "Psychologist",
  "Radiologist",
];

const PopularButtons = () => {
  return (
    <HStack>
      {PopularOptions.map((specialty, index) => (
        <Filterbutton key={index} text={specialty} />
      ))}
    </HStack>
  );
};

export default PopularButtons;
