import styled from "styled-components/native";
import {fonts } from '../../styles/fonts'

export const CustomText = styled.Text`
    font-size: ${({fontsize}) => fontsize || '20'}px
    font-weight: ${({fontWeight}) => fontWeight || '400'}
    font-family: ${({fontFamily}) => fontFamily || fonts.regular}
    line-height: ${({lineHeight}) => lineHeight || '48'}px
    marginHorizontal: ${({marginHorizontal}) => marginHorizontal || 0}px
    color: ${({color}) => color || 'black'}
    marginTop: ${({marginTop}) => marginTop || 0}px
    background-color: ${({backgroundcolor}) => backgroundcolor || 'transparent'}
`