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
}
const CreateModal = (props: IProps) => {
  const { modalVisible, setModalVisible } = props;
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
              onPress={() => setModalVisible(false)}
              name="close"
              size={24}
              color="black"
            />
          </View>

          {/* body */}
          <View>
            <View style={styles.groupInput}>
              <Text style={styles.text}>Tiêu đề: </Text>
              <TextInput style={styles.input} />
            </View>
            <View style={styles.groupInput}>
              <Text style={styles.text}>Mô tả: </Text>
              <TextInput style={styles.input} />
            </View>
            <View style={styles.groupInput}>
              <Text style={styles.text}>Đánh giá: </Text>
              <TextInput keyboardType="numeric" style={styles.input} />
            </View>
          </View>
          {/* footer */}
          <View style={{ marginTop: 20 }}>
            <Button title="Thêm mới" />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default CreateModal;
