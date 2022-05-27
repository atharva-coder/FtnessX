import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class DoubleJump extends Component {
  render() {
    return (
      <View style={styles.container}>
     
     <Text style={styles.tet}> Double jump </Text>

        <Text style={styles.rtext}> 1.
Stand with feet slightly wider than hip-width apart and lower into a deep squat.</Text>
     <Text style={styles.rtext}> 2. 
Rise up as if you're jumping, but land in a lunge position with your right leg back.
</Text>
      <Text style={styles.rtext}>3.
Use momentum to jump from this lunge position back to a squat. Then repeat, landing in a lunge on the opposite side.</Text>
     
     
        
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
