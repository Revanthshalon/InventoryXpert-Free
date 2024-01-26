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
import { FAB, useTheme } from "react-native-paper";
import UpcomingPaymentsTable from "./components/UpcomingPaymentsTable";
import CompaniesTable from "./components/CompaniesTable";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Setting up type for the navigator
type JournalNavigationProps = NativeStackNavigationProp<
  JournalStackParamList,
  "Home"
>;

const Journal = () => {
  // Navigation Setup
  const navigation = useNavigation<JournalNavigationProps>();

  // Screen Dimensions
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

  // Getting Safe Area Insets
  const { top: TOP_INSET, bottom: BOTTOM_INSET } = useSafeAreaInsets();

  // State
  const [showAdd, setShowAdd] = React.useState<boolean>(false);

  // Action Handlers

  return (
    <View
      style={[
        {
          flex: 1,
          paddingTop: TOP_INSET,
          backgroundColor: useTheme().colors.background,
        },
      ]}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[
          styles.containerWrapper,
          {
            backgroundColor: useTheme().colors.background,
            marginBottom: BOTTOM_INSET + 20,
          },
        ]}>
        <UpcomingPaymentsTable containerStyle={{ marginVertical: 10 }} />
        <CompaniesTable containerStyle={{ marginVertical: 10 }} />
      </ScrollView>
      <FAB.Group
        open={showAdd}
        visible
        icon={showAdd ? "close" : "plus"}
        actions={[
          {
            icon: "office-building",
            label: "Add Company",
            onPress: () => {
              navigation.push("AddCompany");
            },
          },
          {
            icon: "credit-card",
            label: "Add Payments",
            onPress: () => {
              navigation.push("AddPayments");
            },
          },
          {
            icon: "cart",
            label: "Add Purchases",
            onPress: () => {
              navigation.push("AddPurchases");
            },
          },
        ]}
        onStateChange={({ open }) => setShowAdd(open)}
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          zIndex: 1,
        }}
      />
    </View>
  );
};

export default Journal;

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
  },
});
