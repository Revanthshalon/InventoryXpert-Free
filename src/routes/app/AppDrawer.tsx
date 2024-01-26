import { createDrawerNavigator } from "@react-navigation/drawer";
import Journal from "../../screens/app/journal";
import Settings from "../../screens/app/settings";

export type AppDrawerParamList = {
  Journal: undefined;
  Settings: undefined;
};

const AppDrawer = () => {
  const Drawer = createDrawerNavigator<AppDrawerParamList>();
  return (
    <Drawer.Navigator
      initialRouteName="Journal"
      screenOptions={{ drawerPosition: "right", drawerType: "front" }}>
      <Drawer.Screen name="Journal" component={Journal} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
