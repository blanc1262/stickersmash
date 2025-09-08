import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
  <Text style={styles.text}>StickerSmash lets you choose a photo and add multiple Mikeremoji stickers on top. You can move, resize, and save your creation to your device. Great for making your photos more funnier!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
});
