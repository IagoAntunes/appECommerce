import React from 'react';
import { Card} from '../../components'
import { RegListTESTE} from './style'

export const RegList = ({data}) => {
  const renderItem = ({ item }) => (
    <Card item={item} />
  );

  return (
      <RegListTESTE
        contentContainerStyle={{display: 'flex', justifyContent: 'space-between'}}
        horizontal = {false}
        numColumns={2}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
  );
}
