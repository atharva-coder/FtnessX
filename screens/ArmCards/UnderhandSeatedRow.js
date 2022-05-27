import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity , ScrollView} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class UnderHandCurl extends Component {
  render() {
    return (
      <View style={styles.container}>
     
     <Text style={styles.tet}> Under hand seated row </Text>

           <ScrollView>
     
 

      <Text style={styles.rtext}> 1.Bend your knees and hold the bar with an underhand grip, shoulder-width apart..</Text>
     <Text style={styles.rtext}> 2.  Lean back slightly, keeping your back straight, then use your back muscle to drive the bar towards your belly button.</Text>
      <Text style={styles.rtext}>3.
 Return the bar to starting position and repeat.

</Text>
 
     
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
