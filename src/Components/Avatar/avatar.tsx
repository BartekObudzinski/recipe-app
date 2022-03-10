import React from 'react';
import {Image} from 'react-native';
import {AvatarStyles} from './avatar.styles';

const Avatar: React.FC = () => {
  const tmpPath = '../../Assets/Images/johncena.jpg';
  const {content} = AvatarStyles;
  return <Image style={content} source={require(tmpPath)} />;
};

export default Avatar;
