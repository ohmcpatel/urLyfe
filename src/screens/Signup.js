import React, { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet, Pressable } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


const auth = getAuth();

function Signup({ navigation }) {
  const [value, setValue] = useState({
    fullName: "",  // Add fullName and username fields
    username: "",
    email: "",
    password: "",
    error: "",
  });

  async function signUp() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate("Sign In");
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require('../images/squig1.png')} style={styles.squig1} />

      <View style={styles.inputContainer}>
        <View style={styles.inputField}>
         <Icon style={styles.icon} name="account-edit" size={18} color="white" />
          <TextInput
            placeholder="Full Name"
            value={value.fullName}
            style={styles.input}
            onChangeText={(text) => setValue({ ...value, fullName: text })}
          />
        </View>

        <View style={styles.inputField}>
          <Icon style={styles.icon} name="account" size={18} color="white" />
          <TextInput
            placeholder="Username"
            value={value.username}
            style={styles.input}
            onChangeText={(text) => setValue({ ...value, username: text })}
          />
        </View>

        <View style={styles.inputField}>
          <Icon style={styles.icon} name="email" size={18} color="white" />
          <TextInput
            placeholder="Email"
            value={value.email}
            style={styles.input}
            onChangeText={(text) => setValue({ ...value, email: text })}
          />
        </View>

        <View style={styles.inputField}>
          <Icon style={styles.icon} name="key" size={18} color="white" />
          <TextInput
            placeholder="Password"
            style={styles.input}
            onChangeText={(text) => setValue({ ...value, password: text })}
            secureTextEntry={true}
          />
        </View>
      </View>

      <Pressable style={styles.button} onPress={signUp}>
        <Text style={styles.buttonText}>Create Account</Text>
      </Pressable>

      <Text style={styles.infoText}>Already have an account?</Text>
      <Text style={styles.signUpText}>
        Have an account?{" "}
        <Text
          style={styles.signUpLink}
          onPress={() => navigation.navigate("Log In")}
        >
          Sign In
        </Text>
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
  squig1: {
    marginLeft: 80,
    resizeMode: "contain",
    height: 700,
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
  },
  signUpText: {
    color: "white",
    fontSize: 12,
    fontFamily: "Poppins",
    textAlign: "center",
    marginRight: 100, 
    marginTop: 10, 

  },
  infoText: {
    color: "#CBD4D8"
  },
  signUpLink: {
    color: "rgba(112, 141, 129, 0.83)",
  },
  icon: {
    padding: 10,
  },
});

export default Signup;
