import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity , ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class WeightLoss extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
     
     <Text style={styles.tet}> Weight Loss</Text>
     <Image source={require("../assets/weightLoss.jpg")} style={styles.img}></Image>
       <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Squat")
                    }>
                        <Text style={styles.routeText}> Squat </Text>
             
                      
                    </TouchableOpacity>
                      <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Burpee")
                    }>
                        <Text style={styles.routeText}> Burpee </Text>
             
                      
                    </TouchableOpacity>
                      <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("DoubleJump")
                    }>
                        <Text style={styles.routeText}> Double Jumb </Text>
             
                      
                    </TouchableOpacity>
                      <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("ExplosiveLunge")
                    }>
                        <Text style={styles.routeText}> Explosive Lunge </Text>
             
                      
                    </TouchableOpacity>
                            <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("ForwardLunge")
                    }>
                        <Text style={styles.routeText}> Forward Lunge </Text>
             
                      
                    </TouchableOpacity>
                    </ScrollView>
        
      </View>
      
    );
  }
}  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: "center"
  },
  tet:{
    fontSize:50,
   fontWeight:"bold",
    color:"white",
    backgroundColor:"red"
  },
  img:{
    resizeMode:"contain",
    alignSelf:"center",
    height:RFValue(230),
    width:RFValue(230),
  
 
  },
   routeCard: {
       // flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'red'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 10,
        fontWeight: "bold",
        color: "red"
    },
    routeText: {
        fontSize: 28,
        fontWeight: "bold",
        color: "white",
        marginTop: 10,
        marginBottom:10,
        marginLeft : 10,
        
    },
  
});
