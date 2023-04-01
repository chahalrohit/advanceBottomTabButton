import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/BottomTabs';

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};
export default App;
