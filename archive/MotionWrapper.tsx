import React, { ReactNode } from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface Props {
  index: number;
  children: ReactNode;
}

const MotionWrapper = ({ index, children }: Props) => {
  return (
    <MotionBox
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
    >
      {children}
    </MotionBox>
  );
};

export default MotionWrapper;
