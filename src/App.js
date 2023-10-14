import { StatusBar } from 'expo-status-bar';
import "./config/firebase.js"
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import "react-native-gesture-handler"
import RootNavigation from './Navigation/index.js';
import AuthStack from './Navigation/AuthNavigation.js';


export default function App() {
  return (
    <View style={{
      height: "100%",
      backgroundColor: '#FFFFFF',
    }}>
      <RootNavigation/>
    </View>
  );
}
