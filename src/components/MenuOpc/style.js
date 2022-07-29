import styled from 'styled-components/native'
import { fonts} from '../../styles/fonts'

export const CustomMenuOpc = styled.View`
    flex-direction: row
    align-items: center
`
export const TextMenu = styled.Text`
    font-family: ${({fontFamily}) => fontFamily || fonts.regular}
    color: #5B41FF
    font-style: normal
    font-size: ${({fontsize}) => fontsize || '18'}px
    line-height: 24px
    margin-right: 22px
    text-decoration: underline
    text-align: center
    font-weight: 600
`