import React, {useState} from 'react';
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./profileScreenStyle";
import { firebase } from '../../firebase';
import {Provider} from 'react-redux';
import {store} from '../../redux/store';
import {useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = ({route ,navigation}) => {
 

    return(
        <Provider store={store}>
            <ProfileScreenWrap/>
        </Provider>
    );
}

const ProfileScreenWrap = () => {
    const navigator = useNavigation();
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [balance,setBalance] = useState(0);
    const uid = useSelector(state => state.id);
    const user = firebase.database().ref('users/'+uid);
    user
        .once('value')        
        .then(function(snapshot) {
            setBalance(50000);
            setEmail(snapshot.val().email);
            setUsername(snapshot.val().username);
        })
        .catch(error => {
            alert(error)
        });
    
    const onSignOutClick = () => {
        return(
            firebase
            .auth()
            .signOut()
            .then(function() {
                // Sign-out successful.
                navigator.navigate('Login');
            })
            .catch(error => {
                alert(error)
            })

        );
    }

    return(
        <View>
            <View style={[styles.container,{backgroundColor: 'grey'}]}>
            </View>
            <View style={[styles.container,{justifyContent: "center", alignItems: "center"}]}>
                <Text>Email : {email}</Text>
                <Text>Username : {username}</Text>
                <Text>Balance : {balance}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => onSignOutClick()} style={{ backgroundColor: 'red'}}><Text style={{ color: 'white', fontWeight: "bold"}}>Sign Out</Text></TouchableOpacity>
            </View>
            <View style={[styles.container,{ backgroundColor: '#ff6200'}]}>
            </View>
        </View>
    );
}

export default ProfileScreen;
