import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CustomPicker from "../Components/picker";
import Colors from "@/constants/Colors";
import Header from "../Components/header";
import { LinearGradient } from "expo-linear-gradient";

const WorkoutInputScreen = () => {
  const [exerciseType, setExerciseType] = useState("");
  const [reps, setReps] = useState("");
  const [weights, setWeights] = useState("");
  const options: string[] = ["Option 1", "Option 2", "Option 3"];
  const handleSelect = (option: string) => {
    console.log("Selected Option:", option);
  };
  const saveWorkout = () => {
    // Logic to save workout details (e.g., send to backend, store locally, etc.)
    console.log("Workout Details:", { exerciseType, reps, weights });
  };

  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#43454a", "#242529", "#15181a"]}
      style={styles.container}
    >
      <View>
        <Header title="Workout" />
      </View>
      <View style={styles.pickerView}>
        <Text style={styles.label}>Select Exercise Type:</Text>
        <CustomPicker options={options} onSelect={handleSelect} />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.label}>Enter Number of Reps:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={reps}
          onChangeText={(text) => setReps(text)}
          placeholder="Enter reps"
          placeholderTextColor={"#555555"}

        />
        <Text style={styles.label}>Enter Weights (lbs):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={weights}
          onChangeText={(text) => setWeights(text)}
          placeholder="Enter weights"
          placeholderTextColor={"#555555"}
        />
      </View>

      {/* <Button
        title="Save Workout"
        onPress={saveWorkout}
        disabled={!exerciseType || !reps || !weights}
      /> */}
        <TouchableOpacity >
      <LinearGradient colors={["#f1a259", "#f1a259", "#f1a259", "#e0691a"]} start={{ x: 0, y: 5 }}  end={{ x: 0.6, y: 0.5 }}  style={styles.SaveWorkoutBtn}>
          <Text style={{ color: "#fff" }}>Save Workout</Text>
      </LinearGradient>
        </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    // backgroundColor: "#fff",
    // height:1000
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color:"#fff"
  },
  picker: {
    height: 50,
    width: "100%",
    marginBottom: 16,
  },
  input: {
    height: 46,
    borderColor: "#fff",
    borderWidth: 2,
    marginBottom: 16,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor:"#fff"
    
  },
  pickerView: {
    position: "absolute",
    width: "95%",
    zIndex: 2,
    alignSelf: "center",
    top: 180,
  },
  inputView: {
    marginTop: 170,
    width: "95%",
    alignSelf: "center",
  },
  SaveWorkoutBtn: {
    padding: 13,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "gray",
    width: "95%",
    alignSelf: "center",
    height:50
  },
});

export default WorkoutInputScreen;
