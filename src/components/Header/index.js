import React from "react";
import { CustomHeader, CustomHeader2, CustomInput, Head } from './style';
import { Text } from '../Text';
import { AntDesign } from '@expo/vector-icons';

export const Header = () => {
    return(
      <Head>
        <CustomHeader >
          <AntDesign name="bars" size={40} color="black" />
          <CustomHeader2>
              <AntDesign name="search1" size={30} color="black" />
              <CustomInput placeholder="Search Product" underlineColorAndroid="transparent"/>
          </CustomHeader2>
        </CustomHeader>
        <Text fontsize={36} fontWeight={'600'} marginTop={10} >Find your suitable  watch now.</Text>
      </Head>
    )
}