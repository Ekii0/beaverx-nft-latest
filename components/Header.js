import { ConnectButton } from "@web3uikit/web3";
import { Box, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Box
        as="nav"
        minW="100vw"
        display="flex"
        flexDir="row"
        justifyContent="space-between"
        padding={5}
      >
        <Text fontSize="2xl" fontWeight="bold">
          BeaverX NFT
        </Text>
        <ConnectButton />
      </Box>
    </>
  );
}
