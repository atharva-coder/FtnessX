import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity , ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class Overheadpress extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
     
     <Text style={styles.tet}>Over head  Press</Text>


            <Text style={styles.rtext}> 1.Lrip the bar with your hands about shoulder-width apart.</Text>
     <Text style={styles.rtext}> 2.Lift the bar up to just above the front of your chest, even with your shoulders..</Text>
      <Text style={styles.rtext}>3.Slowly lift the bar above you until your arms are straight. Keep your elbows locked and raise your shoulders like you’re shrugging..</Text>
            <Text style={styles.rtext}>4.Slowly lower your arms to bring the bar down to your chest.</Text>
                  <Text style={styles.rtext}>5.Repeat steps 3 and 4 as many times as comfortable.
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
