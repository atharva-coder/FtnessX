import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class ForwardLunge extends Component {
  render() {
    return (
      <View style={styles.container}>
     
     <Text style={styles.tet}> Forward Lunge </Text>

      <Text style={styles.rtext}> 1.
Stand tall with feet hip-width apart. Place hands on hips or hold weights by sides to start.</Text>
     <Text style={styles.rtext}> 2. 

Take a controlled step forward with the right leg. Keeping spine tall, lower body until the front and back leg form a 90-degree angle.
</Text>
      <Text style={styles.rtext}>3.
Pause, then step right leg back to start. Step left leg forward to repeat on the other side.</Text>
     
     
        
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
