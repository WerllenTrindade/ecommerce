import { StyleSheet } from 'react-native';

import theme from '~/theme';

export const s = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: theme.COLORS.SHAPE,
    paddingTop: 85,
    flex: 1,
    paddingHorizontal: 20,
  },
  body: {
    paddingBottom: '10%',
  },
  inputs: {
    gap: 20,
  },
  forgot: {
    justifyContent: 'center',
    paddingVertical: 25,
    alignItems: 'center',
  },
});
