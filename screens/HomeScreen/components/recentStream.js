import React, {useState} from 'react';
import {Text, View, Image, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from "../homeScreenStyle";
import { useNavigation } from '@react-navigation/native';

export const RecenttStream = () => {
    const dispatch = useDispatch();

    const navigation = useNavigation();

    const goToPost = (uriStream,titleStream) => {
        dispatch({type: 'SELECT_STREAM',payload: {uri: uriStream,title: titleStream}});
        navigation.navigate('Post');
    }

    const [recent, setRecent] = useState([
        {image: {uri: 'https://i.ytimg.com/vi/ky3QozZIFfU/maxresdefault.jpg'}, title: 'Yummy Gyoza', key: '1'},
        {image: {uri: 'https://i.ytimg.com/vi/TQTZfBHrB_A/maxresdefault.jpg'}, title: 'Let\'s Talk with Noor', key: '2'},
        {image: {uri: 'https://www.risamedia.com/content/images/wordpress/2019/04/mintchan.jpg'}, title: 'Mintchan Debut Stream', key: '3'},        
        {image: {uri: 'https://hyoshiyuki.files.wordpress.com/2019/12/baguettechan2.jpg?w=1024'}, title: 'Baguette Debut Stream', key: '4'},
        {image: {uri: 'https://i.ytimg.com/vi/va-LdLWwazw/maxresdefault.jpg'}, title: 'Why Fans Do Love Mea?', key: '5'},
    ]);


    return(
        <ScrollView>
            <View style={{justifyContent: "space-between", flexDirection: "row", alignContent: "center"}}>
                <Text style={styles.TextHeader}>Recenly Watched</Text>
                <Text style={{color:"#ff6200", fontWeight: "bold", padding: 20}}>View All</Text>
            </View>
            <View>
                <FlatList 
                    data={recent}
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