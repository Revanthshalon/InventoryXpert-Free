import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Purchase } from "../../../../../../data/data";
import { DataTable, Surface } from "react-native-paper";
import CompanyPurchaseRowData from "./CompanyPurchaseRowData";

type Props = {
  relatedPurchases: Purchase[];
};

const CompanyRelatedPurchases = ({ relatedPurchases }: Props) => {
  return (
    <Surface style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Payment Date</DataTable.Title>
          <DataTable.Title>Payment Amount</DataTable.Title>
        </DataTable.Header>
        <FlatList
          data={relatedPurchases}
          keyExtractor={(purchase) => purchase.purchaseId}
          renderItem={({ item }) => (
            <CompanyPurchaseRowData purchaseDetail={item} />
          )}
        />
      </DataTable>
    </Surface>
  );
};

export default CompanyRelatedPurchases;

const styles = StyleSheet.create({
  container: {
    height: 250,
  },
});
