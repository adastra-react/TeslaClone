import React from 'react';
import { View, Text, ImageBackground, Dimensions } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButtons/StyledButton';

const CarItem = (props) => {

  const { tagline, taglineCTA, name, image } = props.car;

    return (
        <View style={styles.carContainer} >

        <ImageBackground
          source={image}
          style={styles.image}
        />
        
            <View style={styles.titles}>
               <Text style={styles.title} >{name}</Text>
                <Text style={styles.subTitle} >
                  {tagline}
                  {''}
                  <Text style={styles.subTitleCTA} >
                    {taglineCTA}
                  </Text>
                </Text>
            </View>

            <View style={styles.buttonContainer} >
              <StyledButton 
                type="primary" 
                content={"Custom Order"} 
                onPress={() => {
                    console.warn("Custom Order was pressed")
                }}  
              />

              <StyledButton 
                type="secondary" 
                content={"Existing Inventory"} 
                onPress={() => {
                    console.warn("Existing iventory was pressed")
                }} 
              />
            </View>
            
        </View>
    )
}

export default CarItem;