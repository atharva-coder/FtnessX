import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class PelvicShift extends Component {
  render() {
    return (
      <View style={styles.container}>
     
     <Text style={styles.tet}>PelvicShift </Text>

        <Text style={styles.rtext}> 1.Lie on the mat with the shoulders flat on the floor.</Text>
     <Text style={styles.rtext}> 2.Keep your arms stretched out on the sides with palms down.</Text>
      <Text style={styles.rtext}>3.
Bend your knees and draw your feet close to the buttocks.</Text>
     <Text style={styles.rtext}>4.
Arch your back so that the pelvis is lifted.</Text>
     <Text style={styles.rtext}>5.
Tuck the buttocks and let the legs and shoulders support your weight.
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
