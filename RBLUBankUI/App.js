/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import TabsNavigation from './src/navigation/TabNavigation';
const App = () => {
  return (
      <TabsNavigation/>
  );
};

const styles = StyleSheet.create({

});

export default App;
