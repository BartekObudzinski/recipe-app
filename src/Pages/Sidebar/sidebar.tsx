import React from 'react';
import {Text, View} from 'react-native';
import {SidebarStyles} from './sidebar.styles';

const Sidebar: React.FC = () => {
  const {wrapper} = SidebarStyles;
  return (
    <View style={wrapper}>
      <Text> tmp</Text>
    </View>
  );
};

export default Sidebar;
