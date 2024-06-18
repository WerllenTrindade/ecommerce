import { Text, View } from 'react-native';

import theme from '~/theme';

interface Props {
  text: string;
  link: string;
}

export function BodyInfo({ link, text }: Props) {
  return (
    <View style={{ justifyContent: 'center', paddingVertical: 25, alignItems: 'center' }}>
      <Text style={{ color: theme.COLORS.WHITE }}>
        {text}{' '}
        <Text
          onPress={() => {}}
          style={{
            color: theme.COLORS.PRIMARY,
            fontWeight: 'bold',
            textDecorationLine: 'underline',
          }}>
          {link}
        </Text>
      </Text>
    </View>
  );
}
