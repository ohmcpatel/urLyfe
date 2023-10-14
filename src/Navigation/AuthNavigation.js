import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
             cardStyle: {
            backgroundColor: '#0e1529'
          },
          headerShown: false
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Sign In" component={Login} />
        <Stack.Screen name="Sign Up" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}