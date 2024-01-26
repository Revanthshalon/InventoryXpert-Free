import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Journal from "../../../screens/app/journal";

export type JournalStackParamList = {
  Home: undefined;
};

const JournalStack = () => {
  const Stack = createNativeStackNavigator<JournalStackParamList>();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Journal} />
    </Stack.Navigator>
  );
};

export default JournalStack;
