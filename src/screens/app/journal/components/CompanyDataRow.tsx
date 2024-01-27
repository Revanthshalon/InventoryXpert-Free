import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Payment, company } from "../../../../../data/data";
import { DataTable } from "react-native-paper";

type Props = {
  company: company;
};

const CompanyDataRow = ({ company }: Props) => {
  return (
    <DataTable.Row>
      <DataTable.Cell>{company.companyName}</DataTable.Cell>
      <DataTable.Cell>
        {company.initalBalance.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        })}
      </DataTable.Cell>
      <DataTable.Cell>{company.companyContact}</DataTable.Cell>
    </DataTable.Row>
  );
};

export default CompanyDataRow;

const styles = StyleSheet.create({});
