import { Link } from "expo-router";
import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);
const SignUp = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text>SignUp</Text>
      <Link
        href={"/(auth)/sign-in"}
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Sign In
      </Link>
      <Link href={"/"} className="mt-4 rounded bg-primary text-white p-4">
        Back to Home
      </Link>
    </SafeAreaView>
  );
};

export default SignUp;
