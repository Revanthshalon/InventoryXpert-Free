import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { DataTable, Surface } from "react-native-paper";
import { Payment } from "../../../../../../data/data";
import CompanyPaymentRowData from "./CompanyPaymentRowData";

type Props = {
  relatedPayments: Payment[];
};

const CompanyRelatedPayments = ({ relatedPayments }: Props) => {
  return (
    <Surface style={styles.container}>
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
    height: 250,
  },
});
