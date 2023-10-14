import React from 'react';
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Scrapbook({ navigation }) {
  const images = [
    require('../images/squig1.png'), // Replace with your image file paths
    require('../images/squig1.png'), // Replace with your image file paths
    require('../images/squig1.png'), // Replace with your image file paths
    require('../images/squig1.png'), // Replace with your image file paths
    require('../images/squig1.png'), // Replace with your image file paths
    require('../images/squig1.png'), // Replace with your image file paths
    require('../images/squig1.png'), // Replace with your image file paths
    require('../images/squig1.png'), // Replace with your image file paths
    require('../images/squig1.png'), // Replace with your image file paths
    // Add more images here
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Icon
        onPress={() => navigation.navigate('Home')}
        style={{ paddingTop: 50, paddingLeft: 20 }}
        name="arrow-left"
        size={35}
        color="black"
      />
      <Text
        style={{
          color: 'black',
          fontSize: 24,
          textAlign: 'center',
          marginTop: 20,
        }}
      >
        Reminisce Over The Times
      </Text>
      <ScrollView style={{ marginTop: 20 }}>
        <View style={styles.imageContainer}>
          {images.map((image, index) => (
            <TouchableOpacity onPress={() => navigation.navigate('Memories', { buttonId: "udhiewhdi7y8" })}>
                <View key={index} style={styles.imageWrapper}>
                    <Image source={image} style={styles.image} />
                </View>
            </TouchableOpacity>
 
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  imageWrapper: {
    width: 150, // Adjust the width as needed for your design
    height: 150, // Ensure the width and height are the same for square images
    margin: 10, // Adjust the margin for spacing between images
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10, // Add rounded corners if desired
  },
});
