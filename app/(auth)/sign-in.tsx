import { Link } from "expo-router";
import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);
const SignIn = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text>SignIn</Text>
      <Text className="text-7xl font-bold font-sans-bold">Home</Text>

      <Link
        href={"/(auth)/sign-up"}
        className="mt-4 rounded bg-primary text-white p-4"
      >
        SignUp
      </Link>
    </SafeAreaView>
  );
};

export default SignIn;
