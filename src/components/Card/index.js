import React from "react";
import { Frame} from './style'
import { Image } from "react-native";
import { Text } from "../Text";
import { fonts } from "../../styles/fonts";


export const Card = ({item}) => {
    return(
        <Frame>
            <Image style={{height: 141,width: 'auto', borderRadius: 10}} source={{uri: item.image}}/>
            <Text
            fontsize={16}
            lineHeight={30}
            >
                {item.nome}
            </Text>
            <Text
            fontsize={15}
            lineHeight={14}
            fontFamily = {fonts.light}
            color="#9095A6">
                {item.desc}
            </Text>
            <Text
            color={'#5B41FF'}
            >${item.preco}</Text>
        
        </Frame>
    )
}