import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
//import CustomInput from './CustomInput';
import CustomInput from'../components/customeinput';
import DrawerNavigator from'./Drawer';


const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    if (username === 'admin' && password === 'password') {
      Alert.alert('Login Successful');
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.login}>LOG<Text style={{ color: '#ADFF2F' }}>IN</Text></Text>
      
      <CustomInput
        icon="user"
        placeholder="Username or Email"
        value={username}
        onChangeText={text => setUsername(text)}
      />

      <CustomInput
        icon="lock"
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.btntext}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Drawer')}
      >
        <Text style={styles.btntext}>Back to Home</Text>
      </TouchableOpacity>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#24292d',
    padding: 20,
  },
  login: {
    marginBottom: 50,
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    width: 150,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ADFF2F',
    marginBottom: 25,
  },
  btntext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default LoginPage;
