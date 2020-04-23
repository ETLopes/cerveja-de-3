import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/screens/Home';
import {Text, View} from 'react-native';
import {Button, Icon} from 'native-base';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation, route}) => ({
            headerTitle: () => (
              <Text
                style={{
                  fontFamily: 'BrooklineCondensed',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Cerveja de 3
              </Text>
            ),
            headerRight: () => (
              <View style={{marginRight: 0}}>
                <Button transparent iconRight>
                  <Icon name="ios-list" />
                </Button>
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
