import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const LoadingScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>LoadingScreen</Text>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
