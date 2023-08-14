"use client";
import React, { ReactNode } from "react";
import { Box, Flex, VStack } from "@chakra-ui/react";
import Providers from "./providers";
import SideNav from "../archive/SideNav";
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
        </VStack>
      </Flex>
    </Providers>
  );
};

export default Layout;