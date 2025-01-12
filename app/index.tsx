import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

// Replace alias with relative path if necessary
import beachImage from "../assets/meditation-images/beach.webp";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "@/components/CustomButton"
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

const Index = () => {
    const router = useRouter()
  return (
    <View style={styles.container}>
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <SafeAreaView style={{ flex: 1,justifyContent:"space-between"}}>
            <View>
              <Text style={styles.text}>Simple Meditation</Text>
              <Text style={styles.para}>
                Simplifying Meditation for everyone
              </Text>
            </View>
            <View>
                <CustomButton onPress={() => router.push('/nature-maditate')} title="Get Started"/>
            </View>
          </SafeAreaView>
        </AppGradient>
      </ImageBackground>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 24,
    fontWeight: "bold",
    color: "white",
  },
  para: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "light",
    color: "white",
  },
});

export default Index;
