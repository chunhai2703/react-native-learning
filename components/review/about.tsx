import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../utils/const";

const styles = StyleSheet.create({
  about: {
    fontSize: 30,
  },
});
const AboutScreen = () => {
  return (
    <View>
      <Text style={[styles.about, globalStyles.globalFonts]}>
        About Screen google
      </Text>
    </View>
  );
};

export default AboutScreen;
