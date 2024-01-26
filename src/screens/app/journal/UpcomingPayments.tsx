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
import { JournalStackParamList } from "../../../routes/app/journal/JournalStack";
import { useNavigation } from "@react-navigation/native";
import { PaymentData } from "../../../../data/data";
import UpcomingPaymentDataRow from "./components/UpcomingPaymentDataRow";

type Props = {};

// Setting up type for Navigator
type JournalStackNavigationProp = NativeStackNavigationProp<
  JournalStackParamList,
  "UpcomingPayments"
>;

const UpcomingPayments = (props: Props) => {
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
        <Appbar.Content title="Upcoming Payments" />
      </Appbar.Header>
      <DataTable style={[styles.tableStyle, { height: SCREEN_HEIGHT - 150 }]}>
        <DataTable.Header>
          <DataTable.Title>Company Name</DataTable.Title>
          <DataTable.Title>Amount</DataTable.Title>
          <DataTable.Title>Payment Date</DataTable.Title>
        </DataTable.Header>
        <FlatList
          data={PaymentData}
          keyExtractor={(payment) => payment.paymentId}
          renderItem={({ item }) => <UpcomingPaymentDataRow payment={item} />}
        />
      </DataTable>
    </View>
  );
};

export default UpcomingPayments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tableStyle: {
    padding: 10,
  },
});
