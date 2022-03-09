import React from 'react';
import {Text, View} from 'react-native';
import HamburgerLine from '../HamburgerLine/hamburger-line';
import {style} from './hamburger.styles';

const Hamburger: React.FC = () => {
  const {container} = style;
  return (
    <View style={container}>
      <HamburgerLine />
      <HamburgerLine isShort={true} />
      <HamburgerLine />
    </View>
  );
};
export default Hamburger;
