import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../utils/const";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  about: {
    fontSize: 30,
    padding: 15,
  },
  text: {
    padding: 15,
    fontStyle: "italic",
  },
});
const AboutScreen = () => {
  return (
    <View style={styles.container}>
      
      <Text style={[styles.about, globalStyles.globalFonts]}>
        About Review App
      </Text>
      <Text>
        Made by{" "}
        <Text style={[styles.text, globalStyles.globalFonts]}>
          Oceanic Entertainment
        </Text>
      </Text>
    </View>
  );
};

export default AboutScreen;
