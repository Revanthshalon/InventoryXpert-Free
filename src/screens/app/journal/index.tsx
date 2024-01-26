import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { JournalStackParamList } from "../../../routes/app/journal/JournalStack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "./components/header";
import { useTheme } from "react-native-paper";
import UpcomingPaymentsTable from "./components/UpcomingPaymentsTable";
import CompaniesTable from "./components/CompaniesTable";

// Setting up type for the navigator
type JournalNavigationProps = NavigationProp<JournalStackParamList, "Home">;

const Journal = () => {
  // Navigation Setup
  const navigation = useNavigation<JournalNavigationProps>();

  // Screen Dimensions
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

  // Getting Safe Area Insets
  const { top: TOP_INSET, bottom: BOTTOM_INSET } = useSafeAreaInsets();

  // State

  // Action Handlers

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        styles.containerWrapper,
        {
          paddingTop: TOP_INSET,
          paddingBottom: BOTTOM_INSET,
          backgroundColor: useTheme().colors.background,
          height: SCREEN_HEIGHT + TOP_INSET + BOTTOM_INSET,
        },
      ]}>
      <Header />
      <UpcomingPaymentsTable containerStyle={{ marginVertical: 10 }} />
      <CompaniesTable containerStyle={{ marginVertical: 10 }} />
    </ScrollView>
  );
};

export default Journal;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
  },
});
