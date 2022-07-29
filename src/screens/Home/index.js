import React from "react";
import { View, StyleSheet } from "react-native";
import { Container, MenuOpc, Header, RegList } from "../../components";

const FAKE_DATA = [
    {
      id: 0,
      nome: 'teste',
      desc: 'outro',
      preco: '999'
    },
    {
      id: 1,
      nome: 'teste',
      desc: 'outro',
      preco: '999'
    }
  ]

export function Home(){
    return(
        <Container>
            <Header/>
            <View style={styles.relogios}>
                <MenuOpc/>

                <RegList/>
                    

            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    relogios:{
        padding: 20
    }
})