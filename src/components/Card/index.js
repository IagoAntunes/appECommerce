import React from "react";
import { Frame} from './style'

export const Card = ({item}) => {
    return(
        <Frame>
            <Image source={require('../../../assets/Frame4.png')}/>
            <Text>{item.nome}</Text>
            <Text>YTREREA</Text>
            <Text>{item.preco}</Text>
        </Frame>
    )
}