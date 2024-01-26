import {
  FlatList,
  ScrollView,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
  useWindowDimensions,
} from "react-native";
import React from "react";
import {
  Button,
  DataTable,
  IconButton,
  Surface,
  Text,
  useTheme,
} from "react-native-paper";
import { VariantProp } from "react-native-paper/lib/typescript/components/Typography/types";
import { ElevationLevels } from "react-native-paper/lib/typescript/types";
import { Payment, PaymentData } from "../../../../../data/data";
import UpcomingPaymentDataRow from "./UpcomingPaymentDataRow";
import { sortByProperty } from "../../../../utils/helpers";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { JournalStackParamList } from "../../../../routes/app/journal/JournalStack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {
  containerStyle?: ViewStyle;
  headerLabelStyle?: TextStyle;
  headerLabelVariant?: VariantProp<TextStyle>;
  elevation?: ElevationLevels;
  headerOnPress?: () => void;
};

// Setting up type for the navigator
type JournalStackNavigationProp = NativeStackNavigationProp<
  JournalStackParamList,
  "Home"
>;

const UpcomingPaymentsTable = ({
  containerStyle,
  headerLabelStyle,
  headerLabelVariant,
  elevation,
  headerOnPress,
}: Props) => {
  // Navigation Setup
  const navigation = useNavigation<JournalStackNavigationProp>();

  // Get Screen Dimensions
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

  // State
  const [sortBy, setSortBy] = React.useState<"companyId" | "date" | "amount">(
    "date"
  );
  const [sortDirection, setSortDirection] = React.useState<
    "ascending" | "descending"
  >("descending");

  // Use a hook to get the list of upcoming payments here
  // const upcomingPayments = useGetUpcomingPayments(); TODO: Implement this hook

  // Sort the data
  const sortedData = sortByProperty<Payment>(
    PaymentData,
    sortBy,
    sortDirection === "ascending"
  );

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <Surface
        elevation={elevation ?? 3}
        style={[
          styles.container,
          { width: SCREEN_WIDTH - 20 },
          containerStyle,
        ]}>
        <Text
          onPress={headerOnPress}
          variant={headerLabelVariant ?? "headlineLarge"}
          style={[headerLabelStyle]}>
          Upcoming Payments
        </Text>
        <Text
          variant="bodySmall"
          style={[
            { marginBottom: 10, color: useTheme().colors.onSurfaceVariant },
          ]}>
          Here are the upcoming payments
        </Text>
        <DataTable style={{ height: 270 }}>
          <DataTable.Header>
            <DataTable.Title
              onPress={() => {
                if (sortBy !== "companyId") {
                  setSortBy("companyId");
                } else {
                  setSortBy("companyId");
                  sortDirection === "ascending"
                    ? setSortDirection("descending")
                    : setSortDirection("ascending");
                }
              }}
              sortDirection={
                sortBy === "companyId" ? sortDirection : undefined
              }>
              Payment To
            </DataTable.Title>
            <DataTable.Title
              onPress={() => {
                if (sortBy !== "amount") {
                  setSortBy("amount");
                } else {
                  setSortBy("amount");
                  sortDirection === "ascending"
                    ? setSortDirection("descending")
                    : setSortDirection("ascending");
                }
              }}
              sortDirection={sortBy === "amount" ? sortDirection : undefined}>
              Amount
            </DataTable.Title>
            <DataTable.Title
              onPress={() => {
                if (sortBy !== "date") {
                  setSortBy("date");
                } else {
                  setSortBy("date");
                  sortDirection === "ascending"
                    ? setSortDirection("descending")
                    : setSortDirection("ascending");
                }
              }}
              sortDirection={sortBy === "date" ? sortDirection : undefined}>
              Due Date
            </DataTable.Title>
          </DataTable.Header>
          <FlatList
            data={sortedData}
            keyExtractor={(payment) => payment.paymentId}
            renderItem={({ item }) => <UpcomingPaymentDataRow payment={item} />}
          />
        </DataTable>
        <Button
          onPress={() => {
            navigation.push("UpcomingPayments");
          }}
          mode="outlined"
          style={[styles.buttonContainer]}>
          View All
        </Button>
      </Surface>
    </ScrollView>
  );
};

export default UpcomingPaymentsTable;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    height: 400,
    marginHorizontal: 10,
  },
  buttonContainer: { width: 100, alignSelf: "flex-end", marginVertical: 10 },
});
