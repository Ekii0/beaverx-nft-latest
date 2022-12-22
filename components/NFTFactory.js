import { Button, CryptoLogos, useNotification } from "@web3uikit/core";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { abi, contractAddress } from "../constants";
import NftCounter from "../components/NftCounter";
import { useEffect, useState } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

export default function NFTFactory() {
  const { isWeb3Enabled, chainId: chainIdHex, account } = useMoralis();
  const chainId = parseInt(chainIdHex);

  const [numNFTs, setNumNFTs] = useState(0);
  const [winner, setWinner] = useState(null);
  const [hasMinted, setHasMinted] = useState(false);

  const {
    data,
    error,
    runContractFunction: mintNft,
    isFetching,
    isLoading,
  } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "mintNft",
    params: {},
  });

  const { runContractFunction: getTokenId } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "getTokenId",
    params: {},
  });

  const { runContractFunction: getWinner } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "s_winner",
    params: {},
  });

  const { runContractFunction: mintedStatus } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "getMintedStatus",
    params: { owner: account },
  });

  const dispatch = useNotification();

  const handleSuccess = async (tx) => {
    try {
      await tx.wait();
      updateUIValues();
      handleNewNotification(tx);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewNotification = () => {
    dispatch({
      type: "success",
      message: "Transaction Complete!",
      title: "Successfully minted your BeaverX NFT!",
      position: "topR",
      icon: undefined,
    });
  };

  async function updateUIValues() {
    const numNftsFromCall = (await getTokenId()).toNumber();
    const checkForWinner = (await getWinner()).toString();
    const mintedStatusFromCall = await mintedStatus();
    if (checkForWinner != "0x0000000000000000000000000000000000000000") {
      setWinner(checkForWinner);
    }
    setNumNFTs(numNftsFromCall);
    setHasMinted(mintedStatusFromCall);
  }

  async function switchToBsc() {
    try {
      await web3.currentProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x" + (56).toString(16) }],
      });
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    if (isWeb3Enabled) {
      updateUIValues();
    }
  }, [isWeb3Enabled]);

  return (
    <>
      {chainId == 56 ? (
        <>
          {winner ? (
            <>
              <Heading as="h3" size="lg">
                Congratulations to {winner} on winning 2000 $STRX!
              </Heading>
              <Text>
                Thanks everyone for participating! See you soon for another
                giveaway!
              </Text>
            </>
          ) : (
            <>
              <Flex flexBasis="34%" alignItems="center">
                <Heading as="h3" size="lg">
                  Mint your own limited BeaverX NFT and have a chance to win
                  2000 $STRX!
                </Heading>
              </Flex>
              <Flex m="8">
                <Button
                  text="Mint your NFT"
                  theme="primary"
                  size="large"
                  onClick={async () => {
                    await mintNft({
                      onSuccess: (data) => handleSuccess(data),
                      onError: (error) => console.log(error),
                    });
                  }}
                  disabled={isFetching || isLoading || hasMinted}
                  /* style={{ display: "flex" }} */
                />
              </Flex>
              {hasMinted && (
                <Text color="red.200">Already minted your NFT!</Text>
              )}
              <Flex flexBasis="33%" alignItems="center">
                <NftCounter counter={numNFTs} />
              </Flex>
            </>
          )}
        </>
      ) : (
        <>
          <Text as="h1">
            Please make sure you are connected to the BSC network!
          </Text>
          <CryptoLogos
            chain="binance"
            onClick={async () => {
              await switchToBsc();
            }}
            size="60px"
            style={{
              cursor: "pointer",
              alignSelf: "center",
              display: "flex",
            }}
          />
        </>
      )}
    </>
  );
}
