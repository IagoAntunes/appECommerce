import React from "react";
import { CustomTextOpcoes } from './style'

export const TextOpcoes = ({children,...rest}) => {
    return(
        <CustomTextOpcoes 
        {...rest}
        >
            {children}
        </CustomTextOpcoes>
    )
}