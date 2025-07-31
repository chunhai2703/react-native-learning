import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import FlexBox from "./components/flexbox";
import AntDesign from "@expo/vector-icons/AntDesign";

interface ITodo {
  id: number;
  name: string;
}
export default function App() {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState<ITodo[]>([]);

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleDeleteTodo = (id: number) => {
    const newTodos = listTodo.filter((item) => item.id !== id);
    setListTodo(newTodos);
  };

  const handleAddToDo = () => {
    if (!todo) {
      Alert.alert("Lỗi input todo", "Todo không được để trống", [
        // {
        //   text: "Hủy",
        //   onPress: () => console.log("Cancel Pressed"),
        //   style: "cancel",
        // },
        { text: "Okay con dê", onPress: () => console.log("OK Pressed") },
      ]);
      return;
    }
    setListTodo([...listTodo, { id: randomInteger(1, 2000000), name: todo }]);
    setTodo("");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header */}
        <Text style={styles.header}>Todo App</Text>

        {/* form */}
        <View style={styles.form}>
          <TextInput
            value={todo}
            style={styles.todoInput}
            onChangeText={(value) => setTodo(value)}
          />
          <Button title="Add todo" onPress={handleAddToDo} />
        </View>

        {/* list todo */}
        <View style={styles.todo}>
          <FlatList
            data={listTodo}
            keyExtractor={(item) => item.id + ""}
            renderItem={({ item }) => {
              return (
                <Pressable
                  style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
                  // onPress={() => handleDeleteTodo(item.id)}
                >
                  <View style={styles.groupTodo}>
                    <Text style={styles.todoItem}>{item.name}</Text>
                    <Pressable
                      style={({ pressed }) => [
                        { opacity: pressed ? 0.5 : 1.0 },
                      ]}
                      onPress={() => handleDeleteTodo(item.id)}
                    >
                      <Text>
                        <AntDesign name="close" size={24} color="red" />
                      </Text>
                    </Pressable>
                  </View>
                </Pressable>
              );
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 60,
  },

  form: {
    // flex: 2,
    marginBottom: 20,
  },
  todo: {
    flex: 1,
  },

  body: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  todoInput: {
    borderBottomWidth: 1,
    borderBottomColor: "green",
    padding: 5,
    margin: 15,
  },

  groupTodo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderStyle: "dashed",
    marginBottom: 15,
    marginHorizontal: 15,
    padding: 15,
  },
  todoItem: {
    // padding: 10,
    fontSize: 20,
    // marginBottom: 20,
  },
});
