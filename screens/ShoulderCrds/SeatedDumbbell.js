import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class SeatedDumbbell extends Component {
  render() {
    return (
      <View style={styles.container}>
     
     <Text style={styles.tet}> Seated Dumbbell</Text>

            <Text style={styles.rtext}> 1.Once you’re seated, rest one dumbbell on each thigh. Sit with your lower back firmly against the back of the bench. Keep your shoulders and back as straight as possible.</Text>
     <Text style={styles.rtext}> 2.Raise the dumbbells from your thighs and bring them to shoulder height. If you have heavy dumbbells, raise your thighs one at a time to help lift the dumbbells. Raising a heavy dumbbell with only your arm could cause injury.</Text>
      <Text style={styles.rtext}>3.With the dumbbells at shoulder height, rotate your palms so that they face forward. If you prefer, you can also complete a dumbbell press with your palms facing your body. Make sure your forearms are perpendicular to the ground..</Text>
            <Text style={styles.rtext}>4.Begin to press the dumbbells above your head until your arms fully extend. Hold the weight above your head for a moment, and then lower the dumbbells back to shoulder height.</Text>
                  <Text style={styles.rtext}>5.Complete the desired number of reps. If you’re a beginner, start with 1 set of 8–10 reps.
.</Text>
     
     
        
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
