import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the FontAwesome icon set

const styles = StyleSheet.create({
  // Container styles
  container: {
    width: 390,
    height: 844,
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: 50,
    overflow: 'hidden',
  },
  rotatedLine: {
    width: 676.05,
    height: 0,
    left: 187,
    top: 844,
    position: 'absolute',
    transform: [{ rotate: '89.32deg' }],
    transformOrigin: '0 0',
    borderColor: 'black',
    borderWidth: 3,
  },

  // Text styles
  text: {
    color: 'black',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    left: 38,
    top: 65,
    position: 'absolute',
  },
  subTitle: {
    fontSize: 17,
    fontWeight: '600',
    left: 32,
    position: 'absolute',
    flexWrap: 'wrap',
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: 'rgba(191, 6, 3, 0.63)',
    left: 40,
    top: 106,
    position: 'absolute',
    flexWrap: 'wrap',
  },

  // Box styles
  grayBox: {
    width: 110,
    height: 110,
    position: 'absolute',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
  },
  yellowBox: {
    width: 227,
    height: 214,
    position: 'absolute',
    backgroundColor: 'rgba(244, 213, 141, 0.72)',
    borderRadius: 10,
  },
  redBox: {
    width: 226.58,
    height: 214.43,
    left: 86.85,
    top: 493,
    position: 'absolute',
    transform: [{ rotate: '3.02deg' }],
    transformOrigin: '0 0',
    backgroundColor: 'rgba(191, 6, 3, 0.63)',
    borderRadius: 10,
  },
  greenBox: {
    width: 226.59,
    height: 214.42,
    left: 100.67,
    top: 493.90,
    position: 'absolute',
    transform: [{ rotate: '6.04deg' }],
    transformOrigin: '0 0',
    backgroundColor: 'rgba(112, 141, 129, 0.83)',
    borderRadius: 10,
  },

  // Special text styles
  scrapbookText: {
    fontSize: 15,
    fontStyle: 'italic',
    fontWeight: '600',
    color: 'white',
    flexWrap: 'wrap',
    width: 162,
    height: 23,
    left: 111,
    top: 568,
    position: 'absolute',
  },

  // Black and white boxes
  blackBox: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'black',
    position: 'absolute',
  },
  whiteBox: {
    width: 57,
    height: 56,
    position: 'absolute',
  },

  // Container with border
  containerWithBorder: {
    width: 384,
    height: 0,
    left: 2,
    top: 776.02,
    position: 'absolute',
    borderColor: 'black',
    borderWidth: 1,
  },

  // Button container and individual buttons
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderColor: '#ccc',
    position: 'absolute',
    bottom: 5,
    left: 5,
    right: 5,
    backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
  },
  // Special text styles
  upcomingEventText: {
    color: 'black',
    flexWrap: 'wrap',
    position: 'absolute',
    padding: 10,
  },
  clickableArea: {
    position: 'absolute',
    left: 73,
    top: 0,
    width: 400, // Adjust the width to encompass the entire section
    height: 174, // Adjust the height to encompass the entire section
  },
  scrapButton: {
    resizeMode: "contain",
    height: 200,
    marginTop: -300,
    marginBottom: 100,
    marginLeft: -72,
  },
  squig3: {
    resizeMode: "contain",
    height: 140,
    marginBottom: -140,
    marginLeft: 10
  }
});

const HomePage = ({navigation}) => {
  const events = [
    {
      id: 1,
      name: 'BBQ',
      description: 'Description for Event 1',
      date: '2023-10-20',
      location: 'Event Location 1',
    },
    {
      id: 2,
      name: 'PARTY',
      description: 'Description for Event 2',
      date: '2023-11-05',
      location: 'Event Location 2',
    },
    {
      id: 3,
      name: 'Funtastic super cool awesome time to be alive',
      description: 'Description for Event 3',
      date: '2023-12-15',
      location: 'Event Location 3',
    },
  ];

  return (
    <View style={styles.container}>
       <Image source={require('../images/squig3.png')} style={styles.squig3} />
      <Text style={[styles.text, styles.title]}>urLyfe</Text>
      <Text style={[styles.text, styles.subTitle, { top: 176 }]}>Upcoming Events</Text>

      <ScrollView horizontal={true} style={{ marginTop: 210, flexDirection: 'row', marginHorizontal: 30 }}>
  {events.map(function (event, index) {
    return (
      <View>
      <View key={index} style={[styles.grayBox, { marginRight: 16 }]}>
        <Text style={styles.upcomingEventText}>{String(event.name)}</Text>
      </View>
      <View style={{ backgroundColor: "transparent", marginLeft: 120, width: 0 }}></View>
      </View>
    )}
  )}
</ScrollView>

      <Text style={[styles.text, styles.subTitle, { top: 343 }]}>Your Events</Text>

      <ScrollView horizontal={true} style={{ marginTop: -300, flexDirection: 'row', marginHorizontal: 30 }}>
  {events.map(function (event, index) {
    return (
      <View>
      <View key={index} style={[styles.grayBox, { marginRight: 16 }]}>
        <Text style={styles.upcomingEventText}>{String(event.name)}</Text>
      </View>
      <View style={{ backgroundColor: "transparent", marginLeft: 120, width: 0 }}></View>
      </View>
    )}
  )}
</ScrollView>
      <Text style={[styles.text, styles.label]}>explore</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Scrapbook")}>
        <Image source={require('../images/scrapButton.png')} style={styles.scrapButton} />
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;