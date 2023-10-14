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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

function Login({ navigation }) {
  const [value, setValue] = useState({
    email: "",
    password: "",
    error: "",
  });

  async function signIn() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
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
       <Image source={require('../images/word2.png')} style={styles.word2} />

        <View style={styles.inputContainer}>
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
            <Icon style={styles.icon} name="lock" size={18} color="white" />
            <TextInput
              placeholder="Password"
              style={styles.input}
              onChangeText={(text) => setValue({ ...value, password: text })}
              secureTextEntry={true}
            />
          </View>
        </View>

        <Pressable style={styles.button} onPress={signIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>

        <Text style={styles.infoText2}>Already have an account?</Text>
        <Text style={styles.signUpText}>
          Don't Have an account?{" "}
          <Text style={styles.signUpLink} onPress={() => navigation.navigate("Sign Up")}>
            Sign Up
          </Text>
        </Text>
      </View>
      <Image source={require('../images/squig2.png')} style={styles.squig2} />
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    width: 390,
    height: 844,
    backgroundColor: 'white',
    borderRadius: 50,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 2,
  },
  content: {
    position: 'relative',
    top: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'rgba(0, 0, 0, 0.55)',
    fontSize: 12,
    fontWeight: '600',
  },
  inputContainer: {
    marginTop: 1,
  },
  inputField: {
    width: 334,
    height: 52,
    backgroundColor: 'rgba(112, 141, 129, 0.83)',
    borderRadius: 10,
    marginVertical: 8,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
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
    color: 'white',
  },
  button: {
    backgroundColor: "#001427",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    paddingVertical: 18,
    paddingHorizontal: 145,
    margin: 4,
    marginBottom: 19,
    marginTop: 35,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  signUpText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    marginRight: 135,
  },
  signUpLink: {
    color: 'rgba(112, 141, 129, 0.83)',
  },
  word2: {
    resizeMode: "contain",
    height: 120,
  },
  squig2: {
    marginTop: 280,
    marginLeft: 30,
    resizeMode: "contain",
    height: 180,
  },
  infoText2: {
    color: "#CBD4D8",
    marginBottom: 20,
  }
});
