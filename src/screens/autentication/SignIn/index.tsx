import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';

import { s } from './styles';
import { Background } from '../_components/Background';
import { BodyInfo } from '../_components/BodyInfo';
import { Register } from '../_components/Register';

import { Button } from '~/components/Button';
import { Input } from '~/components/Input';
import theme from '~/theme';

export function SignIn() {
  return (
    <Background>
      <View style={s.body}>
        <Register />

        <TouchableOpacity style={s.forgot}>
          <Text style={{ color: theme.COLORS.WHITE }}>Forgot Password</Text>
        </TouchableOpacity>

        <Button title="Sign In" />

        <BodyInfo link="Sign Up here" text={`Didn't have any account?`} />
      </View>
    </Background>
  );
}
