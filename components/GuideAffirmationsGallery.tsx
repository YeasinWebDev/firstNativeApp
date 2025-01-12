import { View, Text, FlatList, Pressable, Image } from "react-native";
import React from "react";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import { Link } from "expo-router";

interface GuideAffirmationsGallery {
  title: string;
  preview: GalleryPreviewData[];
}
const GuideAffirmationsGallery = ({
  title,
  preview,
}: GuideAffirmationsGallery) => {
  return (
    <View>
      <View style={{ marginTop: 15 , marginBottom:5}}>
        <Text style={{ color: "white", fontWeight: 800, fontSize: 20 }}>
          {title}
        </Text>
      </View>

      <View>
        <FlatList
          data={preview}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(i) => i.id.toString()}
          horizontal
          renderItem={({ item }) => (
            <Link href={`/affirmations/${item.id}`} asChild>
              <Pressable>
                <View
                  style={{
                    height: 120,
                    width: 128,
                    borderRadius: 6,
                    marginRight: 4,
                    overflow: "hidden"
                  }}
                >
                    <Image source={item.image} resizeMode="cover" style={{width:"100%",height:'100%'}}/>
                </View>
              </Pressable>
            </Link>
          )}
        />
      </View>
    </View>
  );
};

export default GuideAffirmationsGallery;
