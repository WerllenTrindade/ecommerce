import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';

import { Input } from '~/components/Input';
import theme from '~/theme';

export function Register() {
  return (
    <View style={{ gap: 20 }}>
      <Input
        placeholder="Email"
        icon={
          <MaterialCommunityIcons name="email-outline" size={24} color={theme.COLORS.CAPTION_400} />
        }
      />
      <Input
        placeholder="Password"
        icon={<Feather name="lock" size={24} color={theme.COLORS.CAPTION_400} />}
      />
    </View>
  );
}
