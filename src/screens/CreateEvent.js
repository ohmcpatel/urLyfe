import React, { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet, Pressable } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function CreateEvent({navigation}) {
    const [value, setValue] = useState({
        eventname: "",  // Add fullName and username fields
        date: "",
        time: "",
        location: "",
        description: "",
      });

    const Publish = () => {
        
    }

return (
  <View style={styles.container}>
    <View style={{
      height: "100%",
      backgroundColor: '#FFFFFF',
    }}>
        <Text>Create Event</Text>
        <Text>Tell us about the event you want to host! This information will be public for attendees to view.</Text>
    </View>
    <View style={styles.inputContainer}>
      <View style={styles.inputField}>
       <Icon style={styles.icon} name="name-edit" size={18} color="white" />
        <TextInput
          placeholder="Name of Event"
          value={value.eventname}
          style={styles.input}
          onChangeText={(text) => setValue({ ...value, eventname: text })}
        />
      </View>

      <View style={styles.inputField}>
        <Icon style={styles.icon} name="date" size={18} color="white" />
        <TextInput
          placeholder="Date"
          value={value.datee}
          style={styles.input}
          onChangeText={(text) => setValue({ ...value, date: text })}
        />
      </View>

      <View style={styles.inputField}>
        <Icon style={styles.icon} name="time" size={18} color="white" />
        <TextInput
          placeholder="Time"
          value={value.time}
          style={styles.input}
          onChangeText={(text) => setValue({ ...value, time: text })}
        />
      </View>

      <View style={styles.inputField}>
        <Icon style={styles.icon} name="location" size={18} color="white" />
        <TextInput
          placeholder="Location"
          style={styles.input}
          onChangeText={(text) => setValue({ ...value, location: text })}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputField}>
        <Icon style={styles.icon} name="description" size={18} color="white" />
        <TextInput
          placeholder="Description"
          style={styles.input}
          onChangeText={(text) => setValue({ ...value, description: text })}
          secureTextEntry={true}
        />
      </View>
    </View>
    <Text style={styles.editProfile}>Description</Text>
      <TextInput
        style={styles.input}
        value={value.description}
        onChangeText={(text) => setDescription(text)}
      />

    <Pressable style={styles.button} onPress={Publish}>
      <Text style={styles.buttonText}>Publish</Text>
    </Pressable>
 
      <Text>
        onPress={() => navigation.navigate("Home")}
    </Text>
  </View>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -420, // Adjust this value to shift content up
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    overflow: "hidden",
  },
  title: {
    color: "rgba(0, 0, 0, 0.55)",
    fontSize: 12,
    fontFamily: "Poppins",
    fontWeight: "600",
  },
  inputContainer: {
    marginTop: -130,
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
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: "white",
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
    fontFamily: "Poppins",
    fontWeight: "600",
    textAlign: "center",
  }


});

