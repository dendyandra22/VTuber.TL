import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
      marginLeft: 8
    },
    Image: {
      height: 240,  
      width: Dimensions.get("window") .width,    
    },
    TextTitle: {    
      fontWeight: "bold",
      fontSize: 28,
      marginLeft: 8,
    },
    TextSubTitle: {
      fontSize: 16,   
      margin: 8 
    },
    TextHeading: {    
      fontWeight: "bold",
      fontSize: 20,        
      flex: 1,
      justifyContent: "center"
    },
    TextContent: {
      fontSize: 16,   
      textAlign:"justify",
      flex: 1
    },
    TextButton: {
      textAlign: "center",
      color: "white",
      fontSize: 20,
      fontWeight: "bold"    
    },
    Button: {
      backgroundColor: "#ff6200",
      fontWeight: "bold",
      flex: 1,
      margin: 4,
      height: 38,
      justifyContent: "center"
    }
  });