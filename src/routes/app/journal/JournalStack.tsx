import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Journal from "../../../screens/app/journal";
import UpcomingPayments from "../../../screens/app/journal/upcoming payments/UpcomingPayments";
import CompaniesList from "../../../screens/app/journal/company";
import CompanyDetails from "../../../screens/app/journal/company/CompanyDetails";
import AddCompanyForm from "../../../screens/app/journal/company/components/AddCompanyForm";
import AddPurchases from "../../../screens/app/journal/purchases/AddPurchases";
import AddPayments from "../../../screens/app/journal/payments/AddPayments";

export type JournalStackParamList = {
  Home: undefined;
  UpcomingPayments: undefined;
  CompaniesList: undefined;
  CompanyDetails: { companyId: string };
  AddCompany: undefined;
  AddPayments: undefined;
  AddPurchases: undefined;
};

const JournalStack = () => {
  const Stack = createNativeStackNavigator<JournalStackParamList>();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Journal} />
      <Stack.Screen name="UpcomingPayments" component={UpcomingPayments} />
      <Stack.Screen name="CompaniesList" component={CompaniesList} />
      <Stack.Screen name="CompanyDetails" component={CompanyDetails} />
      <Stack.Screen name="AddCompany" component={AddCompanyForm} />
      <Stack.Screen name="AddPurchases" component={AddPurchases} />
      <Stack.Screen name="AddPayments" component={AddPayments} />
    </Stack.Navigator>
  );
};

export default JournalStack;
