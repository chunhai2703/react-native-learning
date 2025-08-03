import { StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { globalStyles } from "../../utils/const";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingHorizontal: 5,
    paddingVertical: 10,
    paddingTop: 40,
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    width: "100%",
    textAlign: "center",
  },
});
const AppHeader = () => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <MaterialIcons
        name="menu"
        size={24}
        color="black"
        onPress={() => navigation.openDrawer()}
      />
      <Text style={[styles.headerText, globalStyles.globalFonts]}>
        Oceanic App
      </Text>
    </View>
  );
};

export default AppHeader;
