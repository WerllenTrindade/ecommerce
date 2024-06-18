import { ReactNode } from 'react';
import { View } from 'react-native';

import theme from '~/theme';

interface Props {
  icon: ReactNode;
}

export function CardNavigation({ icon }: Props) {
  return (
    <View
      style={{
        backgroundColor: theme.COLORS.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderRadius: 10,
      }}>
      <View style={{}}>{icon}</View>
    </View>
  );
}
