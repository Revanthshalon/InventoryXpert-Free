import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Payment } from "../../../../../data/data";
import { DataTable } from "react-native-paper";

type Props = {
  payment: Payment;
};

const UpcomingPaymentDataRow = ({ payment }: Props) => {
  return (
    <DataTable.Row>
      <DataTable.Cell>{payment.companyId}</DataTable.Cell>
      <DataTable.Cell>
        {payment.amount.toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        })}
      </DataTable.Cell>
      <DataTable.Cell>{payment.date}</DataTable.Cell>
    </DataTable.Row>
  );
};

export default UpcomingPaymentDataRow;

const styles = StyleSheet.create({});
