import React from 'react';
import {LogBox} from 'react-native';
import Sidebar from './src/Pages/Sidebar/sidebar';

const App: React.FC = () => {
  LogBox.ignoreAllLogs();
  return <Sidebar />;
};
export default App;
