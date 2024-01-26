import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Journal from "../../../screens/app/journal";
import UpcomingPayments from "../../../screens/app/journal/UpcomingPayments";

export type JournalStackParamList = {
  Home: undefined;
  UpcomingPayments: undefined;
};

const JournalStack = () => {
  const Stack = createNativeStackNavigator<JournalStackParamList>();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Journal} />
      <Stack.Screen name="UpcomingPayments" component={UpcomingPayments} />
    </Stack.Navigator>
  );
};

export default JournalStack;
