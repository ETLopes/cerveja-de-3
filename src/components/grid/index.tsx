import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Card, CardItem, Thumbnail} from 'native-base';

import {beerProps} from 'src/constants/interface';

import styles from '../../styles';
import calculator from '../../utils';

const Grid = ({beerList, beerPrice, beerVolume}) => {
  const {
    gridScrollView,
    gridCard,
    gridCardTextTitle,
    gridCardTextValue,
  } = styles;
  return (
    <ScrollView contentContainerStyle={gridScrollView}>
      {beerList.map((beer: beerProps, index: number) => (
        <Card key={index} style={gridCard}>
          <CardItem bordered>
            <Thumbnail square source={beer.image} />
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                flexWrap: 'wrap',
                paddingLeft: 10,
              }}>
              <View style={{flex: 1}}>
                <Text style={gridCardTextTitle}>{beer.label}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={gridCardTextValue}>
                  R${' '}
                  {calculator(beerPrice, parseInt(beerVolume, 10), beer.value)}
                </Text>
              </View>
            </View>
          </CardItem>
        </Card>
      ))}
    </ScrollView>
  );
};

export default Grid;
