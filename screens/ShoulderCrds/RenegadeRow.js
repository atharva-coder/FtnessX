import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity , ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class RenegadRow extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
     
     <Text style={styles.tet}> Renegad Row </Text>

                 <Text style={styles.rtext}> 1.Beginners should get into a push-up position with the hands placed directly under the shoulders. Advanced users should place a pair of dumbbells or kettlebells about shoulder-width apart on the floor..</Text>
     <Text style={styles.rtext}> 2.Start with feet about shoulder-width apart. Beginners may find they need to widen the feet (and that’s fine), while advanced fitness levels may like the challenge of bringing the feet closer together.</Text>
      <Text style={styles.rtext}>3.Get into the top position of a push-up with your hands on the floor (beginners) or on the handles. Tighten up your entire body and give the handles a good, solid squeeze as if you’re trying to crush them.</Text>
            <Text style={styles.rtext}>4.With your left hand, push hard into the ground while pulling the weight (or hand for the beginners) to your lower rib cage/waist area with the right hand.</Text>
                  <Text style={styles.rtext}>5.Lower the weight in a slow, controlled fashion before repeating on the other side.</Text>
     
     
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
