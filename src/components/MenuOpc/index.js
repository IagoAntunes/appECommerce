import React from "react";
import { TextOpcoes } from '../TextOpcoes'
import { CustomMenuOpc } from './style';

export const MenuOpc = () => {
    return(
        <CustomMenuOpc >
          <TextOpcoes>Smart Watch</TextOpcoes>
          <TextOpcoes>Casio</TextOpcoes>
          <TextOpcoes>Tissot</TextOpcoes>
          <TextOpcoes>Seiko</TextOpcoes>
        </CustomMenuOpc>
    )
}