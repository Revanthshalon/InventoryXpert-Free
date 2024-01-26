import React from "react";
import useOnboarding from "../hooks/onboarding/useOnboarding";
import LoadingScreen from "../screens/misc/LoadingScreen";
import Onboarding from "../screens/onboarding";
import RootStack from "../routes/RootStack";

type Props = {};

const RootLayout = (props: Props) => {
  // State to check if App is Ready
  const [appReady, setAppReady] = React.useState<boolean>(false);

  // Check if user has completed onboarding
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
    // Show Loading Screen if the user is Loading
    return <LoadingScreen />;
  }

  return onboardingState ? <Onboarding /> : <RootStack />;
};

export default RootLayout;
