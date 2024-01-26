import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { DataTable } from "react-native-paper";
import { company } from "../../../../../../data/data";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { JournalStackParamList } from "../../../../../routes/app/journal/JournalStack";
import { useNavigation } from "@react-navigation/native";

type Props = {
  company: company;
};

// Setting up type for Navigator
type JournalStackNavigationProp = NativeStackNavigationProp<
  JournalStackParamList,
  "CompaniesList"
>;

const CompaniesDataRow = ({ company }: Props) => {
  // Navigation Setup
  const navigation = useNavigation<JournalStackNavigationProp>();
  return (
    <DataTable.Row
      onPress={() => {
        navigation.push("CompanyDetails", { companyId: company.companyId });
      }}>
      <DataTable.Cell>{company.companyId}</DataTable.Cell>
      <DataTable.Cell>
        {company.initalBalance.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        })}
      </DataTable.Cell>
      <DataTable.Cell>1/1/2024</DataTable.Cell>
    </DataTable.Row>
  );
};

export default CompaniesDataRow;

const styles = StyleSheet.create({});
