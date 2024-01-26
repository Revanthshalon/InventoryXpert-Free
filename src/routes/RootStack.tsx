import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/app/profile";
import AppDrawer from "./app/AppDrawer";

export type RootStackParamList = {
  Profile: undefined;
  App: undefined;
};

const RootStack = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      initialRouteName="App"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="App" component={AppDrawer} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default RootStack;
