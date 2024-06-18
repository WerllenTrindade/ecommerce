import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import theme from '~/theme';

export function Background({ children }: { children: React.ReactNode }) {
  return (
    <ImageBackground
      source={require('../../../../assets/background-signIn.png')}
      resizeMode="cover"
      style={{
        backgroundColor: theme.COLORS.SHAPE,
        paddingTop: 85,
        flex: 1,
        paddingHorizontal: 20,
      }}>
      <View style={s.header}>
        <Text style={s.title}>Audio</Text>
        <Text style={s.text}>It's modular and designed to last</Text>
      </View>
      {children}
    </ImageBackground>
  );
}

const s = StyleSheet.create({
  header: {
    gap: 15,
    alignItems: 'center',
    flex: 1,
  },
  title: {
    color: theme.COLORS.WHITE,
    fontSize: 50,
  },
  text: {
    color: theme.COLORS.WHITE,
    fontSize: 18,
  },
});
