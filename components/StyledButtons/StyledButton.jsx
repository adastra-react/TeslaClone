import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles';

export default function StyledButton({ type }) {

    const StyleType = type;
   
    const backgorundColor = StyleType === 'primary' ? 'black' : 'white';

    const textColor = StyleType === 'primary' ? 'white' : 'black'

    return (
        <View style={styles.container}>
            <Pressable
             style={[styles.button, {backgroundColor: backgorundColor}]}
             onPress={() => {
                 console.warn('Hey')
             }}
            >
                <Text style={[styles.text, {color: textColor}]} >Custom Order</Text>
            </Pressable>
        </View>
    )
}
