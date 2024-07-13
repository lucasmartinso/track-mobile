import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, Dimensions, TouchableHighlight, View, Alert, Button, SafeAreaView } from 'react-native';

import LoginScreen from "./app/screen/Login";

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name='home' component={LoginScreen} />
        <Stack.Screen name='signup' component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaView style={[styles.container, containerStyle]}>
    //   {/* <Text numberOfLines={2} onPress={() => console.log("Clicou")}>Hello World</Text> */}
    //   {/* <TouchableHighlight> */}
    //     {/* <Image
    //       // blurRadius={10}
    //       source={{
    //         width: 200, 
    //         height: 300,
    //         uri: "https://img.elo7.com.br/product/zoom/2FA8C62/adesivo-decorativo-parede-fone-som-e-musica-quarto.jpg"}
    //       }
    //     /> */}
    //     {/* <View style={{ width: 200, height: 100, backgroundColor: "red"}}></View> */}
    //     {/* <Button 
    //       title="Entrar"
    //       onPress={() => Alert.alert("Clicou","Mensagem", [{text: "Yes"}, {text: "No"}])}
    //     />
    //   </TouchableHighlight> */}
    //   <View 
    //     style={{ 
    //       backgroundColor: "tomato",
    //       width: 100, 
    //       height: 100,
    //       flexGrow: 1, //preenche o espaco vazio
    //       flexShrink: 1 //nao deixa estourar o espaco do flexGrow
    //     }}
    //   />
    //   <View 
    //     style={{ 
    //       backgroundColor: "blue",
    //       width: 100, 
    //       height: 100
    //     }}
    //   />
    //   <View 
    //     style={{ 
    //       backgroundColor: "yellow",
    //       width: 100, 
    //       height: 100, 
    //       alignSelf: "flex-start"
    //     }}
    //   />
    //   <StatusBar style="auto" />
    // </SafeAreaView>
  );
}

const containerStyle = { 
  backgroundColor: "#fff"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //paddingTop: Platform.OS === "android" ? 20 : 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    alignContent: "center" //tem que usar no wrap pra centralizar verticalmente
  },
});
