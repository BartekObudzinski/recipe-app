import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {RootStackParams} from '../../../App';
import {StartScreenStyles} from './start-screen.styles';

export const StartScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={StartScreenStyles.wrapper}>
      <View style={StartScreenStyles.logoContainerWrapper}>
        <Image
          source={require('../../Assets/images/flashcards-logo.png')}
          style={StartScreenStyles.image}
        />
        <Text style={StartScreenStyles.logoTitle}>Fiszkoteka</Text>
        <Text style={StartScreenStyles.logoDescription}>
          Ucz się języka poprzez fiszki!
        </Text>
      </View>

      <View style={StartScreenStyles.buttonContainerWrapper}>
        <Pressable
          onPress={() => navigation.navigate('Home')}
          style={StartScreenStyles.button}>
          <Text style={{color: 'white', fontSize: 24}}>ROZPOCZNIJ NAUKĘ</Text>
        </Pressable>

        <Text style={StartScreenStyles.footerText}>
          Pamiętaj trening czyni mistrza.
        </Text>
      </View>
    </View>
  );
};
