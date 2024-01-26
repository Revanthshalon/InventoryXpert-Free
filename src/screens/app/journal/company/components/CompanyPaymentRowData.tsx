import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { DataTable } from "react-native-paper";
import { Payment } from "../../../../../../data/data";

type Props = {
  paymentDetails: Payment;
};

const CompanyPaymentRowData = ({ paymentDetails }: Props) => {
  return (
    <DataTable.Row>
      <DataTable.Cell>{paymentDetails.date}</DataTable.Cell>
      <DataTable.Cell>
        {paymentDetails.amount.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        })}
      </DataTable.Cell>
    </DataTable.Row>
  );
};

export default CompanyPaymentRowData;

const styles = StyleSheet.create({});
