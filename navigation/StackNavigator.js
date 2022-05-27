import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TrainingPlan from '../screens/TrainingPlan'
import WeightLoss from "../screens/WeighLoss";
import DailyWorkout from "../screens/DailyWorkout";
import HeightIncrease from "../screens/HeightIncrease";
import WeightIncrease from "../screens/WeightIncrease";
import ShoulderBack from "../screens/ShoulderBack";
import Arm from "../screens/Arm";


import ReverseCurl from "../screens/ArmCards/ReverseCurlStraightBar";
import ConcentrationCurl from "../screens/ArmCards/ConcentrationCurl";
import InclineCurl from "../screens/ArmCards/InclineBicepCurl";
import TwistingCurl from "../screens/ArmCards/TwistingDumbbellCurl";
import UnderHandCurl from "../screens/ArmCards/UnderhandSeatedRow";

import Burpee from "../screens/WeightLossCards/Burpee";
import DoubleJump from "../screens/WeightLossCards/DoubleJump";
import ExplosiveLunge from "../screens/WeightLossCards/ExplosiveLunge";
import ForwardLunge from "../screens/WeightLossCards/ForwardLunge";
import Squat from "../screens/WeightLossCards/Squat";

import AbdominalCrunches from "../screens/DailyCards/AbdominalCrunches";
import JumpiingJacks from "../screens/DailyCards/JumpingJacks";
import Lunges from "../screens/DailyCards/Lunges";
import Pushups from "../screens/DailyCards/Pushups";

import Hanging from "../screens/HeightCards/Hanging";
import PelvicShift from "../screens/HeightCards/PelvicShift";
import PuppyPose from "../screens/HeightCards/PuppyPose";
import SideStretch from "../screens/HeightCards/SideStretch";
import SingleLegHopping from "../screens/HeightCards/SingleLegHopping";

import Benchpress from "../screens/WeightincCards/Benchpress";
import Overheadpress from "../screens/WeightincCards/Overheadpress";

import FacePull from "../screens/ShoulderCrds/FacePull";
import HighPull from "../screens/ShoulderCrds/HighPull";
import RenegadeRow from "../screens/ShoulderCrds/RenegadeRow";
import SeatedDumbbell from "../screens/ShoulderCrds/SeatedDumbbell";
import StandingDumbbel from "../screens/ShoulderCrds/StandingDumbbel";








const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={TrainingPlan} />
      <Stack.Screen name="WeightLoss" component={WeightLoss} />
       <Stack.Screen name="DailyWorkout" component={DailyWorkout} />
       <Stack.Screen name="HeightIncrease" component={HeightIncrease} />
         <Stack.Screen name="WeightIncrease" component={WeightIncrease} />
            <Stack.Screen name="ShoulderBack" component={ShoulderBack} />
              <Stack.Screen name="Arm" component={Arm} />
              

                <Stack.Screen name="ReverseCurl" component={ReverseCurl} />
                <Stack.Screen name="ConcentrationCurl" component={ConcentrationCurl} />
                <Stack.Screen name="InclineCurl" component={InclineCurl} />
                <Stack.Screen name="TwistingCurl" component={TwistingCurl} />
                <Stack.Screen name="UnderHandCurl" component={UnderHandCurl} />

                  <Stack.Screen name="Burpee" component={Burpee} />
                  <Stack.Screen name="DoubleJump" component={DoubleJump} />
                  <Stack.Screen name="ExplosiveLunge" component={ExplosiveLunge} />
                  <Stack.Screen name="ForwardLunge" component={ForwardLunge} />
                  <Stack.Screen name="Squat" component={Squat} />
                  
                  <Stack.Screen name="AbdominalCrunches" component={AbdominalCrunches} />
                  <Stack.Screen name="JumpingJacks" component={JumpiingJacks} />
                  <Stack.Screen name="Lunges" component={Lunges} />
                  <Stack.Screen name="Pushups" component={Pushups} />

                   <Stack.Screen name="Hanging" component={Hanging} />
                   <Stack.Screen name="PelvicShift" component={PelvicShift} />
                   <Stack.Screen name="PuppyPose" component={PuppyPose} />
                   <Stack.Screen name="SideStretch" component={SideStretch} />
                   <Stack.Screen name="SingleLegHopping" component={SingleLegHopping} />

                   <Stack.Screen name="Benchpress" component={Benchpress} />
                   <Stack.Screen name="Overheadpress" component={Overheadpress} />

                   <Stack.Screen name="FacePull" component={FacePull} />
                   <Stack.Screen name="HighPull" component={HighPull} />
                   <Stack.Screen name="RenegadeRow" component={RenegadeRow} />
                   <Stack.Screen name="SeatedDumbbell" component={SeatedDumbbell} />
                   <Stack.Screen name="StandingDumbbel" component={StandingDumbbel} />

            
            
    </Stack.Navigator>
  );
};

export default StackNavigator;
