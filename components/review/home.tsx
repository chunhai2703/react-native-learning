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
import CreateModal from "./create.modal";
import AntDesign from "@expo/vector-icons/AntDesign";

export interface IReview {
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
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    
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
  const [modalVisible, setModalVisible] = useState(false);
  const addNew = (item: IReview) => {
    setReviews([...reviews, item]);
  };

  const handleDelete = (id: number) => {
    if (!id) return;
    setReviews(reviews.filter((item) => item.id !== id));
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 15,
        }}
      >
        <Text style={{ fontSize: 30 }}>Review List: </Text>
        <View>
          <AntDesign
            name="pluscircleo"
            size={30}
            color="orange"
            onPress={() => setModalVisible(true)}
          />
        </View>
      </View>

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
                  <AntDesign
                    name="delete"
                    size={24}
                    color="red"
                    onPress={() => handleDelete(item.id)}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <CreateModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        addNew={addNew}
      />
    </View>
  );
};

export default HomeScreen;
