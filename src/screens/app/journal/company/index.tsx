import {
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { Appbar, DataTable, useTheme } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { JournalStackParamList } from "../../../../routes/app/journal/JournalStack";
import { useNavigation } from "@react-navigation/native";
import { PaymentData, companyData } from "../../../../../data/data";
import UpcomingPaymentDataRow from "../components/UpcomingPaymentDataRow";
import CompaniesDataRow from "./components/CompaniesDataRow";

type Props = {};

// Setting up type for Navigator
type JournalStackNavigationProp = NativeStackNavigationProp<
  JournalStackParamList,
  "CompaniesList"
>;

const CompaniesList = (props: Props) => {
  // Navigation Setup
  const navigation = useNavigation<JournalStackNavigationProp>();

  // Screen Dimensions
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: useTheme().colors.background },
      ]}>
      <Appbar.Header elevated mode="small">
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content title="Companies List" />
      </Appbar.Header>
      <DataTable style={[styles.tableStyle, { height: SCREEN_HEIGHT - 150 }]}>
        <DataTable.Header>
          <DataTable.Title>Company Name</DataTable.Title>
          <DataTable.Title>Due Amount</DataTable.Title>
          <DataTable.Title>Recent Paid Date</DataTable.Title>
        </DataTable.Header>
        <FlatList
          data={companyData}
          keyExtractor={(company) => company.companyId}
          renderItem={({ item }) => <CompaniesDataRow company={item} />}
        />
      </DataTable>
    </View>
  );
};

export default CompaniesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tableStyle: {
    padding: 10,
  },
});
