import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity , ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class HeightIncrease extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
     
     <Text style={styles.tet}> Height Increase</Text>
     <Image source={require("../assets/Dailyworkout.png")} style={styles.img}></Image>

                      <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Hanging")
                    }>
                        <Text style={styles.routeText}> Hanging </Text>
             
                      
                    </TouchableOpacity>
                      <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("PelvicShift")
                    }>
                        <Text style={styles.routeText}> PelvicShift</Text>
             
                      
                    </TouchableOpacity>
                      <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("PuppyPose")
                    }>
                        <Text style={styles.routeText}>  PuppyPose </Text>
             
                      
                    </TouchableOpacity>
                            <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("SideStretch")
                    }>
                        <Text style={styles.routeText}> SideStretch </Text>
             
                      
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("SingleLegHopping")
                    }>
                        <Text style={styles.routeText}> Single Leg Hopping </Text>
             
                      
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
