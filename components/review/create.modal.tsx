import {
  Alert,
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { IReview } from "./home";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  groupInput: {
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

interface IProps {
  modalVisible: boolean;
  setModalVisible: (v: boolean) => void;
  addNew: any;
}
const CreateModal = (props: IProps) => {
  const { modalVisible, setModalVisible, addNew } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [star, setStar] = useState("");

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const handleSubmit = () => {
    if (title.trim() === "") {
      Alert.alert("Thông tin chưa hợp lệ", "Tiêu đề không được để trống");
      return;
    }
    if (description.trim() === "") {
      Alert.alert("Thông tin chưa hợp lệ", "Mô tả không được để trống");
      return;
    }
    if (star.trim() === "") {
      Alert.alert(" thông tin chưa hợp lệ", "Đánh giá không được để trống");
      return;
    }

    addNew({ id: randomInteger(2, 2000000), title, description, star });
    setModalVisible(false);
    setTitle("");
    setDescription("");
    setStar("");
  };
  return (
    <>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.container}>
          {/* header */}
          <View style={styles.header}>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              Create a review
            </Text>
            <AntDesign
              onPress={() => {
                setModalVisible(false);
                setTitle("");
                setDescription("");
                setStar("");
              }}
              name="close"
              size={24}
              color="black"
            />
          </View>

          {/* body */}
          <View>
            <View style={styles.groupInput}>
              <Text style={styles.text}>Tiêu đề: </Text>
              <TextInput
                style={styles.input}
                value={title}
                onChangeText={(v) => setTitle(v)}
              />
            </View>
            <View style={styles.groupInput}>
              <Text style={styles.text}>Mô tả: </Text>
              <TextInput
                numberOfLines={4}
                style={styles.input}
                value={description}
                onChangeText={(v) => setDescription(v)}
              />
            </View>
            <View style={styles.groupInput}>
              <Text style={styles.text}>Đánh giá: </Text>
              <TextInput
                keyboardType="numeric"
                style={styles.input}
                value={star}
                onChangeText={(v) => setStar(v)}
              />
            </View>
          </View>
          {/* footer */}
          <View style={{ marginTop: 20 }}>
            <Button title="Thêm mới" onPress={handleSubmit} />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default CreateModal;
