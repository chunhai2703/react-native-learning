import { Button, Image, StyleSheet, Text, View } from "react-native";
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
    padding: 15,
    marginTop: 40,
    marginHorizontal: 20,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    maxHeight: 400,
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
        <Text style={styles.reviewText}>
          Đánh giá: {route.params?.star}{" "}
          {route.params?.star === 1
            ? "🌟"
            : route.params?.star === 2
            ? "🌟🌟"
            : route.params?.star === 3
            ? "🌟🌟🌟"
            : route.params?.star === 4
            ? "🌟🌟🌟🌟"
            : "🌟🌟🌟🌟🌟"}
          {/* <Image
            style={{ width: 50, height: 50 }}
            source={require("../../assets/images/star.png")}
          /> */}
        </Text>

        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("home")}
        />
      </View>
    </View>
  );
};

export default DetailScreen;
