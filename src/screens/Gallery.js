import { View, Text } from "react-native";

export default function Gallery({route}) {

    const { buttonId } = route.params;

    return (
        <View style={{
            height: "100%",
            backgroundColor: '#FFFFFF',
        }}>
            <Text>{buttonId}</Text>
        </View>
    );
}