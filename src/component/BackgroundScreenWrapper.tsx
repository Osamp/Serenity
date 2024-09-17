import * as React from 'react';
import { Text, View, StyleSheet ,Image,ImageSourcePropType } from 'react-native';
import { SCREEN_WIDTH } from '../utils/CONST_LAYOUTS';

interface BackgroundScreenWrapperProps {
    image: ImageSourcePropType ;
    children: React.ReactNode;
}

const BackgroundScreenWrapper = ({image, children}:BackgroundScreenWrapperProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.container}>
        {children}
      </View>
    </View>
  );
};

export default BackgroundScreenWrapper;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, 
  image: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH,
  }
});
