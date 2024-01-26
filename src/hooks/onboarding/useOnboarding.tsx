import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useOnboarding = () => {
  const [loading, setLoading] = React.useState(true);
  const [onboardingState, setOnboardingState] = React.useState(false);

  React.useEffect(() => {
    const checkOnboardingState = async () => {
      try {
        const onboardingState = await AsyncStorage.getItem("onboardingState");
        if (onboardingState !== null) {
          setOnboardingState(true);
          setLoading(false);
        } else {
          throw new Error("User not onboarded");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    checkOnboardingState();
  }, []);

  return [loading, onboardingState] as const;
};
