import {
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppDrawerParamList } from "../../../../routes/app/AppDrawer";
import { RootStackParamList } from "../../../../routes/RootStack";
import { Avatar, IconButton, Text, useTheme } from "react-native-paper";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { VariantProp } from "react-native-paper/lib/typescript/components/Typography/types";

// Setting up type for the navigator
type AppDrawerNavigationProps = DrawerNavigationProp<
  AppDrawerParamList,
  "Journal"
>;

type Props = {
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  labelVariant?: VariantProp<TextStyle>;
};

const Header = ({ containerStyle, labelStyle, labelVariant }: Props) => {
  // Navigation Setup
  const drawerNav = useNavigation<AppDrawerNavigationProps>();

  // Getting Screen Dimensions
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  return (
    <View
      style={[
        styles.container,
        {
          width: SCREEN_WIDTH,
          backgroundColor: useTheme().colors.background,
        },
        containerStyle,
      ]}>
      <Text variant={labelVariant ?? "titleLarge"} style={[labelStyle]}>
        Inventory Xperts
      </Text>
      <IconButton
        icon="menu"
        onPress={() => {
          drawerNav.openDrawer();
        }}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: "space-between",
    padding: 10,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
});
