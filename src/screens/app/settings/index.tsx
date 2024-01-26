import { StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, useTheme } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {};

const Settings = (props: Props) => {
  const resetOnboardingStatusHandler = () => {
    AsyncStorage.removeItem("onboardingState");
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: useTheme().colors.background }}>
      <Button mode="text" onPress={resetOnboardingStatusHandler}>
        Reset Onboarding Status
      </Button>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({});
