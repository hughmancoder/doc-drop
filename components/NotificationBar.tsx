"use client";

import React, { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Button,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";
import { IconType } from "react-icons";

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
  btnRef: any;
}
export default function SimpleSidebar({ isOpen, onClose, btnRef }: Props) {
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
        <DrawerCloseButton />
        <DrawerHeader>Pending requests</DrawerHeader>

        <DrawerBody>body</DrawerBody>

        <DrawerFooter>
          <Text>Last updated</Text>
          <Text>
            {newDate.toLocaleDateString()} at {newDate.toLocaleTimeString()}
          </Text>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
