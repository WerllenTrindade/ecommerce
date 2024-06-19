import { ReactNode } from "react";
import { Dimensions, ImageProps, Text, View } from "react-native";

import theme from "~/theme";
const { width } = Dimensions.get("window");
interface DataProps {
  id: number;
  image: ReactNode;
  titulo: string;
  description: string;
}

interface CardProps extends ImageProps {
  data: DataProps;
}

export function CardProduto({ data }: CardProps) {
  return (
    <View
      style={{
        backgroundColor: theme.COLORS.WHITE,
        width: (width + 35) / 3,
        padding: 15,
      }}
    >
      {data.image}
      <Text style={{ fontSize: 16 }}>{data.titulo}</Text>
      <Text style={{ fontWeight: "bold" }}>{data.description}</Text>
    </View>
  );
}
