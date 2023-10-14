import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Image, Pressable } from "react-native";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Memories = ({ route }) => {
  const { buttonId } = route.params;
  const navigation = useNavigation()
    console.log(navigation)
  const photos = [
    { id: 1, url: require("../images/welcome.png") },
    { id: 2, url: require("../images/squig1.png") },
    { id: 3, url: require("../images/friends.jpeg") },
  ];




  return (
    
    <View style={styles.container}>
     <Icon
        onPress={() => navigation.navigate('Scrapbook')}
        style={{ paddingTop: 50, paddingLeft: 20 }}
        name="arrow-left"
        size={35}
        color="black"
      />
      <Text style={styles.title}>Your Memories</Text>
      {/* <Swiper
        style={styles.swiper}
        showsPagination={false}
      >
        {photos.map((photo, index) => (
          <View key={photo.id} style={styles.card}>
            <Image source={photo.url} style={styles.image} />
          </View>
        ))}
      </Swiper> */}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} title="Gallery" onPress={() => navigation.navigate("Gallery", {buttonId: buttonId})} >
            <Text style={{color:"white", fontWeight: "bold"}}>Gallery</Text>
        </Pressable>
        <Pressable style={styles.button} title="Video" onPress={() => navigation.navigate("Video")}>
            <Text style={{color:"white", fontWeight: "bold"}}>Video</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 20,
    marginTop: 70, 
  },
  swiper: {
    flex: 1,
  },
  card: {
    marginTop: -100,
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    margin: 10,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    borderRadius: 10,
    width: 270, 
    alignSelf: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    gap: 10, 
  },
  button: {
    backgroundColor: "#D76260",
    marginBottom: 100,
    paddingHorizontal: 45,
    paddingVertical: 18,
    borderRadius: 10,
  }
});

export default Memories;
