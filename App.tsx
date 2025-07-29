import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Ocean nè!</Text>
        <Text style={styles.parent}>
          Welcome to <Text style={styles.child}>Ocean World</Text>
        </Text>
      </View>
      <Text style={styles.hello1}>Hello World 1!</Text>
      <Text>Hello World 2!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  hello1: {
    color: "red",
    fontSize: 60,
    borderColor: "blue",
    borderWidth: 1,
    padding: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  parent: {
    color: "green",
    fontSize: 60,
  },
  child: {
    color: "pink",
    fontSize: 30,
  },
});
