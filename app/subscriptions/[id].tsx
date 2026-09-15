import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>SubscriptionDetails for {id}</Text>
      <Link href={"/"} className="mt-4 rounded bg-primary text-white p-4">
        Go Back
      </Link>
    </View>
  );
};

export default SubscriptionDetails;
