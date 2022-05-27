import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity  } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class Pushups extends Component {
  render() {
    return (
      <View style={styles.container}>
     
     <Text style={styles.tet}>Pushups</Text>


          <Text style={styles.rtext}> 1.Lie face down on the ground.</Text>
     <Text style={styles.rtext}> 2.Put your hands on the ground, palms flat, with your arms out at your sides and your hands shoulder-width apart.</Text>
      <Text style={styles.rtext}>3.
Slowly push your body up until your arms are fully extended. Keep your back and legs straight so that your body makes a straight line.</Text>
     <Text style={styles.rtext}>4.
Slowly lower yourself back down until your nose nearly touches the floor.</Text>
     <Text style={styles.rtext}>5.
Repeat as many times as you feel comfortable.
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
