import { StyleSheet, View, Text } from "react-native";

import { Search } from "~/components/Search";

export function Main() {
  return (
    <>
      <View style={s.container}>
        <Text style={s.title}>Hi, Andrea</Text>
        <Text style={s.text}>What are you looking for{"\n"}today?</Text>
      </View>
      <View style={s.top}>
        <Search placeholder="Search headphone" />
      </View>
    </>
  );
}

const s = StyleSheet.create({
  container: { paddingTop: 35 },
  title: { fontSize: 20, fontWeight: "300" },
  text: { fontSize: 35, fontWeight: "bold" },
  top: { paddingVertical: 20 },
});
