import { Text, View } from "react-native";

import theme from "~/theme";

interface arr {
  id: number;
  nome: string;
  primary: boolean;
}

interface Props {
  data: arr;
}

export function ListaGrupos({ data }: Props) {
  return (
    <View
      style={[
        data.primary && { backgroundColor: "#0ACF83" },
        { borderRadius: 25 },
      ]}
    >
      <Text
        style={[
          data.primary ? { color: theme.COLORS.WHITE } : { color: "#7F7F7F" },
          {
            paddingVertical: 5,
            paddingHorizontal: 10,
            fontSize: 16,
          },
        ]}
      >
        {data.nome}
      </Text>
    </View>
  );
}
