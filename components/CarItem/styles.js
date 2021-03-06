import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    titles: {
      marginTop: '30%',
      width: '100%',
      alignItems: 'center'
    },

    buttonContainer: {
      position: "absolute",
      bottom: 50,
      width: '100%'
    },

    subTitleCTA: {
      textDecorationLine: 'underline'
    },
  
    image: {
      height: '100%',
      width: '100%',
      resizeMode: 'cover',
      position: 'absolute'
    },
  
    title : {
      fontSize: 40,
      fontWeight: '600'
    },
  
    subTitle : {
      fontSize: 16,
      color: '#5c5e62'
    },
  
    carContainer: {
      width: '100%',
      height: Dimensions.get("window").height
    }
  });

  export default styles;