import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
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
    fontFamily: 'Open Sans',
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
    width: 73,
    height: 62,
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
    fontFamily: 'Open Sans',
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
    fontFamily: 'Open Sans',
    flexWrap: 'wrap',
    position: 'absolute',
  },
});

const HomePage = () => {
  const events = [1, 2, 4, 5, 6, 6, 2, 3, 12, ];

  return (
    <View style={styles.container}>
      <View style={styles.rotatedLine}></View>
      <Text style={[styles.text, styles.title]}>urLyfe</Text>
      <Text style={[styles.text, styles.subTitle, { top: 176 }]}>Upcoming Events</Text>

      <ScrollView horizontal={true} style={{ flexDirection: 'row' }}>
        {events.map((event, index) => (
          <View key={event.id} style={[styles.grayBox, { marginLeft: 16, marginRight: 16 }]}>
            <Text style={styles.upcomingEventText}>Name: {String(event.id)}</Text>
            <Text style={styles.upcomingEventText}>Name: {String(event.name)}</Text>
            <Text style={styles.upcomingEventText} numberOfLines={2}>
              Description: {event.description}
            </Text>
          </View>
        ))}
      </ScrollView>

      <Text style={[styles.text, styles.subTitle, { top: 343 }]}>Your Events</Text>
      <Text style={[styles.text, styles.label]}>explore</Text>
      <View style={[styles.grayBox, { left: 32, top: 214 }]}></View>
      <View style={[styles.grayBox, { left: 116, top: 214 }]}></View>
      <View style={[styles.grayBox, { left: 200, top: 214 }]}></View>
      <View style={[styles.grayBox, { left: 284, top: 214 }]}></View>
      <View style={[styles.grayBox, { left: 32, top: 381 }]}></View>
      <View style={[styles.yellowBox, { left: 73, top: 493 }]}></View>
      <View style={[styles.redBox, { left: 86.85, top: 493 }]}></View>
      <View style={[styles.greenBox, { left: 100.67, top: 493.90 }]}></View>
      <View style={[styles.grayBox, { left: 116, top: 381 }]}></View>
      <View style={[styles.grayBox, { left: 200, top: 381 }]}></View>
      <View style={[styles.grayBox, { left: 284, top: 381 }]}></View>
      <Text style={styles.scrapbookText}>View Your Scrapbook</Text>
      <View style={styles.whiteBox}>
        <View style={[styles.blackBox, { left: 7.88, top: 7 }]}></View>
      </View>
      <View style={styles.whiteBox}>
        <View style={[styles.blackBox, { left: 69, top: 787 }]}></View>
      </View>
      <View style={styles.containerWithBorder}></View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon name="home" size={30} color="black" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="plus" size={30} color="black" />
          <Text>Create</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="user" size={30} color="black" />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;