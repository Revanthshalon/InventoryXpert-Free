import { NavigationProp, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { RootStackParamList } from "../../routes/RootStack";

// Get the Navigation Prop Type
type RootStackProps = NavigationProp<RootStackParamList, "Onboarding">;

const Onboarding = () => {
  // Get Navigation
  const navigation = useNavigation<RootStackProps>();

  return (
    <LinearGradient
      colors={["#7F7FD5", "#86A8E7", "#91EAE4"]}
      style={styles.containerWrapper}>
      <Text
        onPress={() => {
          navigation.navigate("App");
        }}
        variant="headlineLarge"
        style={{ color: useTheme().colors.onBackground }}>
        Get Started
      </Text>
    </LinearGradient>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
