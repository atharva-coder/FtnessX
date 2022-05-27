import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class Squat extends Component {
  render() {
    return (
      <View style={styles.container}>
     
     <Text style={styles.tet}> Squat </Text>

           <Text style={styles.rtext}> 1.
Start with feet hip-width apart, arms either at sides holding weights or clasped in front of chest.

</Text>
     <Text style={styles.rtext}> 2. 

Keeping weight in heels and back straight, sit hips back and bend knees to lower into a squat until thighs are parallel to the floor. Remember to keep knees in line with toes the entire time. Maintain an even pace and rise back to start.
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
   marginBottom:30,
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
