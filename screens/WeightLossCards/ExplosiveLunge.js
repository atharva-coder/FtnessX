import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class ExplosiveLunge extends Component {
  render() {
    return (
      <View style={styles.container}>
     
     <Text style={styles.tet}>Explosive Lunge </Text>

             <Text style={styles.rtext}> 1.
Start with feet together, hands on your hips. Step forward with the right leg and lower into a lunge so right knee is bent at a 90-degree angle.</Text>
     <Text style={styles.rtext}> 2. 

Jump up, switching legs midair.
</Text>
      <Text style={styles.rtext}>3.
Land softly with the left leg forward, immediately lowering into a lunge.</Text>
     
     
        
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
