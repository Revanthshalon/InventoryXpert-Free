import {
  Modal,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { JournalStackParamList } from "../../../../routes/app/journal/JournalStack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Appbar,
  Button,
  Dialog,
  Divider,
  IconButton,
  Portal,
  Text,
  useTheme,
} from "react-native-paper";
import { Payment, Purchase, companyData } from "../../../../../data/data";
import CompanyCard from "./components/CompanyCard";
import CompanyRelatedPayments from "./components/CompanyRelatedPayments";
import CompanyRelatedPurchases from "./components/CompanyRelatedPurchases";
import EditCompanyForm from "./components/EditCompanyForm";

type Props = {};

// Setting Type for Route Params
type JournalStackRoute = RouteProp<JournalStackParamList, "CompanyDetails">;

// Setting Type for Navigation Props
type JournalStackNavigation = NativeStackNavigationProp<
  JournalStackParamList,
  "CompanyDetails"
>;

const CompanyDetails = (props: Props) => {
  // Screen Dimensions
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

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
  const [showEdit, setShowEdit] = React.useState<boolean>(false);

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
        {
          backgroundColor: useTheme().colors.background,
          height: SCREEN_HEIGHT + 1000,
        },
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

      <ScrollView showsVerticalScrollIndicator={false}>
        {companyDetails && <CompanyCard companyDetails={companyDetails} />}
        <Divider bold style={{ marginVertical: 5, marginHorizontal: 10 }} />
        <View style={{ height: 375 }}>
          <Text variant="headlineMedium" style={{ marginHorizontal: 10 }}>
            Related Payments
          </Text>
          {relatedPayments.length > 0 ? (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={[{ width: SCREEN_WIDTH }]}>
              <View style={[{ alignItems: "center", margin: 10 }]}>
                <CompanyRelatedPayments relatedPayments={relatedPayments} />
              </View>
            </ScrollView>
          ) : (
            <Text style={{ marginHorizontal: 10 }}>No Related Payments</Text>
          )}
        </View>
        <Divider bold style={{ marginVertical: 5, marginHorizontal: 10 }} />
        <View style={{ height: 450 }}>
          <Text variant="headlineMedium" style={{ marginHorizontal: 10 }}>
            Related Purchases
          </Text>
          {relatedPayments.length > 0 ? (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={[{ width: SCREEN_WIDTH }]}>
              <View style={[{ alignItems: "center", margin: 10 }]}>
                <CompanyRelatedPurchases relatedPurchases={relatedPurchases} />
              </View>
            </ScrollView>
          ) : (
            <Text style={{ marginHorizontal: 10 }}>No Related Purchases</Text>
          )}
        </View>
      </ScrollView>
      <IconButton
        icon="pencil"
        size={35}
        style={[
          styles.fab,
          {
            borderColor: useTheme().colors.primary,
          },
        ]}
        iconColor={useTheme().colors.primary}
        onPress={() => {setShowEdit(true)}}
      />
      <Modal
        visible={showEdit}
        animationType="slide"
        presentationStyle="formSheet">
        <EditCompanyForm companyDetails={companyDetails} visibilityControl={setShowEdit} />
      </Modal>
    </View>
  );
};

export default CompanyDetails;

const styles = StyleSheet.create({
  container: { flex: 1 },
  fab: {
    position: "absolute",
    bottom: 40,
    right: 20,
    borderWidth: StyleSheet.hairlineWidth,
  },
});
