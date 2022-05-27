import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class SideStretch extends Component {
  render() {
    return (
      <View style={styles.container}>
     
     <Text style={styles.tet}>Side Stretch </Text>

               <Text style={styles.rtext}> 1.Stand straight with your feet together.</Text>
     <Text style={styles.rtext}> 2.Clasp your hands together stretching over your head.</Text>
      <Text style={styles.rtext}>3.
Bend your upper body to the right.</Text>
     <Text style={styles.rtext}>4.
Hold the stretch for 20 seconds and get back to the starting position.</Text>
     <Text style={styles.rtext}>5.
Repeat the stretch two times and switch sides to do the stretch in the opposite direction.
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
