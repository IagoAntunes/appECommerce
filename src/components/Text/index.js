import React from "react";
import { CustomText } from './style'

export const Text = ({children,fontsize,fontWeight, marginHorizontal, color, marginTop,lineHeight,fontFamily,...rest}) => {
    return(
        <CustomText 
        fontsize={fontsize} 
        fontWeight={fontWeight} 
        fontFamily={fontFamily}
        marginHorizontal={marginHorizontal} 
        marginTop = { marginTop}
        color={color}
        lineHeight={lineHeight}
        {...rest}
        >
            {children}
        </CustomText>
    )
}