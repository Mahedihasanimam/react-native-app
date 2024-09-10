import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  ScrollView,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={<Image source={{uri:'https://api.reliasoftware.com/uploads/the_complete_guide_to_mobile_app_development_2021_ded2abd1b1.png'}} style={styles.reactLogo} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to my app..!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">React Native </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">i am inspired to learn react native from react because i am a react developer</ThemedText>
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: "cmd + d", android: "cmd + m" })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>

      <View style={styles.boxmodel}>
        <View style={{ backgroundColor: "", flex: 0.3, }} />
        <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>
         It was popularised in the 1960s with the releassde of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
        </Text>
      </View>
      <Image style={{height:200}}  source={{uri:'https://cdn.prod.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5758186fbd8_ABM%20college%20mobile%20app%20dev%20main.jpg'}}  />
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Ste 2: Exploree</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about swhat's incleded in sdfsdfthis
          starter app
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{" "}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{" "}
          to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
          directory. This will move the current{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
          <ThemedText type="defaultSemiBold">app-examsple</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  boxmodel: {
    padding: 25,
    borderRadius: 5,
    backgroundColor: "#16325B",
    color: "white",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 420,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
