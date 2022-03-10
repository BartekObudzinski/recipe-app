import React from 'react';
import {Text} from 'react-native';
import {FONT_SIZE} from '../../Utils/styles/font_size.styles';
import {HeaderLevels} from '../../Utils/types/global.types';
import {HeaderTextProps} from './header_text.types';

const HeaderText: React.FC<HeaderTextProps> = ({children, level, style}) => {
  const HeaderFontSize = (level: number): number => {
    switch (level) {
      case HeaderLevels.FIRST:
        return FONT_SIZE.HEADER.FIRST;
      case HeaderLevels.SECOND:
        return FONT_SIZE.HEADER.SECOND;
      case HeaderLevels.THIRD:
        return FONT_SIZE.HEADER.THIRD;
      case HeaderLevels.FOURTH:
        return FONT_SIZE.HEADER.FOURTH;
      case HeaderLevels.FIFTH:
        return FONT_SIZE.HEADER.FIFTH;
      case HeaderLevels.SIXTH:
        return FONT_SIZE.HEADER.SIXTH;
      default:
        return FONT_SIZE.HEADER.THIRD;
    }
  };

  return (
    <Text style={[{...style, fontSize: HeaderFontSize(level)}]}>
      {children}
    </Text>
  );
};

export default HeaderText;
