import React from 'react';
import {View} from 'react-native';
import {HamburgerLineStyles} from './hamburger-line.styles';
import {HamburgerLineProps} from './hamburger-line.types';

const HamburgerLine: React.FC<HamburgerLineProps> = ({isShort}) => {
  const {content, contentShort} = HamburgerLineStyles;
  return <View style={[content, isShort && contentShort]} />;
};

export default HamburgerLine;
