import React, {useState} from 'react';

import {
  Form,
  Item,
  Picker,
  Icon,
  Input,
  List,
  ListItem,
  Left,
  Thumbnail,
  Text,
  Body,
  Right,
  Button,
} from 'native-base';

import {View, ScrollView} from 'react-native';

import StyledText from '../../components/Input';

import {calculatorProps} from './interface';

import volume269 from '../../assets/269.jpg';
import volume275 from '../../assets/275.jpeg';
import volume300 from '../../assets/300.jpeg';
import volume310 from '../../assets/310.jpg';
import volume350 from '../../assets/350.png';
import volume355 from '../../assets/355.jpg';
import volume410 from '../../assets/410.jpg';
import volume473 from '../../assets/473.jpg';
import volume550 from '../../assets/550.jpg';
import volume600 from '../../assets/600.jpg';
import volume1000 from '../../assets/1000.jpg';

const Home = () => {
  const [value, setValue] = useState('');
  const [price, setPrice] = useState('');

  const beerList: {}[] = [
    {label: 'Latinha 269ml', value: 269, image: volume269},
    {label: 'Long Neck Stella 275ml', value: 275, image: volume275},
    {label: 'Litrinho 300ml', value: 300, image: volume300},
    {label: 'Lata Stella 310ml', value: 310, image: volume310},
    {label: 'Lata 350ml', value: 350, image: volume350},
    {label: 'Long Neck 355ml', value: 355, image: volume355},
    {label: 'Latão Colorado 410ml', value: 410, image: volume410},
    {label: 'Latão 473ml', value: 473, image: volume473},
    {label: 'Garrafa Bud 550ml', value: 550, image: volume550},
    {label: 'Garrafa 600ml', value: 600, image: volume600},
    {label: 'Litrao 1000ml', value: 1000, image: volume1000},
  ];

  const calculator = ({
    beerPrice,
    beerNumerator,
    beerDenominator,
  }: calculatorProps) => {
    console.log('beerPrice', beerPrice);
    console.log('beerNumerator', beerNumerator);
    console.log('beerDenominator', beerDenominator);
    const result = (beerPrice * beerDenominator) / beerNumerator;
    return String(result);
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white', margin: 10}}>
      <StyledText text="ESCOLHA A CERVEJA" />
      <View style={{backgroundColor: '#E3e3e3'}}>
        <Form>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select your SIM"
              placeholderStyle={{color: '#bfc6ea'}}
              placeholderIconColor="#007aff"
              style={{width: undefined}}
              selectedValue={value}
              onValueChange={setValue}>
              {beerList.map((beer, index) => (
                <Picker.Item label={beer.label} value={beer.value} />
              ))}
            </Picker>
          </Item>
        </Form>
      </View>
      <StyledText text="DIGITE O VALOR" />
      <View style={{backgroundColor: '#E3e3e3'}}>
        <Form>
          <Item>
            <Icon active name="home" />
            <Input onChangeText={setPrice} placeholder="Icon Textbox" />
          </Item>
        </Form>
      </View>
      <ScrollView>
        <List>
          {beerList.map((beer, index) => (
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={beer.image} />
              </Left>
              <Body>
                <Text>{beer.label}</Text>
                <Text note numberOfLines={1}>
                  {calculator({10\, value, beer.value})}
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          ))}
        </List>
      </ScrollView>
    </View>
  );
};

export default Home;
