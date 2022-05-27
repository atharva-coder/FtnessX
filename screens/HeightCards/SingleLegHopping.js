import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class SingleLegHopping extends Component {
  render() {
    return (
      <View style={styles.container}>
     
     <Text style={styles.tet}>Single Leg Hopping </Text>

             <Text style={styles.rtext}> 1.Hop on your left leg ten times.</Text>
     <Text style={styles.rtext}> 2.Position your hands straight up pointing towards the sky.</Text>
      <Text style={styles.rtext}>3.
Hop on your right leg similarly.</Text>
     <Text style={styles.rtext}>4.
This exercise plays a huge role in strengthening your abdominal muscles and promises a thorough workout of your lower body.</Text>
     <Text style={styles.rtext}>5.
Hopping exercise to increase height is one of the best fun exercises.
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
