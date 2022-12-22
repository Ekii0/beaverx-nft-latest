import { Text } from "@chakra-ui/react";

export default function NftCounter(props) {
  return (
    <Text>
      The community has already minted {props.counter} of 500 Beavers!
    </Text>
  );
}
