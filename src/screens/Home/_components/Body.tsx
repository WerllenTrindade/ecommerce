import { Feather } from "@expo/vector-icons";
import { Image, Text, View, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import theme from "~/theme";

export function Body() {
  return (
    <View style={s.container}>
      <View>
        <Text style={s.title}>
          TMA-2{"\n"}Modular{"\n"}Headphone
        </Text>
        <View style={s.text}>
          <Text style={s.link}>Shop now</Text>
          <Feather name="arrow-right" size={16} color="#0ACF83" />
        </View>
      </View>
      <Image
        resizeMethod="scale"
        resizeMode="contain"
        source={require("../../../assets/image 5.1.png")}
      />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: RFValue(25),
    justifyContent: "space-around",
  },
  title: {
    fontSize: RFValue(35),
    color: theme.COLORS.TEXT_DARK,
    fontWeight: "bold",
  },
  text: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: RFValue(20),
  },
  link: {
    color: "#0ACF83",
    paddingRight: RFValue(10),
    fontSize: RFValue(18),
    fontWeight: "bold",
  },
});
