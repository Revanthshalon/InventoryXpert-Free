import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../screens/app/profile";
import Journal from "../../screens/app/journal";
import App from "../../../App";
import Settings from "../../screens/app/settings";

export type AppStackParamList = {
  Profile: undefined;
  Journal: undefined;
  Settings: undefined;
};

const AppStack = () => {
  const Stack = createNativeStackNavigator<AppStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Journal" component={Journal} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default AppStack;
