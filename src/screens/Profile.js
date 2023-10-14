import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {
  const [name, setName] = useState('Name');
  const [email, setEmail] = useState('example@example.com');
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/157x150');



  const handleSaveProfile = () => {
    // Handle saving the profile data here
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <Image
          style={styles.ellipse3}
          source={{ uri: profileImage }}
        />
      </TouchableOpacity>
      <Text style={styles.editProfile}>Edit Profile</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />


      <Button title="Save Profile" onPress={handleSaveProfile} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  ellipse3: {
    width: 157,
    height: 150,
    alignSelf: 'center',
    borderRadius: 9999,
  },
  editProfile: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 24,
    fontFamily: 'Open Sans',
    fontWeight: '700',
  },
  input: {
    fontSize: 20,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
  },
  dateOfBirth: {
    fontSize: 20,
    marginTop: 10,
  },
  countryRegion: {
    fontSize: 20,
    marginTop: 10,
  },
});

export default Profile;
