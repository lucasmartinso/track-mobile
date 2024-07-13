import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Platform, TextInput, Button } from 'react-native';

function LoginScreen(props) {
    const [ email, setEmail ] = useState(''); 

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputs}>
                <TextInput 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? 20 : 0,
    flexDirection: "row",
    //justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    alignContent: "center" //tem que usar no wrap pra centralizar verticalmente
  },

  inputs: {
    flex: 1, 
    flexDirection: "row",
    justifyContent: "center", 
    alignContent: "center"
  }
})

export default LoginScreen;