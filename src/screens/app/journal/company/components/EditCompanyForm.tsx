import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { company } from "../../../../../../data/data";
import { Button, Text, TextInput, useTheme } from "react-native-paper";

type Props = {
  companyDetails?: company;
  visibilityControl: Dispatch<SetStateAction<boolean>>;
};

const EditCompanyForm = ({ companyDetails, visibilityControl }: Props) => {
  // Screen Dimensions
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

  // Form Actions
  const formClear = () => {
    setCompanyName("");
    setCompanyContact("");
    setInitialBalance("");
    setGstNumber("");
  };

  const submitForm = () => {
    if (companyDetails) {
      companyDetails.companyName = companyName;
      companyDetails.companyContact = companyContact;
      companyDetails.initalBalance = parseInt(initialBalance);
      companyDetails.gstNumber = gstNumber;
    }
    formClear();
    visibilityControl(false);
  };

  // State Variables
  const [companyName, setCompanyName] = React.useState<string>(
    companyDetails?.companyName || ""
  );
  const [companyContact, setCompanyContact] = React.useState<string>(
    companyDetails?.companyContact || ""
  );
  const [initialBalance, setInitialBalance] = React.useState<string>(
    companyDetails?.initalBalance.toString() || "0"
  );
  const [gstNumber, setGstNumber] = React.useState<string>(
    companyDetails?.gstNumber || ""
  );
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View
        style={[
          styles.container,
          { backgroundColor: useTheme().colors.background },
        ]}>
        <Text variant="headlineLarge" style={[{ paddingVertical: 20 }]}>
          Edit Company Details
        </Text>
        <View style={[{ rowGap: 10 }]}>
          <TextInput
            label="Company Name"
            value={companyName}
            onChangeText={setCompanyName}
          />
          <TextInput
            label="Company Contact"
            value={companyContact}
            onChangeText={setCompanyContact}
          />
          <TextInput
            label="Initial Balance"
            value={initialBalance}
            onChangeText={setInitialBalance}
          />
          <TextInput
            label="GST"
            value={gstNumber}
            onChangeText={setGstNumber}
          />
        </View>
        <View
          style={[
            {
              flexDirection: "row",
              width: SCREEN_WIDTH - 20,
              justifyContent: "space-around",
              paddingVertical: 20,
            },
          ]}>
          <Button
            mode="outlined"
            onPress={() => {
              visibilityControl(false);
            }}>
            Close
          </Button>
          <Button mode="outlined" onPress={submitForm}>
            Submit
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EditCompanyForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
