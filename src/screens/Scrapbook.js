import { View, Text } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function Scrapbook({navigation}) {

    return (
        <View style={{
            height: "100%",
            backgroundColor: '#FFFFFF',
        }}>
            <Icon onPress={() => navigation.navigate("Home")} style={{paddingTop: 50, paddingLeft: 20, }} name="arrow-left" size={35} color="black" />
            <Text style={{    color: "black",
            fontSize: 24,
            fontFamily: "Open Sans",
            textAlign: "center", 
            marginTop: 20, 
            }}>
                Reminisce Over The Times
            </Text>
        </View>
    );
}


