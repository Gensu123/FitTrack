import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from '@expo/vector-icons';

export default function ImagePickerExample() {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ marginTop: 20,}}>
      <View style={{  marginTop: 20 }}>
      <TouchableOpacity onPress={pickImage}  style={styles.uploadBtn}>
      <Entypo name="camera" size={15} color="gray" />
        <Text style={{ color: "gray",marginTop:2,marginLeft:4 }}>Pick an image</Text>

      </TouchableOpacity>
      </View>
      {/* {image && (
        <View style={styles.gallaryView}>
          <Text>Gallary</Text>
          <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
        </View>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  uploadBtn: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width:"60%",
    alignItems:"center",
    alignSelf:"center",
    height:40,
    borderColor:"gray",
    flexDirection:"row",
    justifyContent:"center",
    
    
  },
  gallaryView:{
    marginLeft:10
  }
});
