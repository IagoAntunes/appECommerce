import React from "react";
import { View, StyleSheet } from "react-native";
import { Container, MenuOpc, Header, RegList } from "../../components";
const FAKE_DATA = [
    {
      id: 0,
      nome: 'Apple Watch',
      desc: 'Series 7',
      preco: '799',
      image: 'https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg',
    },
    {
      id: 1,
      nome: 'Galaxy Watch',
      desc: 'Series 4',
      preco: '599',
      image: 'https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg',
    },
    {
        id: 2,
        nome: 'Mi Watch',
        desc: 'All Series',
        preco: '299',
        image:'https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg',
      },
      {
        id: 4,
        nome: 'Amazfit Bip U',
        desc: 'Pro Series',
        preco: '199',
        image: 'https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg',
      }
  ]

export function Home(){
    return(
        <Container>
            <Header/>
            <View style={{flex: 1}}>
                <MenuOpc/>

                <RegList data={FAKE_DATA}/>
                    

            </View>
        </Container>
    )
}
