// WorkoutHistoryScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DataTable } from "react-native-paper";
import Modal from "react-native-modal";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import Header from "../Components/header";

interface Workout {
  id: string;
  date: string;
  exercise: string;
  reps: number;
  weight: number;
  [key: string]: string | number; // Index signature to allow any string key
}

const WorkoutHistoryScreen: React.FC = () => {
  const navigation: any = useNavigation();

  // Sample workout data
  const initialWorkoutHistoryData: Workout[] = [
    {
      id: "1",
      date: "2024-01-15",
      exercise: "Bench Press",
      reps: 10,
      weight: 100,
    },
    { id: "2", date: "2024-01-14", exercise: "Squats", reps: 12, weight: 150 },
    {
      id: "3",
      date: "2024-01-14",
      exercise: "Deadlifts",
      reps: 8,
      weight: 200,
    },
    {
      id: "3",
      date: "2024-01-14",
      exercise: "Deadlifts",
      reps: 8,
      weight: 200,
    },
    {
      id: "3",
      date: "2024-01-14",
      exercise: "Deadlifts",
      reps: 8,
      weight: 200,
    },
    {
      id: "3",
      date: "2024-01-14",
      exercise: "Deadlifts",
      reps: 8,
      weight: 200,
    },
    {
      id: "3",
      date: "2024-01-14",
      exercise: "Deadlifts",
      reps: 8,
      weight: 200,
    },

    // Add more workout data as needed
  ];

  const [workouts, setWorkouts] = useState<Workout[]>(
    initialWorkoutHistoryData
  );
  const [sortedBy, setSortedBy] = useState<string | null>(null);
  const [filterByExercise, setFilterByExercise] = useState<string | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [newWorkout, setNewWorkout] = useState<any>({
    id: "",
    date: "",
    exercise: "",
    reps: 0,
    weight: 0,
  });

  const handleSort = (column: string) => {
    const sortedWorkouts = [...workouts].sort((a, b) => {
      if (column === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        // Use the index signature to access dynamic keys
        return (b[column] as any) - (a[column] as any);
      }
    });

    setWorkouts(sortedWorkouts);
    setSortedBy(column);
  };

  const handleFilter = (exercise: string | null) => {
    const filteredWorkouts = initialWorkoutHistoryData.filter((workout) =>
      exercise ? workout.exercise === exercise : true
    );

    setWorkouts(filteredWorkouts);
    setFilterByExercise(exercise);
  };

  const resetFilters = () => {
    setWorkouts(initialWorkoutHistoryData);
    setSortedBy(null);
    setFilterByExercise(null);
  };

  const handleAddWorkout = () => {
    // Add logic to handle adding a new workout to the data
    // For simplicity, this example just logs the new workout
    console.log("New Workout:", newWorkout);

    // You may want to add the new workout to your workouts state
    // setWorkouts([...workouts, newWorkout]);

    // Close the modal
    toggleModal();
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <LinearGradient
      colors={["#43454a", "#242529", "#15181a"]}
      style={styles.container}
    >
      
      <View>
        {/* Add New Workout Modal */}
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={toggleModal}
          onBackButtonPress={toggleModal}
          style={styles.modal}
        >
          <LinearGradient
            colors={["#43454a", "#242529", "#15181a"]}
            style={styles.modalContent}
          >
            {/* <View style={styles.modalContent}> */}
            <View style={styles.modal_top}>
              <Text style={styles.modalTitle}>Add New Workout</Text>
              <TouchableOpacity onPress={toggleModal}>
                <Entypo name="cross" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Date"
              value={newWorkout.date}
              onChangeText={(text) =>
                setNewWorkout({ ...newWorkout, date: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Exercise"
              value={newWorkout.exercise}
              onChangeText={(text) =>
                setNewWorkout({ ...newWorkout, exercise: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Reps"
              value={newWorkout}
              onChangeText={(text) =>
                setNewWorkout({ ...newWorkout, reps: parseInt(text, 10) })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Weight"
              value={newWorkout}
              onChangeText={(text) =>
                setNewWorkout({ ...newWorkout, weight: parseInt(text, 10) })
              }
            />
            <TouchableOpacity onPress={handleAddWorkout}>
              <LinearGradient
                colors={["#f1a259", "#f1a259", "#f1a259", "#e0691a"]}
                style={styles.add_workout_btn}
              >
                <Text style={{ color: "#fff", fontWeight: "500" }}>
                  Add New Workout
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            {/* </View> */}
          </LinearGradient>
        </Modal>
        <Header title="History" />

        <ScrollView
          style={{ marginBottom: 70 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.filterSortContainer}>

            <Text style={styles.filterSortText}>Filter by Exercise:</Text>
            <TextInput
              style={styles.inputFilter}
              placeholder="Exercise"
              value={filterByExercise || ""}
              onChangeText={(text) => setFilterByExercise(text)}
            />
            <View style={styles.aply_btns}>
              <TouchableOpacity
                onPress={() => handleFilter(filterByExercise)}
                style={styles.filter_btn}
              >
                <Text style={{ color: "#e0691a", fontSize: 15 }}>Apply</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={resetFilters}
                style={styles.filter_btn}
              >
                <Text style={{ color: "#e0691a", fontSize: 15 }}>Reset</Text>
              </TouchableOpacity>
            </View>
          </View>

          <DataTable style={styles.table}>
              <LinearGradient
                colors={["#f1a259", "#f1a259", "#f1a259", "#e0691a"]}
              >
            <DataTable.Header style={styles.tableHeader}>
                <TouchableOpacity onPress={() => handleSort("date")}>
                  <DataTable.Title>
                    Date {sortedBy === "date" && "▼"}
                  </DataTable.Title>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSort("exercise")}>
                  <DataTable.Title>
                    Exercise {sortedBy === "exercise" && "▼"}
                  </DataTable.Title>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSort("reps")}>
                  <DataTable.Title>
                    Reps {sortedBy === "reps" && "▼"}
                  </DataTable.Title>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSort("weight")}>
                  <DataTable.Title>
                    Weight {sortedBy === "weight" && "▼"}
                  </DataTable.Title>
                </TouchableOpacity>
            </DataTable.Header>
              </LinearGradient>

            <FlatList
              data={workouts}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("WorkoutDetails", { workout: item })
                  }
                >
                  <DataTable.Row style={styles.tableRow}>
                    <DataTable.Cell>{item.date}</DataTable.Cell>
                    <DataTable.Cell>{item.exercise}</DataTable.Cell>
                    <DataTable.Cell>{item.reps}</DataTable.Cell>
                    <DataTable.Cell>{item.weight}</DataTable.Cell>
                  </DataTable.Row>
                </TouchableOpacity>
              )}
            />
          </DataTable>
          <TouchableOpacity onPress={toggleModal}>
            <LinearGradient
              colors={["#f1a259", "#f1a259", "#f1a259", "#e0691a"]}
              style={styles.add_btn}
            >
              <Text style={{ color: "#fff", fontWeight: "500" }}>
                Add New Workout
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // paddingTop: 60,
  },
  table: {
    marginTop: 16,
    backgroundColor: "#ffffff",
    borderRadius: 2,
  },
  tableHeader: {
    borderTopWidth: 1,
    borderTopColor: "#f1a259",
    justifyContent: "space-around",
  },
  tableRow: {
    borderBottomWidth: 1,
    borderBottomColor: "#f1a259",
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 50,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  inputFilter: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: "50%",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  filterSortContainer: {
    // flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 30,
  },
  filterSortText: {
    marginRight: 8,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  add_btn: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  add_workout_btn: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  filter_btn: {
    borderWidth: 1,
    padding: 4,
    borderColor: "#e0691a",
    borderRadius: 4,
  },
  aply_btns: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "48%",
  },
  modal_top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  title:{
    color:"#fff"
  }
});

export default WorkoutHistoryScreen;
