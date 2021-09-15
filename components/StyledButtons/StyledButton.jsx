import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles';

export default function StyledButton({ type, content, onPress }) {
   
    const backgorundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';

    const textColor = type === 'primary' ? '#FFFFFFA6' : '#171A20CC'

    return (
        <View style={styles.container}>
            <Pressable
             style={[styles.button, {backgroundColor: backgorundColor}]}
             onPress={onPress}
            >
                <Text style={[styles.text, {color: textColor}]} >{content}</Text>
            </Pressable>
        </View>
    )
}
