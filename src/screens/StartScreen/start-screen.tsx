import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';

import {RootStackParams} from '../../../App';
import {colors} from '../../Utils/colors';
import {fontFamily} from '../../Utils/font-family';
import {fontSize} from '../../Utils/font-size';

export const StartScreen: React.FC = () => {
  // const navigation =
  //   useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={{flex: 1}}>
      <Image
        style={{
          flex: 0.6,
          width: '100%',
        }}
        source={require('../../Assets/images/Onboarding.png')}
      />
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: 0.4,
        }}>
        <View>
          <Text
            style={{
              fontSize: fontSize.H1,
              color: colors.MAIN_TEXT,
              fontFamily: fontFamily.INTER,
              fontWeight: 'bold',
              textAlign: 'center',
              paddingVertical: 20,
            }}>
            Start Cooking
          </Text>
          <Text
            style={{
              color: colors.SECONDARY_TEXT,
              fontSize: fontSize.H2,
              fontWeight: '400',
              fontFamily: fontFamily.INTER,
              textAlign: 'center',
            }}>{`Let's join our community\nto cook better food!`}</Text>
        </View>
        <Pressable
          style={{
            backgroundColor: colors.PRIMARY,
            width: '90%',
            marginBottom: 20,
            borderRadius: 35,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: fontSize.H2,
              color: colors.WHITE,
              fontFamily: fontFamily.INTER,
              fontWeight: 'bold',
              paddingVertical: 20,
            }}>
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
