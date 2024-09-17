import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import BackgroundScreenWrapper from '@/src/component/BackgroundScreenWrapper'; 
import SerenifyText from '@/src/component/SerenifyText';
const backgroundImage = require('/assets/images/sign_up.png')

interface SignupScreenProps {}

const SignupScreen: React.FC<SignupScreenProps> = () => {
  return (
    <BackgroundScreenWrapper image={backgroundImage}> 
      <View style={styles.container}>
        <View style={styles.inputsWrapper}>
          <SerenifyText headingL={true}>Serenify</SerenifyText>
        </View>
      </View>
    </BackgroundScreenWrapper>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputsWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});
