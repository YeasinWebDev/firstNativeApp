import {
  View,
  Text,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import AFFIRMATION_GALLERY from "@/constants/Affirmation-gallery";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";

const AffirmationPratice = () => {
  const { itemId } = useLocalSearchParams();
  const [affiramtion, setAffirmation] = useState<GalleryPreviewData>();
  const [sentence, setSentence] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    for (let i = 0; i < AFFIRMATION_GALLERY.length; i++) {
      const affiramtionData = AFFIRMATION_GALLERY[i].data;
      const affiramtionToStart = affiramtionData.find(
        (a) => a.id === Number(itemId)
      );

      if (affiramtionToStart) {
        setAffirmation(affiramtionToStart);

        const affiramtionsArray = affiramtionToStart.text.split(".");

        if (affiramtionsArray[affiramtionsArray.length - 1] === "") {
          affiramtionsArray.pop();
        }
        setSentence(affiramtionsArray);

        break;
      }
    }
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={affiramtion?.image}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <LinearGradient
          style={{ flex: 1 }}
          colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}
        >
          <Pressable
            style={{ paddingTop: 40, paddingLeft: 10}}
            onPress={() => router.back()}
          >
            <AntDesign name="leftcircleo" size={34} color="#FFF" />
          </Pressable>

          <ScrollView
            style={{ marginTop: 20 }}
            showsVerticalScrollIndicator={false}
          >
            <View
              style={{
                height: "100%",
                justifyContent: "center",
                paddingInline: 10,
              }}
            >
              {sentence.map((s, index) => (
                <Text
                  key={index}
                  style={{
                    justifyContent: "center",
                    color: "white",
                    fontSize: 28,
                    fontWeight: "500",
                    marginTop: 20,
                  }}
                >
                  <Text style={{ fontWeight: "800" }}>{index + 1})</Text> {s}.
                </Text>
              ))}
            </View>
          </ScrollView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPratice;
