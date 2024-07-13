import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Dimensions, TouchableHighlight, View, Alert, Button, SafeAreaView } from 'react-native';
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
//import WelcomeScreen from './app/screen/WelcomeScreen';
import LoginScreen from "./app/screen/Login";

export default function App() {
  const { landscape } = useDeviceOrientation();
  //console.log(Dimensions.get("screen").width);

  return (
    <LoginScreen />
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
