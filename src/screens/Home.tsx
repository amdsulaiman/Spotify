import React  , { useEffect}from 'react'
import { ScrollView, StyleSheet, View , Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Box, Text, theme , Header , SStatusBar } from '../components'
import { Feather as Icon } from '@expo/vector-icons'
import albumCategory from '../data/albumCategory'
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from 'react-redux'
import { fetchUserPlaylist } from '../redux/slices/playlists'
import { getData } from '../Utils/Storage'
import { getCurrentUser } from '../redux/slices/user'
import AsyncStorage  from "@react-native-async-storage/async-storage";


const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserPlaylist());
        getData()
        
      }, []);
      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@access_token')
          if(value !== null) {
            dispatch(getCurrentUser(value));
          }
        } catch(e) {
          // error reading value
        }
      }

    return (
        <LinearGradient colors={["#596164", "#000000"]}>
      <SStatusBar backgroundColor="#000000" />
            <ScrollView>
            <Box  marginVertical="l">
            <Header title="Recently Played" iconName="settings"/>
            </Box>
            <Box>
                <ScrollView>
                {albumCategory.map((item,i)=> {
                    return(
                        <Box key={i}>
                            <Text variant='title1' marginHorizontal='m' marginVertical='m' color="text">{item.title}</Text>
                            <Box>
                            <ScrollView showsHorizontalScrollIndicator={false } horizontal={true}>
                            {item.albums.map((aItem,i) => {
                                return(
                                  <Box margin='s'>
                                      <Image style={styles.thumbImage} source={{uri:aItem.imageUri}}/>
                                      <Box width={120} marginVertical='s'>
                                      <Text variant='body' >{aItem.artistsHeadline}</Text>
                                      </Box>
                                  </Box>
                                )
                            })}
                            </ScrollView>
                            </Box>
                        </Box>
                    )
                })}
                </ScrollView>
            </Box>
            </ScrollView>
        </LinearGradient>
    )
}

export default Home

const styles = StyleSheet.create({
    container : {
        backgroundColor: theme.colors.primary,
        flex:1
    },
    thumbImage : {
        height : 120,
        width : 120,
        borderRadius : 8
    }
})
