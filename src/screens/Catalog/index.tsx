import React from 'react';

import {View, Text} from 'react-native';
import axios from 'axios';

const getBeerList = async () => {
  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
  };
  const beerList = await axios.get('http://192.168.1.102:1337/beers', config);
  return beerList;
};

const Catalog = async () => {
  const beerList = await getBeerList();
  console.log(beerList);
  return (
    <View>
      <Text>Abc</Text>
    </View>
  );
};

export default Catalog;
