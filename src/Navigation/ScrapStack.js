import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Scrapbook from '../screens/Scrapbook';
import Memories from '../screens/Memories';
import Gallery from '../screens/Gallery';
import Video from '../screens/Video';

const Stack = createStackNavigator();

export default function ScrapStack() {
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
        >
        <Stack.Screen name="Scrapbook" component={Scrapbook} />
        <Stack.Screen name="Memories" component={Memories} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="Video" component={Video} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



