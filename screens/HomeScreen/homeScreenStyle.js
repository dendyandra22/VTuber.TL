import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({    
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center'
        },
        ImageHeader: {
          width: Dimensions.get("window").width,                                    
          height: 270,   
          flex: 1  
        },
      //   ImageOverlay: {
      //     width: 300,
      //     height: 18,
      //     bottom: 0,
      //     marginRight: 8,
      //     borderBottomLeftRadius: 20,
      //     borderBottomRightRadius: 20,
      //     position: "absolute",
      //     backgroundColor: '#000',
      //     opacity: 0.5
      //   },
        SearchContainer: {
            paddingTop: 130,
            paddingLeft: 16
        },
        SearchBox: {
            marginTop: 5,
            backgroundColor: 'white',
            paddingLeft: 24,
            padding: 12,
            borderTopRightRadius: 40,
            borderBottomRightRadius: 40,
            width: Dimensions.get("window").width - 35
        },
        DarkOverlay: {
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            height: 270,
            backgroundColor: '#000',
            opacity: 0.35,
            borderBottomRightRadius: 65
        },
        UserGreet: {
            fontSize: 28,
            fontWeight: "bold",
            color: "white"
        },
        UserText: {
          fontSize: 16,
          fontWeight: "normal",
          color: "white"
        },
        TextHeader: {
            fontSize: 22,
            fontWeight: "bold",
            padding: 12
        },
        TextImage: {
          position: "absolute",
          fontSize: 16,
          fontWeight: "bold",
          color: "black",        
          bottom: 32,
          left: 42
          
        },
      });    
