import Head from "next/head";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import { Flex, RangeSliderFilledTrack, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import NFTFactory from "../components/NFTFactory";
import StrxBeaver from "./images/STRXBeaver.png";
import FAQ from "../components/FAQ";

export default function Home() {
  const { isWeb3Enabled } = useMoralis();
  return (
    <>
      <Head>
        <title>BeaverX NFT</title>
        <meta
          name="description"
          content="A beaver-themed NFT created by ekiio as tribute to the StrikeX community"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        minH="100vh"
        flexDir="column"
        alignItems="center"
        //bgGradient="radial(pink.900, purple.900, gray.900 80%)" //linear(90deg, rgba(2,0,36,1) 0%, rgba(15,5,64,1) 20%, rgba(47,3,103,1) 100%)"
      >
        <Header />
        {isWeb3Enabled ? (
          <>
            <Flex
              w={{ base: "100%", lg: "960px" }}
              p={{ base: "1em", lg: "0" }}
              flexDir={{ base: "column", lg: "row" }}
              justifyContent="center"
              alignItems="center"
            >
              <Flex flex="1" p="2em">
                <Image
                  src={StrxBeaver}
                  width="100%"
                  style={{
                    borderRadius: "1em",
                  }}
                />
              </Flex>
              <Flex
                flex="1"
                flexDir="column"
                justifyContent="center"
                alignItems="center"
              >
                <NFTFactory />
              </Flex>
            </Flex>
            <Flex
              flexDir="column"
              p={{ base: "1em", lg: "0" }}
              w={{ base: "100%", lg: "960px" }}
            >
              <FAQ />
            </Flex>
          </>
        ) : (
          <Flex flex="1" flexDir="column" justifyContent="center">
            <Text as="h1">
              Please connect your wallet to enter the NFT Factory!
            </Text>
          </Flex>
        )}
      </Flex>
    </>
  );
}
