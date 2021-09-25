import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native';
import cars from './cars';
import styles from './styles';
import CarItem from '../CarItem/CarItem';
export default function CarsList() {
    return (
        <View style={styles.container} >
            <FlatList
                data={cars}
                renderItem={({item}) => <CarItem car={item} /> }
                snapToAlignment={'start'}
                showsHorizontalScrollIndicator={false}
                decelerationRate={'fast'}
                snapToInterval={ Dimensions.get("window").height}
            />
        </View>
    )
}
