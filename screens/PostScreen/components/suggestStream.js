import React, {useState} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from "../postScreenStyle";
import { useNavigation } from '@react-navigation/native';

export const SuggestStream = () => {
    const dispatch = useDispatch();

    const navigation = useNavigation();

    const goToPost = (uriStream,titleStream) => {
        dispatch({type: 'SELECT_STREAM',payload: {uri: uriStream,title: titleStream}});
        navigation.navigate('Post');
    }
    const [suggest, setSuggest] = useState([
        {image: {uri: 'https://i.ytimg.com/vi/edMJeQiZI9Q/maxresdefault.jpg'}, title: 'An Actual Idol??? Debut', key: '1'},
        {image: {uri: 'https://i.ytimg.com/vi/hQASkhpMBf0/maxresdefault.jpg'}, title: 'New VTuber Lolo', key: '2'},
        {image: {uri: 'https://i.ytimg.com/vi/TkV65v81ABM/maxresdefault.jpg'}, title: 'Bedtime Story with Risu', key: '3'},
        {image: {uri: 'https://i.ytimg.com/vi/jSQlXpxpWC0/maxresdefault.jpg'}, title: 'First Stream Alia Adelia', key: '4'},
        {image: {uri: 'https://i.ytimg.com/vi/qTRwUE0yKWI/maxresdefault.jpg'}, title: 'Luna Broke Haachama', key: '5'},
      ]);


    return(
        <ScrollView>
            <View style={{justifyContent: "space-between", flexDirection: "row", alignItems: "center"}}>
                <Text style={styles.TextHeading}>Watch Next</Text>
                <Text style={{color:"#ff6200", fontWeight: "bold", padding: 20}}>View All</Text>
            </View>
            <View >
                <FlatList 
                    data={suggest}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.key}
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