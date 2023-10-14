import React, { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet, Pressable, Button } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
// import * as ImagePicker from "expo-image-picker";

export default function CreateEvent() {
  const [value, setValue] = useState({
    eventname: "",
    date: "",
    time: "",
    location: "",
    description: "",
    selectedImage: null,
  });

  const navigation = useNavigation();

  const Publish = () => {
    // Implement your logic for publishing the event here
  };

//   const selectImage = async () => {
//     const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

//     if (permissionResult.granted === false) {
//       alert("Permission to access photos is required!");
//       return;
//     }

//     const result = await ImagePicker.launchImageLibraryAsync();

//     if (!result.cancelled) {
//       setValue({ ...value, selectedImage: result.uri });
//     }
//   };

//   const editImage = () => {
//     selectImage(); // Reopen the image picker to edit the image
//   };

  return (
    <View style={styles.container}>
      <View style={{display: "flex", flexDirection: "row"}}>
        <View style={{display: "flex", flexDirection: "column"}}>
          <Text style={styles.title}>urLyfe</Text>
          <Text style={styles.subTitle}>Create Event</Text>
          <Text style={styles.info}>Tell us about the event you want to host! This information will be public for attendees to view.</Text>
        </View>
        <View style={styles.imageContainer}>
          <Pressable >
          {/* onPress={selectImage} */}
            {value.selectedImage ? (
              <Image source={{ uri: value.selectedImage }} style={styles.selectedImage} />
            ) : (
              <Image
                source={require("../images/squig1.png")} // You can replace this with your default image
                style={styles.selectedImage}
              />
            )}
          </Pressable>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputField}>
          <Icon name="account-edit" size={18} color="white" style={styles.icon} />
          <TextInput
            placeholder="Name of Event"
            value={value.eventname}
            style={styles.input}
            onChangeText={(text) => setValue({ ...value, eventname: text })}
          />
        </View>
        <View style={styles.inputField}>
          <Icon name="calendar" size={18} color="white" style={styles.icon} />
          <TextInput
            placeholder="Date"
            value={value.date}
            style={styles.input}
            onChangeText={(text) => setValue({ ...value, date: text })}
          />
        </View>
        <View style={styles.inputField}>
          <Icon name="clock" size={18} color="white" style={styles.icon} />
          <TextInput
            placeholder="Time"
            value={value.time}
            style={styles.input}
            onChangeText={(text) => setValue({ ...value, time: text })}
          />
        </View>
        <View style={styles.inputField}>
          <Icon name="map-marker" size={18} color="white" style={styles.icon} />
          <TextInput
            placeholder="Location"
            value={value.location}
            style={styles.input}
            onChangeText={(text) => setValue({ ...value, location: text })}
          />
        </View>
        <View style={styles.inputField}>
          <Icon name="text" size={18} color="white" style={styles.icon} />
          <TextInput
            placeholder="Description"
            value={value.description}
            style={styles.input}
            onChangeText={(text) => setValue({ ...value, description: text })}
          />
        </View>

        <Pressable style={styles.button} onPress={Publish}>
          <Text style={styles.buttonText}>Publish</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingTop: 20,
  },
  imageContainer: {
    alignItems: "flex-end",
    margin: 20,
  },
  selectedImage: {
    width: 150,
    height: 150,
    borderRadius: 20,
    marginTop: 40,
  },
  inputContainer: {
    marginTop: 20,
  },
  inputField: {
    width: 334,
    height: 52,
    backgroundColor: "rgba(112, 141, 129, 0.83)",
    borderRadius: 10,
    marginVertical: 8,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  icon: {
    marginRight: 10,
  },
  info: {
    marginLeft: 30,
    marginTop: 15,
    width: 150,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "black",
    marginBottom: 10,
    marginLeft: 30,
    marginTop: 45,
  },
  subTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#F4D58D",
    marginLeft: 30,
  },
  button: {
    backgroundColor: "#001427",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    paddingVertical: 18,
    paddingHorizontal: 120,
    margin: 4,
    marginBottom: 19,
    marginTop: 35,
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },
});
