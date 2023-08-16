import React, { ChangeEvent, useRef, useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Text,
  VStack,
  Input,
  AlertIcon,
  Alert,
  Stack,
} from "@chakra-ui/react";
import { FaPaperPlane, FaTrash } from "react-icons/fa";
import { AlertMenuItem } from "./AlterMenuItem";

interface AlertData {
  type: string;
  text: string;
}

const alertData: AlertData[] = [
  { type: "Confirm request for record", text: "Confirm this action?" },
  { type: "Revoke request", text: "Confirm deny Request" },
];

const messages: string[] = [
  "Document request from Mr Matthew Berard",
  "Document request from Jr doctor Samiksha",
  "Document request from Mr John Smith",
  "Document request from Mr Wayne Kueh",
];

const AlertMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentAlert, setCurrentAlert] = useState<AlertData | null>(null);
  const [note, setNote] = useState("");
  const cancelRef = useRef<HTMLButtonElement>(null);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const onClose = () => {
    setIsOpen(false);
    setNote("");
  };

  const handleAddNote = () => {
    // Logic for adding a note
  };

  const handleNoteChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const handleMenuButtonClick = (index: number) => {
    if (openMenuIndex === index) {
      setOpenMenuIndex(null);
    } else {
      setOpenMenuIndex(index);
    }
  };

  const handleMenuItemClick = (alert: AlertData | null) => {
    setCurrentAlert(alert);
    setIsOpen(true);
  };

  return (
    <Menu>
      <Stack spacing={3}>
        {messages?.map((message, i) => (
          <Alert
            status="success"
            variant="subtle"
            key={i}
            position="relative"
            style={{ overflow: "visible" }}
            padding={2}
          >
            <AlertIcon />
            <MenuButton
              position="relative"
              zIndex="auto"
              onClick={() => handleMenuButtonClick(i)}
            >
              {message}
            </MenuButton>
            {openMenuIndex === i && (
              <MenuList
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  zIndex: 1000,
                }}
              >
                {alertData.map((alert, index) => (
                  <AlertMenuItem
                    key={index}
                    alert={alert}
                    onClick={() => handleMenuItemClick(alert)}
                  />
                ))}
              </MenuList>
            )}
          </Alert>
        ))}
      </Stack>

      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>
            {currentAlert?.type === "confirm"
              ? "Confirm Action"
              : "Remove Item"}
          </AlertDialogHeader>
          <AlertDialogBody>
            {currentAlert?.text}

            <VStack spacing={4}>
              <Input
                type="text"
                placeholder="Add a quick note"
                value={note}
                onChange={handleNoteChange}
                size="md"
                variant="filled"
              />
              <Button onClick={handleAddNote} colorScheme="blue">
                Add Note
              </Button>
            </VStack>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button
              colorScheme={currentAlert?.type === "confirm" ? "blue" : "red"}
              ml={3}
              onClick={onClose}
              leftIcon={
                currentAlert?.type === "confirm" ? (
                  <FaPaperPlane />
                ) : (
                  <FaTrash />
                )
              }
            >
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Menu>
  );
};

export default AlertMenu;
