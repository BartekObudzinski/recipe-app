import React from 'react';
import {View} from 'react-native';
import HamburgerLine from '../HamburgerLine/hamburger-line';
import {HamburgerStyles} from './hamburger.styles';

const Hamburger: React.FC = () => {
  const {container} = HamburgerStyles;
  return (
    <View style={container}>
      <HamburgerLine />
      <HamburgerLine isShort={true} />
      <HamburgerLine />
    </View>
  );
};
export default Hamburger;
