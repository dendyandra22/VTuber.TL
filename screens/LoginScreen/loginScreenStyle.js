import { StyleSheet, Dimensions, Platform } from "react-native";

export default StyleSheet.create({
    outerContainer: {
        alignSelf: "center",
        // justifyContent: "center",
        // shadowColor: 'black',
        // shadowOpacity: 0.8,
        // shadowRadius: 3,
        // height: Dimensions.get("window").height, 
        height: Platform.OS == "android"? Dimensions.get("window").height : 500,
        // height: 800, 
        // width: Dimensions.get("window").width,
        width: Platform.OS == "android"? Dimensions.get("window").width : 400,
        backgroundColor: "#fff" ,
        marginHorizontal: 16,
        marginVertical: 16,
    },
    contentcontainer: {
        // justifyContent: "center",
        // shadowColor: 'black',
        // shadowOpacity: 0.8,
        // shadowRadius: 3,
    },
    container: {
        // flex: 1,
        // marginHorizontal: 16,
        marginVertical: 8,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Open Sans",             
    },
    logo: {
        height: 128,
        width: 128
    },
    textInput: {
        marginVertical: 8,   
        padding: 8,  
        fontSize: 16,
        borderBottomWidth: 1,
        // width: Dimensions.get("screen").width-64
        width: Platform.OS == 'android'? Dimensions.get("screen").width-64 : 300
    },
    loginButton: {
        backgroundColor: "#ff6200",
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        // width: Dimensions.get("screen").width-64,
        width: Platform.OS == 'android'? Dimensions.get("screen").width-64 : 300,
        height: 36,
        marginVertical: 8,
        textAlign: "center",
        padding: 4,
        borderRadius: 50
    }

});