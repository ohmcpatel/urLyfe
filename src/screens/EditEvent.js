import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const EditEvent = () => {
  const [eventName, setEventName] = React.useState(''); // State for event name
  const [about, setAbout] = React.useState(''); // State for event description
  const [dateAndTime, setDateAndTime] = React.useState(''); // State for date and time
  const [location, setLocation] = React.useState(''); // State for event location

  // Function to handle the "Save" button click
  const handleSave = () => {
    // Implement logic to save the edited event details
    // You can use the state variables (eventName, about, dateAndTime, location) to access the user input.
    // You may want to send this data to your backend or perform other actions here.
  };

  return (
    <View style={styles.editEvent}>
      <View style={styles.mdiPencil}>
        <View style={styles.vector1} />
      </View>
      <View style={styles.rectangle6} />
      <Text style={styles.nameOfEvent}>NAME OF EVENT</Text>
      <Text style={styles.about}>ABOUT</Text>
      <Text style={styles.dateAndTime}>Date and Time:</Text>
      <Text style={styles.location}>LOCATION</Text>
      <Image source={{ uri: 'https://via.placeholder.com/159x138' }} style={styles.tempImage1} />
      <View style={styles.line53} />
      <Image source={{ uri: 'https://via.placeholder.com/300x136' }} style={styles.tempImage2} />

      {/* Text inputs for event details */}
      <TextInput
        style={styles.inputField}
        placeholder="Name of Event"
        value={eventName}
        onChangeText={(text) => setEventName(text)}
      />

      <TextInput
        style={styles.inputField}
        placeholder="About"
        value={about}
        onChangeText={(text) => setAbout(text)}
      />

      <TextInput
        style={styles.inputField}
        placeholder="Date and Time"
        value={dateAndTime}
        onChangeText={(text) => setDateAndTime(text)}
      />

      <TextInput
        style={styles.inputField}
        placeholder="Location"
        value={location}
        onChangeText={(text) => setLocation(text)}
      />

      <Pressable style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    editEvent: {
        width: 390,
        height: 844,
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: 50,
        overflow: 'hidden',
      },
      bottomIconsContainer: {
        flexDirection: 'row', // Arrange the icons in a row horizontally
        justifyContent: 'space-between', // Space them out evenly
        alignItems: 'center', // Align them vertically in the center
        width: 200, // Adjust the width as needed
        left: 95, // Adjust the left position as needed
        top: 781, // Adjust the top position as needed
        position: 'absolute',
      },
      mdiPencil: {
        width: 34,
        height: 34,
        left: 331,
        top: 72,
        position: 'absolute',
      },
      vector1: {
        width: 25.50,
        height: 25.50,
        left: 4.25,
        top: 4.25,
        position: 'absolute',
        backgroundColor: 'black',
      },
      rectangle6: {
        width: 314,
        height: 148,
        left: 41,
        top: 538,
        position: 'absolute',
        backgroundColor: '#F4D58D',
        borderRadius: 20,
      },
      nameOfEvent: {
        width: 96,
        height: 73,
        left: 220,
        top: 144,
        position: 'absolute',
        color: 'black',
        fontSize: 20,
        fontWeight: '700',
        wordWrap: 'break-word',
      },
      about: {
        left: 33,
        top: 315,
        position: 'absolute',
        color: 'black',
        fontSize: 15,
        fontWeight: '600',
        wordWrap: 'break-word',
      },
      dateAndTime: {
        left: 220,
        top: 207,
        position: 'absolute',
        color: 'black',
        fontSize: 17,
        fontWeight: '600',
        wordWrap: 'break-word',
      },
      location: {
        left: 33,
        top: 501,
        position: 'absolute',
        color: 'black',
        fontSize: 15,
        fontWeight: '600',
        wordWrap: 'break-word',
      },
      tempImage1: {
        width: 159,
        height: 138,
        left: 33,
        top: 144,
        position: 'absolute',
        borderRadius: 20,
      },
      line53: {
        width: 339,
        height: 1,
        left: 28,
        top: 305,
        position: 'absolute',
        borderWidth: 1,
        borderColor: 'black',
      },
      tempImage2: {
        width: 300,
        height: 136,
        left: 48,
        top: 544,
        position: 'absolute',
        borderRadius: 20,
      },
      urLyfe: {
        left: 36,
        top: 52,
        position: 'absolute',
        color: 'black',
        fontSize: 24,
        fontWeight: '700',
        wordWrap: 'break-word',
      },
      editText: {
        width: 145,
        height: 34,
        left: 38,
        top: 93,
        position: 'absolute',
        color: '#A2AAAD',
        fontSize: 12,
        fontWeight: '600',
        wordWrap: 'break-word',
      },
      phPlusFill: {
        width: 63,
        height: 56,
        left: 167,
        top: 781,
        position: 'absolute',
      },
      vector2: {
        width: 47.25,
        height: 42,
        left: 7.88,
        top: 7,
        position: 'absolute',
        backgroundColor: 'black',
      },
      iconamoonProfileCircleBold: {
        width: 37,
        height: 36,
        left: 283,
        top: 788,
        position: 'absolute',
      },
      group: {
        width: 27.75,
        height: 28.87,
        left: 4.62,
        top: 4.50,
        position: 'absolute',
      },
      vector3: {
        width: 27.75,
        height: 27,
        left: 0,
        top: 0,
        position: 'absolute',
        borderColor: 'black',
        borderWidth: 2.5,
      },
      vector4: {
        width: 25.37,
        height: 24.75,
        left: 1.19,
        top: 4.12,
        position: 'absolute',
        backgroundColor: 'black',
      },
      line54: {
        width: 384,
        height: 1,
        left: 0,
        top: 781.02,
        position: 'absolute',
        borderWidth: 1,
        borderColor: 'black',
      },
});

export default EditEvent;
