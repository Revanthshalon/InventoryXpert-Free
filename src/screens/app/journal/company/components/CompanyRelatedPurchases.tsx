import {
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { Purchase } from "../../../../../../data/data";
import { DataTable, Surface } from "react-native-paper";
import CompanyPurchaseRowData from "./CompanyPurchaseRowData";

type Props = {
  relatedPurchases: Purchase[];
};

const CompanyRelatedPurchases = ({ relatedPurchases }: Props) => {
  // screen dimesions
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();
  return (
    <Surface
      elevation={3}
      style={[styles.container, { width: SCREEN_WIDTH - 20 }]}>
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
    height: 300,
    borderRadius: 10,
    marginVertical: 10,
  },
});
