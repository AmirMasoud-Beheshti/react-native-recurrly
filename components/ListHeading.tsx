import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export interface ListHeading {
  title: string;
}
const ListHeading = ({ title }: ListHeading) => {
  return (
    <View className="list-head">
      <Text className="list-title">{title}</Text>
      <TouchableOpacity className="list-action">
        <Text className="list-action-text">View All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListHeading;
