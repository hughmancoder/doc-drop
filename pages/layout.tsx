"use client";
import React, { ReactNode } from "react";
import { Box, Flex, VStack } from "@chakra-ui/react";
import Providers from "./providers";
import Navbar from "../components/Navbar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Providers>
      <Flex>
        <VStack>
          <Navbar />

          {children}
          <Box as="footer" py={4} textAlign="center" opacity="0.3">
            <p>A project by Hugh Signoriello and Rozhin Teimournezhad</p>
            <p> &copy; 2023</p>
          </Box>
        </VStack>
      </Flex>
    </Providers>
  );
};

export default Layout;
