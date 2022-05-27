import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class Lunges extends Component {
  render() {
    return (
      <View style={styles.container}>
     
     <Text style={styles.tet}> Lunges </Text>

          <Text style={styles.rtext}> 1. Stand up straight, flexing your abdominal muscles.</Text>
     <Text style={styles.rtext}> 2.Bend your knees slightly, and jump into the air.</Text>
      <Text style={styles.rtext}>3.
Extend one leg like you’re taking a step, then lean forward like you’re kneeling until your knees are at 90-degree angles.</Text>
     <Text style={styles.rtext}>4.
Push back on your heel to lift yourself back up to your initial position.</Text>
     <Text style={styles.rtext}>5.
Repeat as many times as you feel comfortable on one leg.
</Text>
     
     
     
        
      </View>
    );
  }
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    //alignItems: "center"
  },
  tet:{
    fontSize:50,
    marginBottom:RFValue(30),
   
    color:"white",
    backgroundColor:"red"
  },

  rtext:{
        fontSize:20,
        fontStyle:"bold",
        marginLeft:RFValue(20),
        marginBottom:RFValue(20),
   
      
        
  }
  
});
