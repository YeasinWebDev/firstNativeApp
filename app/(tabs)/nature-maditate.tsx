import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { StatusBar } from "expo-status-bar";

import { MEDITATION_DATA } from "@/constants/Meditation-data";
import MEDITATION_IMAGES from "@/constants/Meditation-images";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
const natureMaditate = () => {
  return (
    <View style={styles.container}>
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View>
          <Text style={styles.text}>Welcome Yeasin</Text>
          <Text style={styles.para}>Start your meditation pratice today</Text>
        </View>

        <View style={{ marginTop: 24 }}>
          <FlatList
            data={MEDITATION_DATA}
            style={{ marginBottom: 100 }}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
              onPress={() => router.push(`/meditate/${item.id}` as `/meditate/[id]`)}
                style={{
                  overflow: "hidden",
                  height: 190,
                  borderRadius: 10,
                  marginBottom: 10,
                  width:"100%"
                }}
              >
                <ImageBackground
                  source={MEDITATION_IMAGES[item.id - 1]}
                  resizeMode="cover"
                  style={styles.item}
                >
                  <LinearGradient style={{flex:1, width:"110%", justifyContent:'center', alignItems:'center'}} colors={["transparent", "rgba(0,0,0,0.8)"]}>
                    <Text style={styles.itemText}>{item.title}</Text>
                  </LinearGradient>
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>
      <StatusBar style="light" />
    </View>
  );
};

export default natureMaditate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginTop: 18,
  },
  para: {
    color: "#f3f3f3",
    fontSize: 14,
    marginTop: 8,
  },
  item: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  itemText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
