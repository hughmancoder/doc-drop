import React from "react";
import { ChakraProvider, ThemeConfig, extendTheme } from "@chakra-ui/react";

/* const config = {
  initialColorMode: "dark",
}; */

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
export const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
