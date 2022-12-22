import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "@web3uikit/core";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    styles: {
      global: {
        "html, body": {
          color: "gray.300",
          lineHeight: "tall",
          bgGradient: "radial(pink.900, purple.900, gray.900 80%)",
        },
        h1: {
          fontSize: "3xl",
          fontWeight: "bold",
        },
        h3: {
          fontSize: "xl",
          fontWeight: "bold",
        },
        h4: {
          fontSize: "lg",
          fontWeight: "bold",
          mb: "2",
          mt: "2",
        },
      },
    },
  });

  return (
    <MoralisProvider initializeOnMount={false}>
      <NotificationProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </NotificationProvider>
    </MoralisProvider>
  );
}

export default MyApp;
