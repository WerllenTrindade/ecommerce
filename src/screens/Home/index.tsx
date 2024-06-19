import { Ionicons, Feather } from "@expo/vector-icons";
import { FlatList, Image, Text, View, Dimensions } from "react-native";

import { Body } from "./_components/Body";
import { CardProduto } from "./_components/CardProduto";
import { SubTitle } from "./_components/Contain";
import { Header } from "./_components/Header";
import { ListaGrupos } from "./_components/ListaGrupos";
import { Main } from "./_components/Main";
import { s } from "./styles";

import { Search } from "~/components/Search";
import theme from "~/theme";

export function Home() {
  const grupos = [
    { id: 1, nome: "Headphone", primary: true },
    { id: 2, nome: "Headband", primary: false },
    { id: 3, nome: "Earpads", primary: false },
    { id: 4, nome: "Carveland", primary: false },
  ];

  const produtos = [
    {
      id: 1,
      image: <Image source={require("../../../assets/image 5.1.png")} />,
      titulo: "TMA-2 HD Wireless",
      description: "USD 350",
    },
    {
      id: 2,
      image: <Image source={require("../../../assets/image 5.png")} />,
      titulo: "CO2 - Cable",
      description: "USD 25",
    },
  ];

  return (
    <View style={s.container}>
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <Main />

      {/* MAIN GRUPO */}
      <View style={{ paddingTop: 35 }}>
        <FlatList
          data={grupos}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 25,
            paddingRight: 10,
          }}
          renderItem={({ item }) => {
            return <ListaGrupos data={item} />;
          }}
        />
      </View>

      <Body />

      <SubTitle />

      <View style={{ flex: 1 }}>
        <FlatList
          data={produtos}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 45,
            paddingRight: 10,
          }}
          renderItem={({ item }) => {
            return <CardProduto data={item} />;
          }}
        />
      </View>
    </View>
  );
}
