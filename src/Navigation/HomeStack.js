import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from '../screens/Home';
import Scrapbook from '../screens/Scrapbook';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer           
        independent={true}
    >
      <Stack.Navigator
          screenOptions={{
             cardStyle: {
            backgroundColor: '#FFFFFF'
          },
          headerShown: false
        }} 
        initialRouteName='Home'
        >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Scrapbook" component={Scrapbook} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



