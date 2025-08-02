import { Button, StyleSheet, Text, View } from "react-native";
import { OPENSANS_REGULAR } from "../../utils/const";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const styles = StyleSheet.create({
  reviewContainer: {
    flex: 1,
    fontSize: 30,
    fontFamily: OPENSANS_REGULAR,
  },
  reviewContent: {
    marginTop: 40,
    marginHorizontal: 20,
    flex: 1,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    maxHeight: 240,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  reviewText: {
    padding: 15,
  },
});
const DetailScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const route: RouteProp<RootStackParamList, "review-detail"> = useRoute();
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewContent}>
        <Text style={styles.reviewText}>ID: {route.params?.id}</Text>
        <Text style={styles.reviewText}>Tiêu đề: {route.params?.title}</Text>
        <Text style={styles.reviewText}>
          Mô tả: {route.params?.description}
        </Text>
        <Text style={styles.reviewText}>Đánh giá: {route.params?.star} 🌟</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("home")}
        />
      </View>
    </View>
  );
};

export default DetailScreen;
