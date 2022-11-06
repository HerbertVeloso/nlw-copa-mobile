import { Button as ButtonPrimitive, Text, IButtonProps } from "native-base";

interface ButtonProps extends IButtonProps {
  title: string;
  type?: "PRIMARY" | "SECONDARY";
}

export function Button({ title, type, ...rest }: ButtonProps) {
  return (
    <ButtonPrimitive
      {...rest}
      w="full"
      h={14}
      rounded="sm"
      bg={type === "SECONDARY" ? "red.500" : "yellow.500"}
      _pressed={{
        bg: type === "SECONDARY" ? "red.400" : "yellow.600",
      }}
      _loading={{
        _spinner: { color: type === "SECONDARY" ? "white" : "black" },
      }}
    >
      <Text
        fontSize="md"
        fontFamily="heading"
        textTransform="uppercase"
        color={type === "SECONDARY" ? "white" : "black"}
      >
        {title}
      </Text>
    </ButtonPrimitive>
  );
}
