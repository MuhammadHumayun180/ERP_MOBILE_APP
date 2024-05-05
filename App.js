import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './MainScreen';

import LoginPage from './screens/LoginPage';
//import CustomInput from './components/CustomInput';
import DrawerNavigator from './screens/Drawer'; // Import your DrawerNavigator component

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName="LoginPage"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#24292d',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {/* Include DrawerNavigator as a screen */}
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{ headerShown: false }} // Hide header for drawer navigator
        />
        
        {/* MainScreen and LoginPage as separate screens */}
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ title: 'LOGIN' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
