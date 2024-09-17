import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import BackgroundScreenWrapper from '@/src/component/BackgroundScreenWrapper'; 
import SerenifyText from '@/src/component/SerenifyText';
const backgroundImage = require('../../../assets/images/sign_up.png')
const backgroundLogo = require('../../../assets/images/Logo.png.jpg');

interface SignupScreenProps {}

const SignupScreen: React.FC<SignupScreenProps> = () => {
  return (
    <BackgroundScreenWrapper image={backgroundImage}> 
      <View style={styles.container}>
        <View style={styles.inputsWrapper}>
          <Image source={backgroundLogo} style={styles.logo} />
          <SerenifyText heading bold>Serenify</SerenifyText>
          <SerenifyText>Experience Calm, Feel Joy, Live with Purpose</SerenifyText>
        </View>
      </View>
    </BackgroundScreenWrapper>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
    textTitle:{
      fontSize: 24,
      color: '#fff',
      fontWeight:'bold',
    },

  inputsWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo :{
    width: 100,
    height: 100,
    marginBottom:10,
  }
});