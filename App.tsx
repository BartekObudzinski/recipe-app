import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LogBox} from 'react-native';
import {HomeScreen} from './src/screens/HomeScreen/home-screen';
import {StartScreen} from './src/screens/StartScreen/start-screen';

export type RootStackParams = {
  Start: undefined;
  Home: undefined;
};

LogBox.ignoreAllLogs();
const App: React.FC = () => {
  // const RootStack = createNativeStackNavigator<RootStackParams>();
  // const Tab = createBottomTabNavigator();
  return (
    // <NavigationContainer>
    //   {/* <RootStack.Navigator
    //     initialRouteName="Start"
    //     screenOptions={{headerShown: false}}>
    //     <RootStack.Screen name="Start" component={StartScreen} />
    //   </RootStack.Navigator> */}
    //   <Tab.Navigator
    //     initialRouteName="Sidebar"
    //     screenOptions={{headerShown: false}}>
    //     <Tab.Screen name="Home" component={HomeScreen} />
    //     <Tab.Screen name="Sidebar" component={StartScreen} />
    //     {/* <RootStack.Screen name="Home" component={HomeScreen} /> */}
    //   </Tab.Navigator>
    // </NavigationContainer>
    <StartScreen />
  );
};
export default App;
