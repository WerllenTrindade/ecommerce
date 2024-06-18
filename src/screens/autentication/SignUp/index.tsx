import { MaterialCommunityIcons, Feather, AntDesign, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';

import { s } from '../SignIn/styles';
import { Background } from '../_components/Background';
import { BodyInfo } from '../_components/BodyInfo';
import { CardNavigation } from '../_components/CardNavigation';
import { Register } from '../_components/Register';

import { Button } from '~/components/Button';

export function SignUp() {
  return (
    <Background>
      <View style={s.body}>
        <Register />
        <View style={{ paddingTop: 25 }}>
          <Button title="Sign In" />
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            gap: 20,
            paddingTop: 50,
          }}>
          <CardNavigation
            icon={<Image width={50} height={50} source={require('../../../../assets/apple.png')} />}
          />
          <CardNavigation icon={<Image source={require('../../../../assets/face.png')} />} />
          <CardNavigation icon={<Image source={require('../../../../assets/google.png')} />} />
        </View>

        <BodyInfo link="Sign In here" text="If you have an account?" />
      </View>
    </Background>
  );
}
