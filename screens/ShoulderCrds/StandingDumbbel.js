import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class StandingDumbbel extends Component {
  render() {
    return (
      <View style={styles.container}>
     
     <Text style={styles.tet}> Standing Dumbbell</Text>


            <Text style={styles.rtext}> 1.Standing with your feet shoulder width apart, take a dumbbell in each hand. Raise the dumbbells to head height, the elbows out and about 90 degrees. This will be your starting position.</Text>
     <Text style={styles.rtext}> 2.Maintaining strict technique with no leg drive or leaning back, extend through the elbow to raise the weights together directly above your head.</Text>
      <Text style={styles.rtext}>3.Pause, and slowly return the weight to the starting position..</Text>
     

     
     
        
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
