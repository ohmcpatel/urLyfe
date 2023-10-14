import React, { useState } from "react";
// import logo from "../../assets/logo.png";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  Text,
  View,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

function Signup({ navigation }) {
  const [value, setValue] = useState({
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
      <View style={styles.content}>
        <Image
          source={logo}
          style={{ width: 100, height: 100, alignSelf: "center" }}
        />
        <Text style={styles.title}>Sign Up</Text>

        <View style={styles.inputContainer}>
          <View style={styles.inputField}>
            <Icon style={styles.icon} name="email" size={18} color="gray" />
            <TextInput
              placeholder="Email"
              value={value.email}
              style={styles.input}
              onChangeText={(text) => setValue({ ...value, email: text })}
            />
          </View>

          <View style={styles.inputField}>
            <Icon style={styles.icon} name="lock" size={18} color="gray" />
            <TextInput
              placeholder="Password"
              style={styles.input}
              onChangeText={(text) => setValue({ ...value, password: text })}
              secureTextEntry={true}
            />
          </View>
        </View>

        <Pressable style={styles.button} onPress={signUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>

        <Text style={styles.signUpText}>
          Have an account?{" "}
          <Text
            style={styles.signUpLink}
            onPress={() => navigation.navigate("Sign In")}
          >
            Sign In
          </Text>
        </Text>
      </View>
    </View>
  );
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 844,
    backgroundColor: "white",
    borderRadius: 50,
    overflow: "hidden",
    alignItems: "center",
  },
  content: {
    position: "relative",
    top: 239,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "rgba(0, 0, 0, 0.55)",
    fontSize: 12,
    fontFamily: "Poppins",
    fontWeight: "600",
  },
  inputContainer: {
    marginTop: 1,
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
  },
  icon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: "gray",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    margin: 4,
  },
  buttonText: {
    color: "black",
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
  },
  signUpLink: {
    color: "blue",
  },
});
