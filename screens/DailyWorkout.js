import React, { Component } from "react";
import { StyleSheet, Text, View , Image , TouchableOpacity , ScrollView } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class DilyWorkout extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
     
     <Text style={styles.tet}> DilyWorkout</Text>
     <Image source={require("../assets/Dailyworkout.png")} style={styles.img}></Image>
       <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Squat")
                    }>
                        <Text style={styles.routeText}> Squat </Text>
             
                      
                    </TouchableOpacity>
                      <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("AbdominalCrunches")
                    }>
                        <Text style={styles.routeText}> Abdominal Crunches </Text>
             
                      
                    </TouchableOpacity>
                      <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("JumpingJacks")
                    }>
                        <Text style={styles.routeText}> Jumping Jacks </Text>
             
                      
                    </TouchableOpacity>
                      <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Lunges")
                    }>
                        <Text style={styles.routeText}>  Lunges </Text>
             
                      
                    </TouchableOpacity>
                            <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Pushups")
                    }>
                        <Text style={styles.routeText}> Pushups </Text>
             
                      
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
