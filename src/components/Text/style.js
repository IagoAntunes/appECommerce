import styled from "styled-components";



export const CustomText = styled.Text`
    fontSize: ${({fontsize}) => fontsize || '20px'}
    fontWeight: ${({fontWeight}) => fontWeight || '200'}

    marginHorizontal: ${({marginHorizontal}) => marginHorizontal || 0}
    color: ${({color}) => color || '#00000'}
    marginTop: ${({marginTop}) => marginTop || 0}
`