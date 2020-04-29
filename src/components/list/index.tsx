import React from 'react';
import {ScrollView, Text} from 'react-native';
import {Thumbnail, List, ListItem, Left, Body, Right} from 'native-base';

import {beerProps} from 'src/constants/interface';

import styles from '../../styles';
import calculator from '../../utils';

const ListView = ({beerList, beerPrice, beerVolume}) => {
  return (
    <ScrollView>
      <List>
        {beerList.map((beer, index) => (
          <ListItem key={index} thumbnail>
            <Left>
              <Thumbnail square source={beer.image} />
            </Left>
            <Body>
              <Text>{beer.label}</Text>
              <Text note numberOfLines={1}>
                R$ {calculator(beerPrice, parseInt(beerVolume, 10), beer.value)}
              </Text>
            </Body>
            <Right>
              {/* <Button transparent>
                <Text>View</Text>
              </Button> */}
            </Right>
          </ListItem>
        ))}
      </List>
    </ScrollView>
  );
};

export default ListView;
