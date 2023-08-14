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
        <Filterbutton text={specialty} />
        // <Button
        //   key={index}
        //   textColor={"blue.600"}
        //   backgroundColor={"blue.50"}
        //   borderRadius="full"
        //   marginBottom={2}
        // >
        //   {specialty}
        // </Button>
      ))}
    </HStack>
  );
};

export default PopularButtons;
