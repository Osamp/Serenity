import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity, StyleProp } from 'react-native';
import COLORS from '../utils/COLORS';
import { SCREEN_WIDTH } from '../utils/CONST_LAYOUTS';

interface SerenifyButtonProps {
  children?: React.ReactNode;
  secondary?: boolean;
  style?: StyleProp<any>
}

const SerenifyButton = ({ children, secondary,style}: SerenifyButtonProps) => {
  let backgroundColor = COLORS.PRIMARY_COLOR;
  if (secondary) backgroundColor = COLORS.SECONDARY_COLOR;
  return (
    <TouchableOpacity
       activeOpacity={.8}
      style={{
        backgroundColor,
        padding: 10,
        borderRadius: 10,
        margin: 10,
        width: SCREEN_WIDTH * 0.80,
        justifyContent: 'center',
        alignItems: 'center',
        ...style
      }}
    >
      <Text
        style={{
          color: COLORS.TEXT_COLOR,
          fontSize: 18,
          fontWeight: '500',
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default SerenifyButton;

const styles = StyleSheet.create({
  container: {},
});
