import React, { useRef, useState } from "react";
import { Menu, Stack } from "@chakra-ui/react";

import { CustomAlert } from "./CustomAlert";

const sampleAlerts: AlertData[] = [
  {
    message:
      "Document request from Dr Sarah Johnson for patient Martin Greenfield of id 123456",
    color: "gray",
  },
  {
    message:
      "Document request from Dr James Smith for patient Sara Hopkins of id 123457",
    color: "gray",
  },
  {
    message:
      "Document request from Dr Henry Wilson for patient id Brian Wilson of 134399",
    color: "gray",
  },
];

export type AlertData = {
  message: string;
  color: string;
};

const AlertMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [note, setNote] = useState("");
  const cancelRef = useRef<HTMLButtonElement>(null);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const onClose = () => {
    setIsOpen(false);
    setNote("");
  };

  const handleMenuButtonClick = (index: number) => {
    if (openMenuIndex === index) {
      setOpenMenuIndex(null);
    } else {
      setOpenMenuIndex(index);
    }
  };

  return (
    <Menu>
      <Stack spacing={3}>
        {sampleAlerts.map((alert, index) => (
          <CustomAlert key={index} alert={alert} />
        ))}
      </Stack>
    </Menu>
  );
};

export default AlertMenu;
