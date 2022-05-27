import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity , ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class Benchpress extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
     
     <Text style={styles.tet}>Bench Press</Text>


            <Text style={styles.rtext}> 1.Lie on your back on the bench. If the bench has a rack for the bar, face the bar. If there’s no rack, hold the bar carefully and slowly lie backward on the bench until you’re comfortable</Text>
     <Text style={styles.rtext}> 2.If there’s a rack, grab the bar with both hands, including your thumbs. Feel free to spread your fingers a bit.</Text>
      <Text style={styles.rtext}>3.Extend your arms to take the bar out of the rack.</Text>
            <Text style={styles.rtext}>4.Slowly lower your arms to bring the bar down to your chest.</Text>
                  <Text style={styles.rtext}>5.Slowly straighten your arms and raise the bar back toward the rack. If there’s no rack, make sure you have the strength to sit back up after you’re done.
</Text>
                        <Text style={styles.rtext}>6.Repeat steps 4 and 5 as many times as you feel comfortable.</Text>
     

     
     
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
