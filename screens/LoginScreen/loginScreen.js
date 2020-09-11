import React, {useState} from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./loginScreenStyle";
import { firebase } from '../../firebase';
import {useDispatch} from 'react-redux';
import {Provider} from 'react-redux';
import {store} from '../../redux/store';


const LoginScreen = () => {
    return(
        <Provider store={store}>
            <LoginScreenWrap/>
        </Provider>
    )
}

const LoginScreenWrap = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();

    const onLoginPress = () => {
        
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.database().ref('/users/'+uid)
                usersRef
                    .once('value')
                    // .doc(uid)
                    // .get()
                    .then(function(snapshot) {
                        if (!snapshot.val() == null) {
                            alert("User does not exist anymore.")
                            return;
                        }
                        // const user = {
                        //     email: snapshot.val().email,
                        //     username : snapshot.val().username,
                        //     balance : 50.000};           
                        dispatch({type: 'USER_LOGIN', payload: {id: uid}} )
                        // navigation.navigate('Profile',{user})
                        navigation.navigate('DrawerNav')
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }

    return(
        <View style={styles.outerContainer} >
            <View style={[styles.container, styles.contentcontainer,{alignItems: "center"}]}>
                <Image source={require('./assets/py.png')} style={styles.logo}/>
            </View>
            <View style={[styles.container, styles.contentcontainer]}>
                <View >
                    <TextInput style={styles.textInput} placeholder='Email' value={email} onChangeText={(text) => setEmail(text)} keyboardType={"email-address"} />
                </View>
                <View >
                    <TextInput style={styles.textInput} placeholder='Password' value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} keyboardType={"default"}/>
                </View>
                <View style={[styles.container, styles.contentcontainer,{flexDirection: "row", flex: 1, alignContent: "flex-end" }]}>
                    <View style={{flex: 1,height:4}}></View>
                    <View style={{flex: 1,flexDirection:"row" , height: 32, alignItems:"center", justifyContent: "flex-end" }}>
                        <TouchableOpacity><Text >Forgot Password?</Text></TouchableOpacity>
                    </View>
                    
                </View>
                <View style={[styles.container]}>
                    <View><TouchableOpacity onPress={() => onLoginPress()}><Text style={styles.loginButton}>Login</Text></TouchableOpacity></View>              
                    <View><TouchableOpacity ><Text style={styles.loginButton}>Login with Google</Text></TouchableOpacity></View>                              
                    <View style={{flexDirection:"row"}}><Text>Don't have account? </Text><TouchableOpacity onPress={() => navigation.navigate('SignIn')} ><Text style={{color: '#ff6200', fontWeight:"bold"}}>Sign in</Text></TouchableOpacity></View>                                              
                </View>
                </View>
                
             
        </View>
    );
    
}

export default LoginScreen;