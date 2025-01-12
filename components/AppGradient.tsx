import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const AppGradient = ({
  children,
  colors,
}: {
  children: any;
  colors: string[];
}) => {
  return (
    <LinearGradient colors={colors} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, marginInline:24,marginBlock:10}}>
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AppGradient;
