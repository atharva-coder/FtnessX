import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class FacePull extends Component {
  render() {
    return (
      <View style={styles.container}>
     
     <Text style={styles.tet}>Face Pull</Text>

             <Text style={styles.rtext}> 1.Pull the handles towards you, keeping your upper arms parallel to the floor, so that the handles go either side of your face.</Text>
     <Text style={styles.rtext}> 2.Then return to the starting position, keeping the tension in the cable.</Text>
      <Text style={styles.rtext}>3.
 Keep your movements slow and controlled throughout the exercise</Text>
     
     
        
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
