import React from 'react';
import { StyleSheet, Image } from 'react-native';


function WelcomeScreen(props) {
    return (
        <></>
        //<Image resizeMode='contain' styles={styles.image} source={require("../assets/perfil.jpeg")}></Image>
    );
}

const styles = StyleSheet.create({
    image: { 
        width: "100%",
        height: "100%", 
        objectFit: "contain"
    }
})

export default WelcomeScreen;