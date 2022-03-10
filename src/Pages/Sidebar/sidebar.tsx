import React from 'react';
import {Text, View} from 'react-native';
import Avatar from '../../Components/Avatar/avatar';
import HeaderText from '../../Components/HeaderText/header_text';
import {NavigationElements} from '../../Utils/sidebar_navigation_elements';
import {COLORS} from '../../Utils/styles/colors.styles';
import {AdvancedLevels} from '../../Utils/types/global.types';
import {SidebarStyles} from './sidebar.styles';

const Sidebar: React.FC = () => {
  const {
    wrapper,
    headerContainer,
    userInformationContainer,
    headerUsernameTextColor,
    headerAdvancedLevelTextColor,
  } = SidebarStyles;
  return (
    <View style={wrapper}>
      <View style={headerContainer}>
        <Avatar />
        <View style={userInformationContainer}>
          <HeaderText style={headerUsernameTextColor} level={3}>
            Username
          </HeaderText>
          <Text style={headerAdvancedLevelTextColor}>
            {AdvancedLevels.BEGINNER}
          </Text>
        </View>
      </View>

      <View>
        {NavigationElements.map(navigationElement => {
          return (
            <View key={navigationElement.title}>
              <Text>{navigationElement.title}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Sidebar;
