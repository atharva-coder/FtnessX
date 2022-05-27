import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class Hanging extends Component {
  render() {
    return (
      <View style={styles.container}>
     
     <Text style={styles.tet}>Hanging </Text>

          <Text style={styles.rtext}> 1.Jump up and hang on to the bar..</Text>
     <Text style={styles.rtext}> 2.Bend your knees slightly, and jump into the air.</Text>
      <Text style={styles.rtext}>3.
Be careful not to pull your neck forward by sticking the chin out; don't hold your breath, and keep elbows out of your line of vision to keep chest and shoulders open.</Text>
     <Text style={styles.rtext}>4.
Keep your arms and spine straight.</Text>
     <Text style={styles.rtext}>5.
Remain in the position for 30 seconds.
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
