import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import { TextInput, TextInputProps, View } from "react-native";

import theme from "~/theme";

interface SearchProps extends TextInputProps {}

export function Search({ ...rest }: SearchProps) {
  return (
    <View style={{ position: "relative" }}>
      <EvilIcons
        style={{ position: "absolute", top: 14, left: 10 }}
        name="search"
        size={27}
        color={theme.COLORS.CAPTION_400}
      />
      <TextInput
        {...rest}
        style={{
          paddingLeft: 45,
          borderColor: theme.COLORS.CAPTION_400,
          borderWidth: 0.4,
          borderRadius: 10,
          height: 50,
        }}
      />
    </View>
  );
}
