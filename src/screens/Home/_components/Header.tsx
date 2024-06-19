import { Ionicons } from "@expo/vector-icons";
import { Image, View, StyleSheet } from "react-native";

export function Header() {
  return (
    <View style={s.container}>
      <Ionicons name="menu-outline" size={24} color="black" />
      <Image source={require("../../../assets/Logo.png")} />
      <Image source={require("../../../assets/Avatar.png")} />
    </View>
  );
}

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
