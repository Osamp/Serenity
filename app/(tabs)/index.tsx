import { Dimensions,Image, StyleSheet, View, Text,Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer }from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from '@/src/navigation/AuthStack';
const {Navigator, Screen} = createNativeStackNavigator();
export default function App() {
  return (
    
    <NavigationContainer  independent={true}>
      <StatusBar style="auto" /> 
      <Navigator>
      <Screen name="AuthStack" component={AuthStack} />
      {/* <Screen name="MainStack" component={AppStack}/> */}
      </Navigator>
    </NavigationContainer>
    );
   
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
