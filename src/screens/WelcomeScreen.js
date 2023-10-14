import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../images/welcome.png')} style={styles.image} />
      <Image source={require('../images/slogan.png')} style={styles.imageText} />
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Sign Up')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Vertically align content in the center
    alignItems: 'center',
    paddingBottom: 220,
  },
  image: {
    width: '100%',
    height: '100%',
    marginRight: 20,
  },
  imageText: {
    width: '95%',
    height: '30%',
    marginLeft: 30,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20, // Add some space between the image and the button
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 120,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
