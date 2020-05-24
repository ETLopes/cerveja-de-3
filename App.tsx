/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import Home from './src/screens/Home';
import {Text} from 'react-native';

const Stack = createStackNavigator();

function App() {
  const isTutorialCompleted = async () => {
    try {
      const tutorialCompleted = await AsyncStorage.getItem('tutorialCompleted');
      return !!tutorialCompleted;
    } catch (e) {
      return false;
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={isTutorialCompleted && Home}
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
