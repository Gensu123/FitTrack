// ProfileAndSettingsScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Switch,
  Image,
  ImageBackground,
  ScrollView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../Components/header";
import { FontAwesome5 } from "@expo/vector-icons";
import ImagePickerExample from "@/components/imagePicker";
const ProfileAndSettingsScreen: React.FC = () => {
  const [userProfile, setUserProfile] = useState({
    name: "John Doe",
    age: "25",
    height: "175 cm",
    weight: "70 kg",
  });

  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    // Add more settings as needed
  });

  const handleProfileUpdate = () => {
    // Implement logic to update user profile
    console.log("Updated Profile:", userProfile);
  };

  const handleSettingsUpdate = () => {
    // Implement logic to update user settings
    console.log("Updated Settings:", settings);
  };

  const handleLogout = () => {
    // Implement logic to handle user logout
    console.log("User Logout");
    // Redirect to the login screen or perform any other logout actions
  };

  return (
    <LinearGradient
      colors={["#43454a", "#242529", "#15181a"]}
      style={styles.container}
    >
      <Header title="Profile" />
      <ScrollView style={{marginBottom:100}}>
      <View>
        <Image
          source={require("./../../assets/images/coverpic.png")}
          style={styles.coverPicture}
        />
        {/* Profile Picture */}
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ66QlieT5VtP3HE4N2Pn5OHeipGkFNo1NDLg&usqp=CAU",
          }}
          style={styles.profilePicture}
        />
      </View>
      <View style={styles.persnol_info}>
        <Text style={styles.user_name}>Nick Brew</Text>
        <View style={styles.nest_title}>
          <Text style={{ color: "gray" }}>Workout Streak:</Text>
          <Text style={{ color: "#f1a259" }}> 11 datys ago </Text>
          <FontAwesome5 name="gripfire" size={20} color="#f1a259" />
        </View>
      </View>
      <View>
        <ImagePickerExample />

        <View style={styles.gallary_view}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?cs=srgb&dl=pexels-victor-freitas-841130.jpg&fm=jpg",
            }}
            style={styles.gallaryPicture}
          />
           <Image
            source={{
              uri: "https://www.kalevfitness.com/wp-content/uploads/2022/07/pexels-victor-freitas-791763.jpg",
            }}
            style={styles.gallaryPicture}
          />
           <Image
            source={{
              uri: "https://media.istockphoto.com/id/908350288/photo/resting-from-training.jpg?s=612x612&w=0&k=20&c=tokKPFnFw6fgABSa0uyuB3QYMrW_vacSLmkzV4R6I2Y=",
            }}
            style={styles.gallaryPicture}
          />
           <Image
            source={{
              uri: "https://d39l2hkdp2esp1.cloudfront.net/img/photo/161224/161224_00_2x.jpg?20181207115506",
            }}
            style={styles.gallaryPicture}
          />
        
        </View>
      </View>
          </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  profileSection: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  settingsSection: {
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  toggleSwitch: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }], // Adjust the size of the switch if needed
  },
  coverPicture: {
    // flex: 1,
    // resizeMode: 'cover',
    // justifyContent: 'center',
    width: "100%",
    height: 120,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#f1a259",
    alignSelf: "center",
    position: "absolute",
    bottom: -40,
  },
  profileInfoContainer: {
    padding: 20,
    // backgroundColor: 'white',
    marginTop: -50, // Adjust this value based on your design
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  persnol_info: {
    marginTop: 50,
    alignSelf: "center",
  },
  user_name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
  },
  nest_title: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  gallaryPicture: {
    width: 180,
    height: 180,
    margin:5

  },
  gallary_view: {
    flexDirection:"row",
    flexWrap:"wrap",
    alignSelf:"center",
    justifyContent:"center",
    marginTop:20

  },
});

export default ProfileAndSettingsScreen;
