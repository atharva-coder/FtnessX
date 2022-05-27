import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity , ScrollView , ImageBackground} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class Burpee extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
         <ImageBackground source={require('./../../assets/bg.gif')} style={styles.backgroundImage}>
     
     <Text style={styles.tet}>Burpee </Text>

    
     
     <Text style={styles.rtext}> 1. Stand with your feet shoulder-width apart and arms at your sides. Push your hips back, bend knees, and reach palms to the ground to lower into a crouch.</Text>
     <Text style={styles.rtext}> 2. With hands shoulder-width on the floor directly in front of feet, and shift your weight to them to jump back and land softly in plank position.</Text>
      <Text style={styles.rtext}>3.
Jump feet forward so they land just outside of hands. Jump explosively into the air, reaching hands overhead or leaving by sides.</Text>

        </ImageBackground>
        </ScrollView>
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
        fontWeight:"bold",
        color:"black"
   
      
        
  },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
       
    },
  
});
