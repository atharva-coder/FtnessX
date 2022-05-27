import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class HighPull extends Component {
  render() {
    return (
      <View style={styles.container}>
     
     <Text style={styles.tet}>High Pull</Text>

             <Text style={styles.rtext}> 1.Stand with your feet hip-distance apart.</Text>
     <Text style={styles.rtext}> 2.Use an overhand grip to hold a dumbbell in your left hand.</Text>
      <Text style={styles.rtext}>3.Extend your arm straight.</Text>
            <Text style={styles.rtext}>4.Straighten your hips and knees as you explosively raise the dumbbell as high as you can.</Text>
                  <Text style={styles.rtext}>5.Slowly lower the weight back to the starting position.</Text>
     
     
        
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
