import styled from "styled-components/native";
import {fonts } from '../../styles/fonts'

export const CustomText = styled.Text`
    fontSize: ${({fontsize}) => fontsize || '20'}px
    fontWeight: ${({fontWeight}) => fontWeight || '400'}
    font-family: ${({fontFamily}) => fontFamily || fonts.regular}
    line-height: ${({lineHeight}) => lineHeight || '48'}px
    marginHorizontal: ${({marginHorizontal}) => marginHorizontal || 0}px
    color: ${({color}) => color || 'black'}
    marginTop: ${({marginTop}) => marginTop || 0}px
`