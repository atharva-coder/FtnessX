import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class JumpingJacks extends Component {
  render() {
    return (
      <View style={styles.container}>
     
     <Text style={styles.tet}>Jumping Jacks </Text>

     <Text style={styles.rtext}> 1.Stand upright with your legs together, arms at your sides..</Text>
     <Text style={styles.rtext}> 2.Bend your knees slightly, and jump into the air.</Text>
      <Text style={styles.rtext}>3.
Be careful not to pull your neck forward by sticking the chin out; don't hold your breath, and keep elbows out of your line of vision to keep chest and shoulders open.</Text>
     <Text style={styles.rtext}>4.
As you jump, spread your legs to be about shoulder-width apart. Stretch your arms out and over your head.</Text>
     <Text style={styles.rtext}>5.
Jump back to starting position.
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
