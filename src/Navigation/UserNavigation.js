import React from "react";
import { Modal, Text, View, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import HomePage from "../screens/Home";

const Tab = createBottomTabNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: "#0e1529" },
      }}
      sceneContainerStyle={{ backgroundColor: "#0e1529" }}
      >
        <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => (
          <Feather
            name="home"
            color={focused ? "white" : "gray"}
            size={"24"}
            />
          ),
        }}
        >
        </Tab.Screen>
      
      </Tab.Navigator>
     
    </NavigationContainer>
  );
}


