// import { View, Text, Image } from "react-native";

// const Home = () =>{
    
//     return (
//         <View>
//             <Text>Welcome to gallery</Text>
//             <Image source={require('images\pineapple.png')} />
           
//         </View>
//     )
// }
 
// export default Home;


import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const Home = () => {
  
  return (
    <View >
      <Text style={styles.text}>Welcome to the gallery</Text>
      <View style = {styles.imageContainer}>
        <Image source={require("./pexels-1.jpg")} style={styles.image} />
        <Image source={require("./pexels-2.jpg")} style={styles.image} />
        <Image source={require("./pexels-3.jpg")} style={styles.image} />
        <Image source={require("./pexels-4.jpg")} style={styles.image} />
        <Image source={require("./pexels-5.jpg")} style={styles.image} />
        <Image source={require("./pexels-6.jpg")} style={styles.image} />
        <Image source={require("./pexels-7.jpg")} style={styles.image} />
        <Image source={require("./pexels-8.jpg")} style={styles.image} />
        <Image source={require("./pexels-9.jpg")} style={styles.image} />
        <Image source={require("./pexels-10.jpg")} style={styles.image} />
        <Image source={require("./pexels-11.jpg")} style={styles.image} />
        <Image source={require("./pexels-12.jpg")} style={styles.image} />
      </View>
    </View>
  );
};
const dimensions = Dimensions.get('window');
const width = dimensions.width;


const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width: width / 3,
    height: width / 3,
  },
});

export default Home;
