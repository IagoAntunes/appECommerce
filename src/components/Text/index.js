import React from "react";
import { CustomText } from './style'

export const Text = ({children,fontsize,fontWeight, marginHorizontal, color, marginTop, onPress}) => {
    return(
        <CustomText 
        fontsize={fontsize} 
        fontWeight={fontWeight} 
        marginHorizontal={marginHorizontal} 
        marginTop = { marginTop}
        color={color}
        onPress
        >
            {children}
        </CustomText>
    )
}