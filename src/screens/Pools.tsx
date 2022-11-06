import { VStack, Icon } from "native-base";
import { Octicons } from "@expo/vector-icons";

import { Button } from "../components/Button";
import { Header } from "../components/Header";

export function Pools() {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Meus bolões" />
      <VStack px={5}>
        <VStack
          mt={6}
          pb={4}
          mb={4}
          borderBottomWidth={1}
          borderBottomColor="gray.200"
        >
          <Button
            title="Buscar bolão por código"
            leftIcon={
              <Icon as={Octicons} name="search" color="black" size="md" />
            }
          />
        </VStack>
      </VStack>
    </VStack>
  );
}
