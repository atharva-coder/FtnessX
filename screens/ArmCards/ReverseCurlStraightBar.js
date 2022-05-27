import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity , ScrollView} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class ReverseCurl extends Component {
  render() {
    return (
      <View style={styles.container}>
     
     <Text style={styles.tet}>Reverse Curl Straight Bar </Text>

           <ScrollView>
     
  

      <Text style={styles.rtext}> 1.Stand and grip a barbell at shoulder width with an overhand grip.</Text>
     <Text style={styles.rtext}> 2. Flex the elbows and rotate the barbell upwards, only using your forearms, until your palms face out and the barbell is in line with your shoulders.</Text>
      <Text style={styles.rtext}>3.
Return it back down slowly and repeat.</Text>

     
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
