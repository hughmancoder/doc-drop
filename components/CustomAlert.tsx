import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { AlertData } from "./AlertMenu";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

interface Props {
  alert: AlertData;
}

export const CustomAlert = ({ alert }: Props) => {
  const [currentAlert, setCurrentAlert] = useState<AlertData>(alert);

  const handleApprove = () => {
    const temp = {
      message: `${alert.message} approved`,
      color: "green",
    };
    setCurrentAlert(temp);
  };

  const handleDelete = () => {
    const temp = {
      message: `${alert.message} denied`,
      color: "red",
    };
    setCurrentAlert(temp);
  };

  return (
    <Alert status="error" colorScheme={currentAlert.color}>
      <AlertIcon />
      <Box>
        <AlertDescription>{currentAlert.message}</AlertDescription>
      </Box>
      <Button onClick={handleApprove} variant="subtle">
        <CheckIcon />
      </Button>
      <Button onClick={handleDelete} variant="subtle">
        <CloseIcon />
      </Button>
    </Alert>
  );
};
