import React, { useState } from "react";
import { MenuItem } from "@chakra-ui/react";
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
