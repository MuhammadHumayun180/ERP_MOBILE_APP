import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
//import DrawerNavigator from './screens/Drawer';
const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to My App!</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Drawer')}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
