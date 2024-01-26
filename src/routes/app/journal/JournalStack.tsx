import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Journal from "../../../screens/app/journal";
import UpcomingPayments from "../../../screens/app/journal/upcoming payments/UpcomingPayments";
import CompaniesList from "../../../screens/app/journal/company";
import CompanyDetails from "../../../screens/app/journal/company/CompanyDetails";

export type JournalStackParamList = {
  Home: undefined;
  UpcomingPayments: undefined;
  CompaniesList: undefined;
  CompanyDetails: { companyId: string };
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
    </Stack.Navigator>
  );
};

export default JournalStack;
