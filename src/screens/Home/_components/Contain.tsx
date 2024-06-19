import { Text, View, StyleSheet } from "react-native";

import theme from "~/theme";

export function SubTitle() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Featured Products</Text>
      <Text style={s.text}>See All</Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: { fontSize: 18 },
  text: { fontSize: 16, color: theme.COLORS.CAPTION_400 },
});
