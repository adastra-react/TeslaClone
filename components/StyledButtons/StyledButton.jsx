import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles';

export default function StyledButton(props) {
    return (
        <View style={styles.container}>
            <Pressable
             style={styles.button}
             onPress={() => {
                 console.warn('Hey')
             }}
            >
                <Text style={styles.text} >Custom Order</Text>
            </Pressable>
        </View>
    )
}
