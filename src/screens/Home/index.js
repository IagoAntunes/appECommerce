import React from "react";
import { View,Text as txt, TextInput,StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign, Feather } from '@expo/vector-icons';
import { Container, Text, MenuOpc, Header} from "../../components";
import { FlatList } from "react-native-web";

const FAKE_DATA = [
    {
      id: 0,
      nome: 'teste',
      desc: 'outro',
      preco: '999'
    },
    {
      id: 1,
      image_url:
        'https://network.grupoabril.com.br/wp-content/uploads/sites/4/2020/02/desafio-jedi-de-mestre-yoda-consertar-as-frases-consegue-vocecc82.jpg?quality=100&strip=info',
    }
  ]

export function Home(){
    return(
        <Container>
            <Header/>
            <View style={styles.relogios}>
                <MenuOpc/>

                <View style={styles.listaRelogios}>
                    <View style={{borderWidth: 2}}>
                        <Image source={require('../../../assets/Frame4.png')}/>
                        <Text>Apple Watch</Text>
                        <Text>Series 7</Text>
                        <Text>$799</Text>
                    </View>
                    
                </View>

            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 50,
        borderRadius: 20,
        padding: 5
    },
    relogios:{
        padding: 20
    },
    textoOPC:{
        fontSize: 18,
        marginHorizontal: 5,
        color: '#5B41FF'
    },
    listaRelogios:{
        padding: 20
    }
})