import React, {useState} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from "../homeScreenStyle";
import { useNavigation } from '@react-navigation/native';

export const LatestStream = () => {
    const dispatch = useDispatch();

    const navigation = useNavigation();

    const goToPost = (uriStream,titleStream) => {
        dispatch({type: 'SELECT_STREAM',payload: {uri: uriStream,title: titleStream}});
        navigation.navigate('Post');
    }

    const [latest, setLatest] = useState([
        {image: {uri: 'https://i.ytimg.com/vi/qTRwUE0yKWI/maxresdefault.jpg'}, title: 'Luna Broke Haachama', key: '1'},
        {image: {uri: 'https://i.ytimg.com/vi/1LOoNQtpmLY/maxresdefault.jpg'}, title: 'The Reason Furen Joined Nijisanji', key: '2'},
        {image: {uri: 'https://hyoshiyuki.files.wordpress.com/2019/12/baguettechan2.jpg?w=1024'}, title: 'Baguette Debut Stream', key: '3'},
        {image: {uri: 'https://i.ytimg.com/vi/edMJeQiZI9Q/maxresdefault.jpg'}, title: 'An Actual Idol??? Debut', key: '4'},
        {image: {uri: 'https://i.ytimg.com/vi/-pPu0cojEWQ/maxresdefault.jpg'}, title: 'Marie English Stream', key: '5'},
    ]);


    return(
        <ScrollView>
            <View style={{justifyContent: "space-between", flexDirection: "row", alignContent: "center"}}>
                <Text style={styles.TextHeader}>Latest Stream</Text>
                <Text style={{color:"#ff6200", fontWeight: "bold", padding: 20}}>View All</Text>
            </View>
            <View>
                <FlatList 
                    data={latest}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.image}
                    renderItem={({item}) => {
                        return(
                            <View style={{paddingLeft: 16}}>
                                <TouchableOpacity 
                                    onPress={() => goToPost(item.image,item.title)}
                                    >
                                    <Image source={item.image} style={{
                                        width: 300,
                                        height: 180,
                                        marginRight: 8,
                                        borderRadius: 20,
                                        resizeMode: "contain"    
                                    }} 
                                    />                                           
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />                
            </View>                
        </ScrollView>
    );
}