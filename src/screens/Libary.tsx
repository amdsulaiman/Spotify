import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, Text, Header, theme } from "../components";

const PlayList = () => {
  return (
    <Box>
      <Text variant="title2">PlayLists</Text>
    </Box>
  );
};
const Artists = () => {
  return (
    <Box>
      <Text variant="title2">Artists</Text>
    </Box>
  );
};
const Albums = () => {
  return (
    <Box>
      <Text variant="title2">Albums</Text>
    </Box>
  );
};

const Libary = () => {
  const [isMusic, setIsMusic] = useState("music");
  const [isPlaylist, setIsPlaylist] = useState(false);
  const [isArtist, setIsArtist] = useState(false);
  const [isAlbum, setIsAlbum] = useState(false);
  const handleMusicChange = (title: string) => {
    if (title === "playlists") {
      setIsPlaylist(true);
      setIsArtist(false);
      setIsAlbum(false);
    } else if (title === "artists") {
      setIsPlaylist(false);
      setIsArtist(true);
      setIsAlbum(false);
    } else if (title === "albums") {
      setIsPlaylist(false);
      setIsArtist(false);
      setIsAlbum(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Box flex={1}>
        <Box marginVertical="l" marginHorizontal="m" flexDirection="row">
          <TouchableWithoutFeedback onPress={() => setIsMusic("music")}>
            <Text
              color={isMusic === "music" ? "text" : "border"}
              variant="title1"
            >
              {" "}
              Music
            </Text>
          </TouchableWithoutFeedback>
          <Box width={20} />
          <TouchableWithoutFeedback onPress={() => setIsMusic("podcasts")}>
            <Text
              color={isMusic === "podcasts" ? "text" : "border"}
              variant="title1"
            >
              {" "}
              Podcasts
            </Text>
          </TouchableWithoutFeedback>
        </Box>
        <Box marginHorizontal="m">
          {isMusic === "music" ? (
            <Box>
              <Box flexDirection="row">
                <TouchableWithoutFeedback
                  onPress={() => handleMusicChange("playlists")}
                >
                  <Box marginRight="s">
                    <Text variant="title2"> Playlists</Text>
                    { isPlaylist ? 
                    <Box width="90%" height={4} backgroundColor='borderLine' margin="s" alignContent='center' />
                    : null }
                  </Box>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() => handleMusicChange("artists")}
                >
                  <Box marginHorizontal="s">
                    <Text variant="title2"> Artists</Text>
                    { isArtist ? 
                    <Box width="90%" height={4} backgroundColor='borderLine' margin="s" alignContent='center' />
                    : null }
                  </Box>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() => handleMusicChange("albums")}
                >
                  <Box marginHorizontal="s">
                    <Text variant="title2"> Albums</Text>
                    { isAlbum ? 
                    <Box width="90%" height={4} backgroundColor='borderLine' margin="s"  alignContent='center'/>
                    : null }
                  </Box>
                </TouchableWithoutFeedback>
              </Box>
              <Box>
                {isPlaylist ? <PlayList /> : null}
                {isArtist ? <Artists /> : null}
                {isAlbum ? <Albums /> : null}
              </Box>
            </Box>
          ) : (
            <Box>
              <Text variant="title2">Podcasts</Text>
            </Box>
          )}
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default Libary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
});
