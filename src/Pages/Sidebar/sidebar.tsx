import React from 'react';
import {Image, Text, View} from 'react-native';
import Avatar from '../../Components/Avatar/avatar';
import HeaderText from '../../Components/HeaderText/header_text';
import {NavigationElements} from '../../Utils/sidebar_navigation_elements';
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
      <View
        style={{
          height: 1,
          width: '75%',
          alignSelf: 'center',
          backgroundColor: 'white',
          opacity: 0.4,
          marginBottom: 30,
        }}
      />
      <View>
        {NavigationElements.map(navigationElement => {
          // const image = navigationElement.image;
          return (
            <View
              key={navigationElement.id}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
                marginLeft: 30,
              }}>
              <Image source={navigationElement.image} />
              <HeaderText style={{color: 'black', marginLeft: 15}} level={3}>
                {navigationElement.title}
              </HeaderText>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Sidebar;
