import React from 'react';
import {ScrollView, Text} from 'react-native';
import {Card, CardItem, Thumbnail} from 'native-base';

import {beerProps} from 'src/constants/interface';

import styles from '../../styles';
import calculator from '../../utils';

const Grid = ({beerList, beerPrice, beerVolume}) => {
  const {gridScrollView, gridCard, gridCardText} = styles;
  return (
    <ScrollView contentContainerStyle={gridScrollView}>
      {beerList.map((beer: beerProps, index) => (
        <Card key={index} style={gridCard}>
          <CardItem bordered>
            <Thumbnail square source={beer.image} />
            <Text style={gridCardText}>
              {beer.label}
              {'\n'}
              R$ {calculator(beerPrice, parseInt(beerVolume, 10), beer.value)}
            </Text>
          </CardItem>
        </Card>
      ))}
    </ScrollView>
  );
};

export default Grid;
