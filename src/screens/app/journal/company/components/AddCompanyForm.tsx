import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { Appbar, Button, Text, TextInput, useTheme } from "react-native-paper";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { JournalStackParamList } from "../../../../../routes/app/journal/JournalStack";
import { useNavigation } from "@react-navigation/native";

type Props = {};

type JournlNavigationProps = NativeStackNavigationProp<
  JournalStackParamList,
  "AddCompany"
>;

const AddCompanyForm = () => {
  // Navigation Setup
  const navigation = useNavigation<JournlNavigationProps>();

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
    formClear();
    navigation.goBack();
  };

  // State Variables
  const [companyName, setCompanyName] = React.useState<string>("");
  const [companyContact, setCompanyContact] = React.useState<string>("");
  const [initialBalance, setInitialBalance] = React.useState<string>("0");
  const [gstNumber, setGstNumber] = React.useState<string>("");
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View
        style={[{ flex: 1, backgroundColor: useTheme().colors.background }]}>
        <Appbar.Header mode="small" elevated>
          <Appbar.BackAction
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Appbar.Content title="Add Company" />
        </Appbar.Header>
        <View
          style={[
            styles.container,
            { backgroundColor: useTheme().colors.background },
          ]}>
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
                navigation.goBack();
              }}>
              Close
            </Button>
            <Button mode="outlined" onPress={submitForm}>
              Submit
            </Button>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddCompanyForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
