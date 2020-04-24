import React, {useState, useLayoutEffect} from 'react';

import {TextInputMask} from 'react-native-masked-text';

import {
  Form,
  Item,
  Picker,
  Icon,
  List,
  ListItem,
  Left,
  Thumbnail,
  Text,
  Body,
  Right,
  Button,
  Card,
  CardItem,
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

const Home = ({navigation}) => {
  const [value, setValue] = useState(0);
  const [price, setPrice] = useState(0);
  const [displayGrid, setDisplayGrid] = useState(true);

  const buttonName = displayGrid ? 'md-grid' : 'md-list';

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View>
          <Button
            transparent
            iconRight
            onPress={() => setDisplayGrid(!displayGrid)}>
            <Icon name={buttonName} />
          </Button>
        </View>
      ),
    });
  }, [navigation, setDisplayGrid, buttonName, displayGrid]);

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

  const calculator = (
    beerPrice: string,
    beerInput: number,
    beerCompared: number,
  ): number => {
    if (beerPrice && beerInput && beerCompared) {
      const sanitizedPrice = beerPrice
        ? parseInt(beerPrice.replace(/\D/g, ''), 10) / 100
        : 0;
      const result = parseFloat(
        ((sanitizedPrice * beerCompared) / beerInput).toFixed(2),
      );
      return result;
    }

    return 0;
  };

  const gridLayout = (
    <ScrollView
      contentContainerStyle={{
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      {beerList.map((beer, index) => (
        <Card key={index} style={{width: '47%', borderRadius: 5}}>
          <CardItem bordered>
            <Thumbnail square source={beer.image} />
            <Text
              style={{fontSize: 10, flex: 1, flexWrap: 'wrap', paddingLeft: 5}}>
              {beer.label}
              {'\n'}
              R$ {calculator(price, parseInt(value), beer.value)}
            </Text>
          </CardItem>
        </Card>
      ))}
    </ScrollView>
  );

  const listLayout = (
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
                R$ {calculator(price, parseInt(value), beer.value)}
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
  return (
    <View style={{flex: 1, backgroundColor: 'white', margin: 10}}>
      <View style={{backgroundColor: '#ff0000', padding: 5}}>
        <Text style={{color: '#FFF', fontWeight: 'bold'}}>
          ESCOLHA A CERVEJA
        </Text>
      </View>
      <View style={{backgroundColor: '#FFF'}}>
        <Form>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Escolha o tamanho"
              placeholderStyle={{color: '#bfc6ea'}}
              placeholderIconColor="#007aff"
              selectedValue={value}
              onValueChange={setValue}>
              <Picker.Item label={'Selectione um tamanho'} value={0} />
              {beerList.map((beer, index) => (
                <Picker.Item
                  key={index}
                  label={beer.label}
                  value={beer.value}
                />
              ))}
            </Picker>
          </Item>
        </Form>
      </View>
      <View style={{backgroundColor: '#FF0000', padding: 5}}>
        <Text style={{color: '#FFF', fontWeight: 'bold'}}>DIGITE O VALOR</Text>
      </View>
      <View
        style={{
          backgroundColor: '#FFF',
          marginBottom: 5,
          marginTop: 5,
          borderColor: 'black',
        }}>
        <Form>
          <Item>
            <Icon active name="md-cash" />
            <View style={{width: '93%'}}>
              <TextInputMask
                type={'money'}
                value={price}
                onChangeText={(text) => setPrice(text)}
                placeholder={'R$0,00'}
                style={{fontSize: 17}}
              />
            </View>
          </Item>
        </Form>
      </View>
      {displayGrid ? gridLayout : listLayout}
    </View>
  );
};

export default Home;
