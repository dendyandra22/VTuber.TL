import React, {useState} from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./signInScreenStyle";
import { firebase } from '../../firebase'




const SignInScreen = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');

    const onSignInPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    username,
                };
                // const usersRef = firebase.firestore().collection('users')
                const usersRef = firebase.database().ref('users/'+data.id)

                usersRef
                    // .doc(uid)
                    .set(data)
                    .then(() => {
                        navigation.navigate('Login')
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
        });
    }

    return(
        <View style={styles.outerContainer} >
           
            <View style={[styles.container, styles.contentcontainer]}>
                <View><Text>Sign In </Text></View>
                <View >
                    <TextInput style={styles.textInput} placeholder='Email' textContentType="emailAddress" value={email} onChangeText={(text) => setEmail(text)}/>
                </View>
                <View >
                    <TextInput style={styles.textInput} placeholder='Username' value={username} onChangeText={(text) => setUsername(text)} />
                </View>
                <View >
                    <TextInput style={styles.textInput} placeholder='Password' secureTextEntry value={password} onChangeText={(text) => setPassword(text)}/>
                </View>
                <View >
                    <TextInput style={styles.textInput} placeholder='Confirm Password' secureTextEntry value={confirmPassword} onChangeText={(text) => setConfirmPassword(text)}/>
                </View>                
                <View style={[styles.container]}>
                    <View><TouchableOpacity onPress={() => onSignInPress()}><Text style={styles.loginButton}>Sign In</Text></TouchableOpacity></View>                                                                    
                </View>
                </View>
                
             
        </View>
    );
    
}

export default SignInScreen;