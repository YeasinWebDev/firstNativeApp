import { View, Text, Pressable } from "react-native";
import React, { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import CustomButton from "@/components/CustomButton";
import { TimerContext } from "@/context/TimerContext";

const AdjustMeditionDuration = () => {
  const {setDuration} = useContext(TimerContext)

  const handlePress = (duration:Number) =>{
     setDuration(Number(duration))
     router.back()
  }
  return (
    <View style={{ flex: 1, position: "relative" }}>
      <LinearGradient
        style={{ flex: 1, paddingInline: 10 }}
        colors={["#161b2e", "#0a4d4a", "#766e67"]}
      >
        <Pressable style={{ paddingTop: 40 }} onPress={() => router.back()}>
          <AntDesign name="leftcircleo" size={34} color="#FFF" />
        </Pressable>
        <View style={{ justifyContent: "center", height: "80%" }}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "800",
              fontSize: 30,
              color: "white",
              marginBottom: 8,
            }}
          >
            Adjust your meditation duration
          </Text>
          <View>
            <CustomButton
              title="10 seconds"
              onPress={() => handlePress(10)}
              containerStyle={{ marginTop: 10 }}
            />
            <CustomButton
              title="5 minutes"
              onPress={() => handlePress(5 * 60)}
              containerStyle={{ marginTop: 10 }}
            />
            <CustomButton
              title="10 minutes"
              onPress={() => handlePress(10 * 60)}
              containerStyle={{ marginTop: 10 }}
            />
            <CustomButton
              title="15 minutes"
              onPress={() => handlePress(15 * 60)}
              containerStyle={{ marginTop: 10 }}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default AdjustMeditionDuration;
