import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity ,ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class AbdominalCrunches extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
     
     <Text style={styles.tet}>Abdominal Crunches </Text>

      <Text style={styles.rtext}> 1.Who doesn't want firm, flat abs? Experts say that when done correctly, the familiar crunch (along with its variations) is a good choice to target them.</Text>
     <Text style={styles.rtext}> 2. For a standard crunch, says Cotton, begin lying on your back with feet flat on the floor and fingertips supporting your head. Press your low back down and begin the exercise by contracting abdominals and peeling first your head (tucking your chin slightly), then your neck, shoulders, and upper back off the floor.</Text>
      <Text style={styles.rtext}>3.
Be careful not to pull your neck forward by sticking the chin out; don't hold your breath, and keep elbows out of your line of vision to keep chest and shoulders open.</Text>
     <Text style={styles.rtext}>4.
For his part, Petersen teaches his clients to do crunches with their feet off the floor and knees bent. He says that with feet kept on the floor, many people tend to arch the back and engage the hip flexors.</Text>
     <Text style={styles.rtext}>5.
"Crunches work the ab muscles; [they're] not to be mistaken as exercise that burns the fat over the abdominals," he says. "That's the biggest myth in exercise going." Learn more about the best ab exercises and how to perform them.</Text>
     
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
