import { View, Text, ScrollView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import AFFIRMATION_GALLERY from "@/constants/Affirmation-gallery";
import GuideAffirmationsGallery from "@/components/GuideAffirmationsGallery";

const Affirmations = () => {
  return (
    <View style={{}}>
      <LinearGradient
        style={{ height: "100%", paddingTop: 40,paddingInline:10 ,paddingBottom:10}}
        colors={["#2e1f58", "#54426b", "#a798af"]}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={{
              color: "rgb(250 250 250)",
              fontSize: 28,
              fontWeight: 600,
              alignItems: "center",
              width:'100%',
              textAlign:'center'
            }}
          >
            Change your beliefs with affirmations
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map(g=>(
              <GuideAffirmationsGallery key={g.title} title={g.title} preview={g.data}/>
            ))}
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Affirmations;
