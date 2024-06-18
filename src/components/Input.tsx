import { ReactNode } from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';

import theme from '~/theme';

interface Props extends TextInputProps {
  icon?: ReactNode;
}

export function Input({ icon, ...rest }: Props) {
  return (
    <View style={s.container}>
      <View style={s.icon}>{icon}</View>
      <TextInput style={s.input} {...rest} />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: theme.COLORS.WHITE,
    borderRadius: 5,
  },
  icon: {
    position: 'absolute',
    top: 13,
    left: 10,
  },
  input: {
    paddingLeft: 45,
    width: '100%',
    height: 50,
  },
});
