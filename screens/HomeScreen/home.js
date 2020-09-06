import React, {useState} from 'react';
import { Text, View, ImageBackground, ScrollView, TextInput, Dimensions } from 'react-native';
import {Feather} from '@expo/vector-icons'
import styles from "./homeScreenStyle";
import {Provider} from 'react-redux';
import {store} from '../../redux/store'
import {TrendingStream} from "./components/trendingStream";
import { LatestStream } from "./components/latestStream";
import { RecenttStream } from "./components/recentStream";

const Home = () => {
    return(
        <Provider store={store}>
            <HomeWrap />
        </Provider>
        
    )
}

const HomeWrap = () => {   

    // const image = {uri: "https://i0.wp.com/urbandigital.id/wp-content/uploads/2018/12/20180511.jpg?fit=768%2C380&ssl=1"};
    const image = {uri: "https://assets.st-note.com/production/uploads/images/18226002/rectangle_large_type_2_f27f09da9e99c790802749b41d96a271.png?fit=bounds&quality=60&width=1280"};
    

    return (
        <View style={{flexGrow: 1, height: Dimensions.get("window").height, paddingBottom: 24}}>            
            <ScrollView sty>
                <View style={{height: 270}}>                
                    <ImageBackground
                        source={image}
                        style={styles.ImageHeader}
                        imageStyle={{borderBottomRightRadius: 65}}
                    >             
                        <View style={styles.DarkOverlay}></View>  
                        <View style={styles.SearchContainer} >
                            <Text style={styles.UserGreet}>Welcome to VTuber.TL</Text>
                            <Text style={styles.UserText}>Enjoy VTuber stream easily with subtitle</Text>
                        </View>
                        <View>
                            <TextInput
                                style={styles.SearchBox}
                                placeholder='Search Clip'
                                placeholderTextColor='#666'
                            >
                            </TextInput>
                            <Feather name='search' size={22} color='#666' style={{
                                position: "absolute",
                                top: 21,
                                right: 55,
                                opacity: 0.6
                            }} />                        
                        </View>
                        <Feather name='menu' size={22} color='#fff' style={{
                            position: "absolute",
                            top: 40,
                            left: 16
                        }} />
                        <Feather name='bell' size={22} color='#fff' style={{
                            position: "absolute",
                            top: 40,
                            right: 30
                        }} />
                    </ImageBackground>                                    
                </View>
                <TrendingStream />
                <LatestStream/>
                <RecenttStream/>
            </ScrollView>
            
        </View>
    );
}



export default Home;
