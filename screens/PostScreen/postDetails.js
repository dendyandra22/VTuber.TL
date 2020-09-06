import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import { Octicons } from '@expo/vector-icons';
import {Provider} from 'react-redux';
import {store} from '../../redux/store'
import {useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {SuggestStream} from "./components/suggestStream";
import styles from "./postScreenStyle";

const Post = ({navigation}) => {

  

  return (
    <Provider store={store}>       
      <View style={{height:28}}/>            
      <PostWrap />
    </Provider>
    
    
  );
}



const PostWrap = () => {
  const image = useSelector(state => state.uri);

  const title = useSelector(state => state.title);

  const navigation = useNavigation();

  const goToHome = () => {
    navigation.goBack()
  }

  // const image = {uri: "https://i.ytimg.com/vi/TkV65v81ABM/maxresdefault.jpg"}; 
  
  return(          
    <ScrollView>
    
    <View>            
        <ImageBackground source={image} style={styles.Image} resizeMode="stretch" borderBottomLeftRadius={30} borderBottomRightRadius={30}>
          <TouchableOpacity style={{position: "absolute", left: 16, top: 28, backgroundColor: '#ff6200', padding: 6, borderRadius: 40}} onPress={goToHome}>
            <Feather name="arrow-left" size={20} color="white" />
          </TouchableOpacity>
        </ImageBackground>                 
    </View>
    <View style={styles.container}>
      <Text style={styles.TextTitle}>{title}</Text>
      <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
        <Text style={styles.TextSubTitle}>by </Text>
        <TouchableOpacity><Text style={{fontSize: 16 ,color: '#ff6200', marginBottom: 8}}>Hololive Indonesia </Text></TouchableOpacity>
        <Octicons name="verified" size={14} color="#ff6200" style={{marginBottom: 8}}/>        
      </View>
    </View>    
    <View style={styles.container}>
      <TouchableOpacity style={styles.Button}><Text style={styles.TextButton}>Watch Now</Text></TouchableOpacity>        
    </View>
    <View style={{flex: 1, flexDirection: "row", marginHorizontal: 16}}>
      <TouchableOpacity style={styles.Button}><Text style={styles.TextButton}>Favorite</Text></TouchableOpacity>
      <View style={{width:8}}/>
      <TouchableOpacity style={styles.Button}><Text style={styles.TextButton}>Watch Later</Text></TouchableOpacity>
    </View>
    <View style={styles.container}>        
      <Text style={styles.TextHeading}>Description</Text>
      <View style={{flex:1 , flexDirection: "row", alignItems: "center"}}>
        <Text style={styles.TextContent}>Date Uploaded </Text>
        <Text style={{flex:2}}>: 16 July 2020</Text>
      </View> 
      <View style={{flex:1 , flexDirection: "row", alignItems: "center"}}>
        <Text style={styles.TextContent}>Duration </Text>
        <Text style={{flex:2}}>: 01:43:55</Text>
      </View> 
      <View style={{flex:1 , flexDirection: "row", alignItems: "center"}}>
        <Text style={styles.TextContent}>Subtitles </Text>
        <Text style={{flex:2}}>: English, Japanese, Spanish</Text>
      </View> 
      <View style={{flex:1 , flexDirection: "row", alignItems: "center"}}>
        <Text style={styles.TextContent}>Tag </Text>
        <Text style={{flex:2}}>: ASMR, HololiveID</Text>
      </View>              
    </View>
    <View style={styles.container}>
      <Text style={styles.TextHeading}>Synopsis</Text>
      <Text style={styles.TextContent}>Risu will tell you an interesting and comfortable story that is suitable to be heard right at your bedtime. 
        Will the story make you fall asleep soundly, or make you even more interested in the storyline? </Text>      
    </View>        
    <View style={styles.container}>
      <SuggestStream/>
    </View>
    <View style={{marginBottom: 16}}/>
  </ScrollView>  
  );
}

const mapState = (state) => {
  return {uri: state.uri}
}

export default Post;
