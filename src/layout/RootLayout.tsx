import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useOnboarding from "../hooks/onboarding/useOnboarding";
import LoadingScreen from "../screens/misc/LoadingScreen";

type Props = {};

const RootLayout = (props: Props) => {
  // State to check if App is Ready
  const [appReady, setAppReady] = React.useState<boolean>(false);

  const [loading, onboardingState] = useOnboarding();

  React.useEffect(() => {
    const checkAppReady = async () => {
      try {
        if (!loading) {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          setAppReady(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkAppReady();
  }, [loading]);

  if (!appReady) {
    return <LoadingScreen />;
  }

  return (
    <View>
      <Text>RootLayout</Text>
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
