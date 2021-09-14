import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.carContainer} >
          <View style={styles.titles}>
             <Text style={styles.title} >Model S</Text>
             <Text style={styles.subTitle} >Starting at $69000</Text>
          </View>
      </View>
        

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center'
  },

  title : {
    fontSize: 40,
    fontWeight: '600'
  },

  subTitle : {
    
  },

  carContainer: {
    width: '100%',
    height: '100%'
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
