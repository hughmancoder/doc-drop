import React, { useState } from "react";
import {
  MenuButton,
  MenuList,
  MenuItem,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Input,
  VStack,
  Button,
} from "@chakra-ui/react";
import { FaPaperPlane, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";

interface AlertMenuItemProps {
  alert: any;
  onClick: () => void;
}

export const AlertMenuItem: React.FC<AlertMenuItemProps> = ({
  alert,
  onClick,
}) => {
  return (
    <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <MenuItem onClick={onClick}>{alert.type}</MenuItem>
    </motion.div>
  );
};
