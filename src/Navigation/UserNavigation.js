import React from "react";
import { Modal, Text, View, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import CreateEvent from "../screens/CreateEvent";
import Profile from "../screens/Profile";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from "./HomeStack";


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
        component={HomeStack}
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
        <Tab.Screen
        name="CreateEvent"
        component={CreateEvent}
        options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => (
          <Feather
            name="plus-square"
            color={focused ? "white" : "gray"}
            size={"24"}
            />
          ),
        }}
        >
        </Tab.Screen>
        <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => (
          <Feather
            name="user"
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


