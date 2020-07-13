import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/screens/Home';
import {Text} from 'react-native';
import Catalog from './src/screens/Catalog';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Catalog}
          options={() => ({
            headerTitle: () => (
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Cerveja de 3
              </Text>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
