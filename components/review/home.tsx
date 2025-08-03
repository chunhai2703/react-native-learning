import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface IReview {
  id: number;
  title: string;
  description: string;
  star: number;
}

const styles = StyleSheet.create({
  reviewItem: {
    padding: 15,
    backgroundColor: "#73d2f1ff",
    margin: 15,
  },
});
const HomeScreen = (props: any) => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [reviews, setReviews] = useState<IReview[]>([
    {
      id: 1,
      title: "React Native",
      description: "Học siêu dễ luôn",
      star: 5,
    },
    {
      id: 2,
      title: "Java",
      description: "Học siêu cuốn",
      star: 4,
    },
  ]);
  return (
    <View>
      <Text style={{ fontSize: 30, padding: 15 }}>Review List: </Text>
      <View>
        <FlatList
          data={reviews}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("review-detail", item)}
              >
                <View style={styles.reviewItem}>
                  <Text>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
