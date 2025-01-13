import { View, Text, ImageBackground, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MEDITATION_IMAGES from "@/constants/Meditation-images";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import CustomButton from "@/components/CustomButton";
import { Audio } from "expo-av";
import { MEDITATION_DATA, AUDIO_FILES } from "@/constants/Meditation-data";
import { TimerContext } from "@/context/TimerContext";

const Meditate = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const {duration:secondReminder ,setDuration:setSecondReminder} = useContext(TimerContext)

  // const [secondReminder, setSecondReminder] = useState(10);
  const [isMeditating, setIsMeditating] = useState(false);
  const [audioSound, setAudioSound] = useState<Audio.Sound>();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (secondReminder === 0) {
      setIsMeditating(false);
      setSecondReminder(0);
      return;
    }

    if (isMeditating) {
      timerId = setTimeout(() => setSecondReminder(secondReminder - 1), 1000);
    }

    return () => clearTimeout(timerId);
  }, [secondReminder, isMeditating]);

  useEffect(()=>{
    return ()=>{
      setSecondReminder(10)
      audioSound?.unloadAsync()  
    }
  },[audioSound])

  // Format the timeLeft to ensure two digits are displayed
  const formattedTimeMinutes = String(Math.floor(secondReminder / 60)).padStart(
    2,
    "0"
  );
  const formattedTimeSeconds = String(secondReminder % 60).padStart(2, "0");

  const toggleMeditationSessionStatus = async () => {
    if (secondReminder === 0) setSecondReminder(10);

    setIsMeditating(!isMeditating);

    await toggleSound()
  };

  const initializeSound = async () => {
    const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;

    const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[audioFileName]);
    setAudioSound(sound);
    return sound;
  };

  const toggleSound = async () => {
    const sound = audioSound ? audioSound : await initializeSound();

    const status = await sound?.getStatusAsync()

    if (status?.isLoaded && !isPlaying) {
      await sound.playAsync();
      setIsPlaying(true);
    } else {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const handleAdjustDuration = () =>{
    if(isMeditating) toggleMeditationSessionStatus()
      router.push("/(model)/adjust-meditation-duration")
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={MEDITATION_IMAGES[Number(id) - 1]}
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
          <View style={{ flex: 1, justifyContent: "center" }}>
            <View
              style={{
                marginInline: "auto",
                backgroundColor: "#f2f2f2",
                borderRadius: "50%",
                height: 180,
                width: 180,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 30,
                  color: "blue",
                  fontFamily: "serif",
                }}
              >
                {formattedTimeMinutes}:{formattedTimeSeconds}
              </Text>
            </View>
          </View>

          <View style={{ marginBottom: 15, marginInline: 20 }}>
            <CustomButton
              title="Adjust duration"
              onPress={() => handleAdjustDuration()}
            />
            <CustomButton
              title="Start Meditation"
              onPress={() => toggleMeditationSessionStatus()}  
              containerStyle={{marginTop:14}}            
            />
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
