import { Heading, VStack } from "native-base";
import { Header } from "../components/Header";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function FindPool() {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Buscar por código" showBackButton />
      <VStack mt={8} px={5} alignItems="center">
        <Heading
          fontFamily="heading"
          color="white"
          fontSize="xl"
          mb={8}
          textAlign="center"
        >
          Encontre um bolão através de{"\n"}
          seu código único
        </Heading>

        <Input placeholder="Qual o código do bolão?" mb={2} />

        <Button title="Buscar bolão" />
      </VStack>
    </VStack>
  );
}
