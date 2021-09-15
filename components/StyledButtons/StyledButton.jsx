import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles';

export default function StyledButton(props) {

    const type = props.type;
   
    const backgorundColor = type === 'primary' ? 'black' : 'white';

    const textColor = type === 'primary' ? 'white' : 'black'

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
