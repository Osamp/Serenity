import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface SerenifyTextProps{
    headingL?:boolean
    heading? :boolean
    bodyS?:boolean
    centre?:boolean
    bold?:boolean
    color?:string
    children?:React.ReactNode
}

const SerenifyText = ({
    headingL,
    heading,
    bodyS,
    centre =false,
    bold,
    color,
    children

}: SerenifyTextProps) => {

    let fontSize = 14
    if(headingL){
        fontSize = 24
    }
    if(heading){
        fontSize = 18
    }
    
    if(bodyS){
        fontSize = 14
    }
  return (
     
        <Text
          style={{
            fontSize: fontSize,
            alignSelf: centre ? 'center' : 'auto',
            fontWeight: bold ? '800' : '400',
            color: color || '#000',
          }}
        >
          {children}
        </Text>
      );
    };
    
export default SerenifyText;

const styles = StyleSheet.create({
  container: {}
});
