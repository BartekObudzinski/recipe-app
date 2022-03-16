import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {RootStackParams} from '../../../App';

export const HomeScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View>
      <Pressable
        style={{backgroundColor: 'red'}}
        onPress={() => navigation.navigate('Start')}>
        <Text>Home Screen</Text>
      </Pressable>
    </View>
  );
};
