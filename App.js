import React from 'react';
import {Text, View } from 'react-native';

import { StackNavigator } from 'react-navigation';
import  Login  from './src/Login'
import  Home  from './src/Home'
import  AddPole  from './src/AddPole'

const App = StackNavigator({
    Login: {screen: Login},
    Home: {screen: Home},
    AddPole: {screen: AddPole}
});

export default App; // Export your root navigator as the root component