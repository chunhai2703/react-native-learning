import { useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

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
      alert("Empty todo");
      return;
    }
    setListTodo([...listTodo, { id: randomInteger(1, 2000000), name: todo }]);
    setTodo("");
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <Text style={styles.header}>Todo App</Text>

      {/* form */}
      <View style={styles.body}>
        <TextInput
          value={todo}
          style={styles.todoInput}
          onChangeText={(value) => setTodo(value)}
        />
        <Button title="Add todo" onPress={handleAddToDo} />
      </View>

      {/* list todo */}
      <View style={styles.body}>
        <FlatList
          data={listTodo}
          keyExtractor={(item) => item.id + ""}
          renderItem={({ item }) => {
            return (
              <Pressable
                style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
                onPress={() => handleDeleteTodo(item.id)}
              >
                <Text style={styles.todoItem}>{item.name}</Text>
              </Pressable>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 60,
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
  todoItem: {
    padding: 10,
    fontSize: 20,
    borderWidth: 1,
    borderStyle: "dashed",
    marginBottom: 15,
  },
});
