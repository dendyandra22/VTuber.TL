import React, {useState} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from "../homeScreenStyle";
import { useNavigation } from '@react-navigation/native';

export const TrendingStream = () => {
    const dispatch = useDispatch();

    const navigation = useNavigation();

    const goToPost = (uriStream,titleStream) => {
        dispatch({type: 'SELECT_STREAM',payload: {uri: uriStream,title: titleStream}});
        navigation.navigate('Post');
    }

    const [trending, setTrending] = useState([
        {image: {uri: 'https://i.ytimg.com/vi/jSQlXpxpWC0/maxresdefault.jpg'}, title: 'First Stream Alia Adelia', key: '1'},
        {image: {uri: 'https://i.ytimg.com/vi/va-LdLWwazw/maxresdefault.jpg'}, title: 'Why Fans Do Love Mea?', key: '2'},
        {image: {uri: 'https://i.ytimg.com/vi/hQASkhpMBf0/maxresdefault.jpg'}, title: 'New VTuber Lolo', key: '3'},
        {image: {uri: 'https://i.ytimg.com/vi/NbWmiN3zd_A/maxresdefault.jpg'}, title: 'Freetalk Enji ft Raska', key: '4'},
        {image: {uri: 'https://i.ytimg.com/vi/TkV65v81ABM/maxresdefault.jpg'}, title: 'Bedtime Story with Risu', key: '5'},
    ]);


    return(
        <ScrollView>
            <View style={{justifyContent: "space-between", flexDirection: "row", alignContent: "center"}}>
                <Text style={styles.TextHeader}>Trending Stream</Text>
                <Text style={{color:"#ff6200", fontWeight: "bold", padding: 20}}>View All</Text>
            </View>
            <View>
                <FlatList 
                    data={trending}
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