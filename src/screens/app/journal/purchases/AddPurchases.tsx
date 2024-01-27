import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import DropDown from "react-native-paper-dropdown";
import { companyData } from "../../../../../data/data";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Appbar, Button, TextInput, useTheme } from "react-native-paper";
import { JournalStackParamList } from "../../../../routes/app/journal/JournalStack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { DatePickerInput } from "react-native-paper-dates";

type Props = {};

// Navigation Props
type JournalNavigationProp = NativeStackNavigationProp<
  JournalStackParamList,
  "AddPurchases"
>;

const AddPurchases = (props: Props) => {
  // Navigation Setup
  const navigation = useNavigation<JournalNavigationProp>();

  // Screen Dimensions
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();

  // Insets
  const { top: SCREEN_TOP, bottom: SCREEN_BOTTOM } = useSafeAreaInsets();

  // State Variables
  const [showDropDown, setShowDropDown] = React.useState<boolean>(false);
  const [company, setCompany] = React.useState<string | undefined>();
  const [inputDate, setInputDate] = React.useState<Date | undefined>(undefined);
  const [amount, setAmount] = React.useState<string>("0");
  const [remarks, setRemarks] = React.useState<string>("");

  // Create Company List
  const companyList = companyData.map((company) => {
    return {
      label: company.companyName,
      value: company.companyId,
    };
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          flex: 1,
          backgroundColor: useTheme().colors.background,
        }}>
        <Appbar.Header mode="small" elevated>
          <Appbar.BackAction
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Appbar.Content title="Add Purchase" />
        </Appbar.Header>
        <View style={[{ padding: 10, rowGap: 20 }]}>
          <DropDown
            label={"Company"}
            mode="flat"
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={company}
            setValue={setCompany}
            list={companyList}
            dropDownItemTextStyle={{ color: useTheme().colors.onBackground }}
          />
          <View
            style={{
              justifyContent: "center",
              flex: 1,
              alignItems: "center",
              marginVertical: 20,
            }}>
            <DatePickerInput
              locale="en-GB"
              label="Purchase Date"
              value={inputDate}
              onChange={(d) => setInputDate(d)}
              inputMode="start"
            />
          </View>
          <TextInput
            label="Amount"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />
          <TextInput
            label="Remarks"
            autoCapitalize="none"
            value={remarks}
            onChangeText={setRemarks}
            style={{ marginTop: -10 }}
          />
        </View>
        <View
          style={[{ flexDirection: "row", justifyContent: "space-around" }]}>
          <Button
            mode="outlined"
            onPress={() => {
              navigation.goBack();
            }}>
            Close
          </Button>
          <Button mode="outlined" onPress={() => {}}>
            Submit
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddPurchases;

const styles = StyleSheet.create({});
