import React from 'react';
import {View} from 'react-native';
import {styles} from './hamburger-line.styles';
import {HamburgerLineProps} from './hamburger-line.types';

const HamburgerLine: React.FC<HamburgerLineProps> = ({isShort}) => {
  return <View style={[styles.content, isShort && styles.contentShort]} />;
};

export default HamburgerLine;
