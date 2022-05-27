import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image,
    ScrollView
} from "react-native";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
           <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
              <ScrollView >
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>FITNESSX </Text>
                    </View>
                   
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("WeightLoss")
                    }>
                        <Text style={styles.routeText}>Weight Loss</Text>
             
                      
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("DailyWorkout")
                    }>
                        <Text style={styles.routeText}>Daily Workout</Text>
                   
                     
                    </TouchableOpacity>
                     <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("HeightIncrease")
                    }>
                        <Text style={styles.routeText}>Height Increase</Text>
             
                      
                    </TouchableOpacity>
                     <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("WeightIncrease")
                    }>
                        <Text style={styles.routeText}>Weight Increase</Text>
             
                      
                    </TouchableOpacity>
                         <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("ShoulderBack")
                    }>
                        <Text style={styles.routeText}>Shoulder & Back</Text>
             
                      
                    </TouchableOpacity>
                        <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Arm")
                    }>
                        <Text style={styles.routeText}>Arm Excersize </Text>
             
                      
                    </TouchableOpacity>
                    </ScrollView>

                
                
            
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
  
    routeCard: {
       // flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "red"
    },
    routeText: {
        fontSize: 30,
        fontWeight: "italian",
        color: "black",
        marginTop: 10,
        marginBottom:10,
        marginLeft : 10,
        
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80
    }
});