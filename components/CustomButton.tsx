import { View, Text, TouchableOpacity, StyleProp, TextStyle, ViewStyle } from "react-native";
import React from "react";

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const CustomButton = ({
  onPress,
  title,
  textStyle = {},
  containerStyle = {},
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        {
          backgroundColor: "white",
          borderRadius: 10,
          minHeight: 52,
          justifyContent: "center",
          alignItems: "center",
        },
        containerStyle, // Apply additional container styles
      ]}
      onPress={onPress}
    >
      <Text style={[{ fontWeight: "600", fontSize: 18 }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
