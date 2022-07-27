import React from "react";
import { View, TextInput,StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign, Feather } from '@expo/vector-icons';
import { Container, Text, MenuOpc } from "../../components";


export function Home(){
    return(
        <Container>
            <View style={styles.head}>
                <View style={styles.test}>
                    <AntDesign name="bars" size={40} color="black" />
                    <View style={styles.SectionStyle}>
                        <AntDesign name="search1" size={30} color="black" />
                        <TextInput style={styles.input} placeholder="Search Product" underlineColorAndroid="transparent"/>
                    </View>
                </View>
                <Text fontsize={36} fontWeight={'600'} marginTop={50} >Find your suitable  watch now.</Text>
            </View>
            <View style={styles.relogios}>
                <MenuOpc/>
                <View style={styles.listaRelogios}>
                    <View>
                        <Image source={require('../../../assets/Frame4.png')}/>
                        <Text>Apple Watch</Text>
                    </View>
                </View>

            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    head:{
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 20
    },
    titulo:{
        fontSize: 36,
        fontWeight: '600',
        marginTop: 20
    },
    input:{
        width: 150,
        height: 50,
        marginLeft: 10,
        borderRadius: 30,
    },
    test:{
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
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