import { Button, Text, View } from "react-native";

const HomeScreen = (props: any) => {
  const { navigation } = props;
  return (
    <View>
      <Text style={{ fontSize: 40 }}>Oceanic Home Screen</Text>
      <Button
        title="View Details"
        onPress={() => navigation.navigate("review-detail")}
      />
    </View>
  );
};

export default HomeScreen;
