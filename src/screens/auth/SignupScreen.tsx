import React, { useState } from 'react';
import { View, StyleSheet, Image, ImageBackground, Alert, TouchableOpacity } from 'react-native';
import SerenifyText from '@/src/component/SerenifyText';
import SerenifyTextInput from '@/src/component/SerenifyTextInput';
import SerenifyButton from '@/src/component/SerenifyButton';
import { NavigationProp } from '@react-navigation/native';

const backgroundImage = require('../../../assets/images/sign_up.png');
const backgroundLogo = require('../../../assets/images/Logo.png.jpg');

interface SignupScreenProps {
  navigation: NavigationProp<any>; // Add navigation prop type (update as needed based on your navigation setup)
}

const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (field: 'email' | 'password', value: string) => {
    setCredentials(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    const { email, password } = credentials;

    if (!email || !password) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <Image source={backgroundLogo} style={styles.logo} />
          <SerenifyText heading bold>Serenify</SerenifyText>
          <SerenifyText>Find a moment of peace</SerenifyText>
          
          <View style={styles.inputWrapper}>
            <SerenifyTextInput 
              value={credentials.email}
              onChangeText={(text) => handleChange('email', text)}
              placeholder="Email"
            />
            <SerenifyTextInput 
              value={credentials.password}
              onChangeText={(text) => handleChange('password', text)}
              placeholder="Password"
              secureTextEntry // Optional: to hide password input
            />
          </View>
          <View style={{marginTop: 15}}>
            <SerenifyButton>
              Signup
            </SerenifyButton>
          </View>
          <View style={{marginTop: 15}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
            >
              <SerenifyText>Have an account? Login</SerenifyText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%', 
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Center items vertically
    alignItems: 'center', // Center items horizontally
  },
  logoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%', // Optional: Define width to prevent elements from stretching too wide
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  inputWrapper: {
    width: '100%',
    marginTop: 15, // Space between logo and inputs
  },
});
