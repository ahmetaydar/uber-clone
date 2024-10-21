import RideLayout from "@/components/RideLayout";
import React from "react";
import { Text, View } from "react-native";

const BookRide = () => {
  return (
    <RideLayout title="Book Ride" snapPoints={["65%", "85%"]}>
      <View className="flex-1">
        <View className="mb-5">
          <Text className="text-xl font-JakartaSemiBold mb-3">
            Ride Details
          </Text>
        </View>
      </View>
    </RideLayout>
  );
};

export default BookRide;
