import { Button, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={{ fontSize: 40 }}>Oceanic Home Screen</Text>
      <Button title="View Details" onPress={() => alert("me")} />
    </View>
  );
};

export default HomeScreen;
