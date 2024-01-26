import { FlatList, StyleSheet, View, useWindowDimensions } from "react-native";
import React from "react";
import { DataTable, Surface } from "react-native-paper";
import { Payment } from "../../../../../../data/data";
import CompanyPaymentRowData from "./CompanyPaymentRowData";

type Props = {
  relatedPayments: Payment[];
};

const CompanyRelatedPayments = ({ relatedPayments }: Props) => {
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
          data={relatedPayments}
          keyExtractor={(payment) => payment.paymentId}
          renderItem={({ item }) => (
            <CompanyPaymentRowData paymentDetails={item} />
          )}
        />
      </DataTable>
    </Surface>
  );
};

export default CompanyRelatedPayments;

const styles = StyleSheet.create({
  container: {
    height: 300,
    borderRadius: 10,
    marginVertical: 10,
  },
});
