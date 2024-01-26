import { StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {};

const Settings = (props: Props) => {
  const resetOnboardingStatusHandler = () => {
    AsyncStorage.removeItem("onboardingState");
  };
  return (
    <SafeAreaView>
      <Text onPress={resetOnboardingStatusHandler}>
        Reset Onboarding Status
      </Text>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({});
