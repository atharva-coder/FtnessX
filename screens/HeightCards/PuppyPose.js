import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class PuppyPose extends Component {
  render() {
    return (
      <View style={styles.container}>
     
     <Text style={styles.tet}>Puppy Pose </Text>

           <Text style={styles.rtext}> 1.Start with positioning your all fours - hands, and knees - on the mat.</Text>
     <Text style={styles.rtext}> 2.Line up your knees with your hips and your hands with your shoulders.</Text>
      <Text style={styles.rtext}>3.
Tangle your toes and walk your hands forward a few inches</Text>
     <Text style={styles.rtext}>4.
Stretch your hips backward halfway to your feet and feel a good stretch in the lower body.</Text>
     <Text style={styles.rtext}>5.
Hold this position for 60 seconds and relax.
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
