import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Nguyen Van A", age: 20 },
    { id: 2, name: "Nguyen Van B", age: 21 },
    { id: 3, name: "Nguyen Van C", age: 22 },
    { id: 4, name: "Nguyen Van D", age: 23 },
    { id: 5, name: "Nguyen Van E", age: 24 },
    { id: 6, name: "Nguyen Van F", age: 25 },
    { id: 7, name: "Nguyen Van G", age: 26 },
    { id: 8, name: "Nguyen Van H", age: 27 },
    { id: 9, name: "Nguyen Van I", age: 28 },
    { id: 10, name: "Nguyen Van J", age: 29 },
  ]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 60 }}>Hello World</Text>
      <ScrollView>
        {students.map((student) => {
          return (
            <View
              key={student.id}
              style={{
                padding: 30,
                backgroundColor: "orange",
                marginBottom: 30,
              }}
            >
              <Text>{student.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
