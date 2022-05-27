import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity , ScrollView} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class ConcentrationCurl extends Component {
  render() {
    return (
      <View style={styles.container}>
     
     <Text style={styles.tet}>Concentration Curl </Text>

           <ScrollView>
     


      <Text style={styles.rtext}> 1.Sit down on bench and rest your right arm against your right leg, letting the weight hang down. </Text>
     <Text style={styles.rtext}> 2. Curl the weight up, pause, then lower. Repeat with the other arm.</Text>
 
     
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
   
      
        
  }
  
});
