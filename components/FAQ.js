import { Flex, Heading, Text } from "@chakra-ui/react";

export default function FAQ() {
  return (
    <>
      <Heading as="h4" size="md">
        How much does it cost to mint a BeaverX NFT?
      </Heading>
      <Text>
        There is no minting fee but you will have to pay the usual transaction
        fees on the BSC network.
      </Text>
      <Heading as="h4" size="md">
        How many NFTs can I mint?
      </Heading>
      <Text>
        There is a per wallet minting limit of one NFT, i.e. every wallet can
        only ever mint exactly one NFT. You can, however, transfer this NFT to
        whomever you want. Please note that the prize will be automatically
        transferred to the owner of the NFT at the time of the raffle. So please
        be aware of this fact when you want to transfer your NFT before the
        raffle is concluded. On the other hand, this could be a great
        opportunity to make someone a special gift.
      </Text>
      <Heading as="h4" size="md">
        Can I transfer my NFT?
      </Heading>
      <Text>
        Yes! You can transfer your NFT like any other token. But don't forget
        that the prize will be sent to the owner of the NFT when the rafle is
        drawn, not to the one who minted the NFT! So if you'd like to give
        someone the chance to win the prize, then go ahead and transfer your NFT
        any time. Otherwise, you should probably wait for the end of the raffle!
      </Text>
      <Heading as="h4" size="md">
        How is the raffle drawn?
      </Heading>
      <Text>
        Once all 500 NFTs have been minted, the smart contract automatically
        calls the Chainlink VRF oracle and requests a verifiably random number.
        Once the contract gets a random number, it looks up the current owner of
        the NFT and transfers the prize tokens to their wallet.
      </Text>
      <Heading as="h4" size="md">
        Can I see your contract?
      </Heading>
      <Text>
        Of course! Everything is public on the blockchain, so please check out
        the contract on{" "}
        <a
          href="https://bscscan.com/address/0x92a6Fd4d16c5A55C9f138DA1Db7A99254148c829#code"
          target="_blank"
        >
          bscscan
        </a>
        !
      </Text>
      <Heading as="h4" size="md">
        Who created this?
      </Heading>
      <Text pb="4">
        This is a little fullstack Web3 coding project by{" "}
        <a href="https://twitter.com/ekiio6" target="_blank">
          ekiio
        </a>
        . All code has been written by me. The BeaverX illustration was created
        using Stable Diffusion.
      </Text>
    </>
  );
}
