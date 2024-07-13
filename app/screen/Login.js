import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Platform, TextInput, Button, Image, Text, TouchableOpacity } from 'react-native';

function LoginScreen(props) {
    const [ email, setEmail ] = useState(''); 
    const [ password, setPassword ] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Image
                    source={require('../assets/track.png')}
                    style={{ width: 220, height: 200, alignSelf: "center", objectFit: "cover" }}
                />
                <TextInput 
                    style={styles.inputs}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TextInput 
                    style={styles.inputs}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TouchableOpacity style={styles.buttons}>
                    <Text style={{color: 'white', fontSize: 18}}>Entrar</Text>
                </TouchableOpacity>
                <Text style={styles.sign}>Não tem uma conta? Cadastre-se!</Text>
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
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    alignContent: "center" //tem que usar no wrap pra centralizar verticalmente
  },
  main: {
    width: '80%',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", 
    alignContent: "center"
  },
  inputs: {
    width: '100%', 
    height: 60,
    backgroundColor: "#F2F2F2",
    padding: 20,
    borderRadius: 12, 
    marginTop: 30,
  }, 
  buttons: {
    backgroundColor: '#52b5fd',
    width: '100%', 
    height: 60,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },
  sign: { 
    width: '100%',
    textAlign: 'center',
    color: '#52b5fd', 
    textDecorationLine: 'underline',
    marginTop: 30
  }
})

export default LoginScreen;