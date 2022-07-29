import React, { useState } from "react";
import { Alert } from "react-native";
import { CustomMenuOpc, TextMenu } from './style';



export const MenuOpc = () => {
  const [size,setSize] = useState(5);
  function teste(){
    setSize(60);
    Alert.alert('ola');
  }

    return(
        <CustomMenuOpc >
          <TextMenu onPress={() => teste} fontsize={size}>Smart Watch</TextMenu>
          <TextMenu>Casio</TextMenu>
          <TextMenu>Tissot</TextMenu>
          <TextMenu>Seiko</TextMenu>
        </CustomMenuOpc>
    )
}