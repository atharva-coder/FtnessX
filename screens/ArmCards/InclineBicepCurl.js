import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity , ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class InclineCurl extends Component {
  render() {
    return (
      <View style={styles.container}>
     
     <Text style={styles.tet}>Incline Bicep Curl </Text>

           <ScrollView>
     
 

      <Text style={styles.rtext}> 1.Sit on an incline bench and hold a dumbbell in each hand at arm's length..</Text>
     <Text style={styles.rtext}> 2. For a standard crunch, says Cotton, begin lying on your back with feet flat on the floor and fingertips supporting your head. Press your low back down and begin the exercise by contracting abdominals and peeling first your head (tucking your chin slightly), then your neck, shoulders, and upper back off the floor.</Text>
     
     
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
