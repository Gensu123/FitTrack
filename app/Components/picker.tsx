import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
}

const CustomPicker: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text style={{ color: "#555555" }}>
          {selectedOption || "Select an option"}
        </Text>
        <Ionicons
          name={isOpen ? "caret-up" : "caret-down"}
          size={20}
          color="#555555"
        />
      </TouchableOpacity>

      {isOpen && (
        <ScrollView
          style={styles.dropdownList}
          contentContainerStyle={styles.dropdownContent}
        >
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.option}
              onPress={() => handleSelect(option)}
            >
              <Text style={{ color: "#555555" }}>{option}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  dropdownButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 10,
    backgroundColor:"#fff",
    zIndex: 1, // Ensure button stays above dropdown list
  },
  dropdownList: {
    // position: 'absolute',
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    maxHeight: 150,
    overflow: "scroll",
    // zIndex: 2,
    backgroundColor: "#fff",
  },
  dropdownContent: {
    flexGrow: 1,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default CustomPicker;
