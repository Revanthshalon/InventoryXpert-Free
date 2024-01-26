import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/app/profile";
import AppDrawer from "./app/AppDrawer";
import Onboarding from "../screens/onboarding";

type Props = {
  onboarding: boolean;
};

export type RootStackParamList = {
  Profile: undefined;
  App: undefined;
  Onboarding: undefined;
};

const RootStack = ({ onboarding }: Props) => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      initialRouteName={onboarding ? "App" : "Onboarding"}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="App" component={AppDrawer} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};

export default RootStack;
