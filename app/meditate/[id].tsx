import { View, Text, ImageBackground, Pressable } from "react-native";
import React from "react";
import MEDITATION_IMAGES from "@/constants/Meditation-images";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const Meditate = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={MEDITATION_IMAGES[0]}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          style={{ flex: 1 }}
        >
          <Pressable
            style={{ paddingTop: 40, paddingLeft: 10 }}
            onPress={() => router.back()}
          >
            <AntDesign name="leftcircleo" size={34} color="#FFF" />
          </Pressable>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
