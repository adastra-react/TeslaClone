import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButtons/StyledButton';

const CarItem = (props) => {
    return (
        <View style={styles.carContainer} >

        <ImageBackground
          source={require('../../assets/images/ModelX.jpeg')}
          style={styles.image}
        />
        
            <View style={styles.titles}>
               <Text style={styles.title} >Model X</Text>
               <Text style={styles.subTitle} >Starting at $70,000</Text>
            </View>

            <StyledButton type="primary" />
        </View>
    )
}

export default CarItem;