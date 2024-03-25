import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../Components/header";

type FilterOption = "weight" | "reps"; // Add more filter options as needed

const ProgressGraphScreen: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>("weight"); // Default filter

  // Dummy data for demonstration purposes
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [50, 60, 45, 70, 65, 80],
      },
    ],
  };

  const handleFilterChange = (filter: FilterOption) => {
    setSelectedFilter(filter);
    // Fetch and update data based on the selected filter
    // You can implement API calls or other logic here
  };

  return (
    <LinearGradient
      colors={["#43454a", "#242529", "#15181a"]}
      style={styles.container}
    >
      <Header title="Progress Graph" />

      <ScrollView>
        {/* Data Filters */}
        <View style={styles.filterContainer}>
          <TouchableOpacity onPress={() => handleFilterChange("weight")}>
            <LinearGradient
              colors={
                selectedFilter === "weight"
                  ? ["#f1a259", "#f1a259", "#f1a259", "#e0691a"]
                  : ["#fff", "#fff"]
              }
              start={{ x: 0, y: 5 }}
              end={{ x: 0.6, y: 0.5 }}
              style={[
                styles.filterButton,
                selectedFilter === "weight" && styles.selectedFilter,
              ]}
            >
              <Text style={selectedFilter === "weight" && { color: "#fff" }}>
                Weight
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleFilterChange("reps")}>
            <LinearGradient
              colors={
                selectedFilter === "reps"
                  ? ["#f1a259", "#f1a259", "#f1a259", "#e0691a"]
                  : ["#fff", "#fff"]
              }
              start={{ x: 0, y: 5 }}
              end={{ x: 0.6, y: 0.5 }}
              style={[
                styles.filterButton,
                selectedFilter === "reps" && styles.selectedFilter,
              ]}
            >
              <Text style={selectedFilter === "reps" && { color: "#fff" }}>
                Reps
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          {/* Add more filter options as needed */}
        </View>

        {/* Line Chart */}
        <View style={styles.chartContainer}>
          <LineChart
            data={data}
            width={360}
            height={270}
            // yAxisSuffix="kg"
            yAxisSuffix={selectedFilter === "weight" ? "kg" : ""}
            chartConfig={{
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(238,138,62, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            bezier
            style={styles.chart}
          />
        </View>

        {/* Additional UI elements can be added here */}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 40,
    color: "#fff",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
    marginTop:30
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  selectedFilter: {
    backgroundColor: "#ddd",
  },
  chartContainer: {
    // alignItems: "center",
    marginBottom: 20,
    marginTop: 50,
  },
  chart: {
    marginVertical: 8,
    // borderRadius: 16,
  },
});

export default ProgressGraphScreen;
