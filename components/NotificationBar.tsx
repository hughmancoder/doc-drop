"use client";

import React from "react";
import {
  Box,
  Text,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Switch,
  HStack,
} from "@chakra-ui/react";

import AlertMenu from "./AlertMenu";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  btnRef: any;
  handleNotificationChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  notification: boolean;
}
export default function NotificationBar({
  isOpen,
  onClose,
  btnRef,
  notification,
  handleNotificationChange,
}: Props) {
  const newDate = new Date();
  newDate.setMinutes(newDate.getMinutes() - 10);

  return (
    <Drawer
      size="md"
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader paddingY={2}>
          <HStack justifyContent="space-between">
            <Text>Message requests</Text>
            <Box display="flex" alignItems="center" paddingRight={6}>
              <Text ml={2} fontSize={"md"} color={"gray.600"} paddingRight={4}>
                Notifications
              </Text>
              <Switch
                isChecked={notification}
                onChange={handleNotificationChange}
                colorScheme="blue" // Set the desired color scheme
              />
            </Box>
            <DrawerCloseButton />
          </HStack>
        </DrawerHeader>
        <DrawerBody>
          <AlertMenu />
        </DrawerBody>
        <DrawerFooter>
          <HStack>
            <Text>Last updated</Text>
            <Text>
              {newDate.toLocaleDateString()} at {newDate.toLocaleTimeString()}
            </Text>
          </HStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
