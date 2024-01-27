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
import {
  Payment,
  PaymentData,
  company,
  companyData,
} from "../../../../../data/data";
import UpcomingPaymentDataRow from "./UpcomingPaymentDataRow";
import { sortByProperty } from "../../../../utils/helpers";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { JournalStackParamList } from "../../../../routes/app/journal/JournalStack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import CompaniesDataRow from "../company/components/CompaniesDataRow";

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

const CompaniesTable = ({
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
  const [sortBy, setSortBy] = React.useState<
    "companyName" | "companyContact" | "initalBalance"
  >("companyName");
  const [sortDirection, setSortDirection] = React.useState<
    "ascending" | "descending"
  >("descending");

  // Use a hook to get the list of upcoming payments here
  // const upcomingPayments = useGetUpcomingPayments(); TODO: Implement this hook

  // Sort the data
  const sortedData = sortByProperty<company>(
    companyData,
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
          Company Details
        </Text>
        <Text
          variant="bodySmall"
          style={[
            { marginBottom: 10, color: useTheme().colors.onSurfaceVariant },
          ]}>
          List of all Companies and their details
        </Text>
        <DataTable style={{ height: 200 }}>
          <DataTable.Header>
            <DataTable.Title
              onPress={() => {
                if (sortBy !== "companyName") {
                  setSortBy("companyName");
                } else {
                  setSortBy("companyName");
                  sortDirection === "ascending"
                    ? setSortDirection("descending")
                    : setSortDirection("ascending");
                }
              }}
              sortDirection={
                sortBy === "companyName" ? sortDirection : undefined
              }>
              Company Name
            </DataTable.Title>
            <DataTable.Title
              onPress={() => {
                if (sortBy !== "initalBalance") {
                  setSortBy("initalBalance");
                } else {
                  setSortBy("initalBalance");
                  sortDirection === "ascending"
                    ? setSortDirection("descending")
                    : setSortDirection("ascending");
                }
              }}
              sortDirection={
                sortBy === "initalBalance" ? sortDirection : undefined
              }>
              Amount Due
            </DataTable.Title>
            <DataTable.Title
              onPress={() => {
                if (sortBy !== "companyContact") {
                  setSortBy("companyContact");
                } else {
                  setSortBy("companyContact");
                  sortDirection === "ascending"
                    ? setSortDirection("descending")
                    : setSortDirection("ascending");
                }
              }}
              sortDirection={
                sortBy === "companyContact" ? sortDirection : undefined
              }>
              Recent Paid Date
            </DataTable.Title>
          </DataTable.Header>
          <FlatList
            data={sortedData}
            keyExtractor={(company) => company.companyId}
            renderItem={({ item }) => <CompaniesDataRow company={item} />}
          />
        </DataTable>
        <Button
          onPress={() => {
            navigation.push("CompaniesList");
          }}
          mode="outlined"
          style={[styles.buttonContainer]}>
          View All
        </Button>
      </Surface>
    </ScrollView>
  );
};

export default CompaniesTable;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    height: 330,
    marginHorizontal: 10,
  },
  buttonContainer: { width: 100, alignSelf: "flex-end", marginVertical: 10 },
});
