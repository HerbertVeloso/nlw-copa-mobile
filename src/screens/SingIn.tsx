import { Center, Text, Icon } from "native-base";
import { Fontisto } from "@expo/vector-icons";

import Logo from "../assets/logo.svg";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";

export function SingIn() {
  const { user, signIn } = useAuth();
  console.log(user);

  return (
    <Center flex={1} bgColor="gray.900" paddingX={7}>
      <Logo />
      <Button
        title="Entrar com o Google"
        type="SECONDARY"
        leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
        marginTop={12}
        onPress={signIn}
      />
      <Text
        color="gray.200"
        fontSize="md"
        marginX={10}
        marginTop={4}
        textAlign="center"
      >
        Não utilizamos nenhuma informação além do seu e-mail para criação de sua
        conta.
      </Text>
    </Center>
  );
}
