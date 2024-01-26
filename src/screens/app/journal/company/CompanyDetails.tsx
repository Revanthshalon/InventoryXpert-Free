import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { JournalStackParamList } from "../../../../routes/app/journal/JournalStack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Appbar,
  Button,
  Dialog,
  Divider,
  Portal,
  Text,
  useTheme,
} from "react-native-paper";
import { Payment, Purchase, companyData } from "../../../../../data/data";
import CompanyCard from "./components/CompanyCard";
import CompanyRelatedPayments from "./components/CompanyRelatedPayments";
import CompanyRelatedPurchases from "./components/CompanyRelatedPurchases";

type Props = {};

// Setting Type for Route Params
type JournalStackRoute = RouteProp<JournalStackParamList, "CompanyDetails">;

// Setting Type for Navigation Props
type JournalStackNavigation = NativeStackNavigationProp<
  JournalStackParamList,
  "CompanyDetails"
>;

const CompanyDetails = (props: Props) => {
  // Getting Route Params
  const route = useRoute<JournalStackRoute>();
  const { companyId } = route.params;

  // Getting Navigation Props
  const navigation = useNavigation<JournalStackNavigation>();

  // Get Company Details
  const companyDetails = companyData.find(
    (company) => company.companyId === companyId
  );
  const relatedPayments: Payment[] = [];
  const relatedPurchases: Purchase[] = [];

  // State
  const [showAlert, setShowAlert] = React.useState<boolean>(false);

  // Action Handler
  const deleteCompanyHandler = () => {
    setShowAlert(true);
  };
  const cancelDeleteHandler = () => {
    setShowAlert(false);
  };
  const confirmDeleteHandler = () => {
    // TODO: Add Delete Functionality
    setShowAlert(false);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: useTheme().colors.background },
      ]}>
      <Appbar.Header mode="small" elevated>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Company Details" />
        <Appbar.Action
          icon="trash-can"
          color={useTheme().colors.error}
          onPress={deleteCompanyHandler}
        />
      </Appbar.Header>
      {/* Show Delete warning */}
      <Portal>
        <Dialog visible={showAlert} onDismiss={cancelDeleteHandler}>
          <Dialog.Title>Delete Company</Dialog.Title>
          <Dialog.Content>
            <Text>
              Are you sure you want to delete this company and all related
              detail?
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={cancelDeleteHandler}>Cancel</Button>
            <Button onPress={confirmDeleteHandler}>Delete</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      <ScrollView>
        {companyDetails && <CompanyCard companyDetails={companyDetails} />}
        <Divider bold style={{ marginVertical: 5, marginHorizontal: 10 }} />
        <View style={{ marginHorizontal: 10, height: 300 }}>
          <Text variant="headlineMedium">Related Payments</Text>
          {relatedPayments.length > 0 ? (
            <CompanyRelatedPayments relatedPayments={relatedPayments} />
          ) : (
            <Text>No Related Payments</Text>
          )}
        </View>
        <Divider bold style={{ marginVertical: 5, marginHorizontal: 10 }} />
        <View style={{ marginHorizontal: 10, height: 300 }}>
          <Text variant="headlineMedium">Related Purchases</Text>
          {relatedPayments.length > 0 ? (
            <CompanyRelatedPurchases relatedPurchases={relatedPurchases} />
          ) : (
            <Text>No Related Purchases</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default CompanyDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
