import React, {useState, useLayoutEffect} from 'react';
import {View, ScrollView} from 'react-native';

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

import {TextInputMask} from 'react-native-masked-text';

import beerList from './constants';
import styles from './styles';
import {NavigationStackProp} from 'react-navigation-stack';

const {
  gridCard,
  gridCardText,
  gridScrollView,
  homeLayout,
  labelDescription,
  labelText,
  pickerArea,
  pickerPlaceholder,
  priceInputArea,
  priceInputText,
  priceInputContainer,
} = styles;

const Home = ({navigation}: NavigationStackProp) => {
  const [value, setValue] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [displayGrid, setDisplayGrid] = useState<boolean>(true);

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

  const calculator = (
    beerPrice: string,
    beerInput: number,
    beerCompared: number,
  ): string => {
    if (beerPrice && beerInput && beerCompared) {
      const sanitizedPrice = beerPrice
        ? parseInt(beerPrice.replace(/\D/g, ''), 10) / 100
        : 0;
      const result = ((sanitizedPrice * beerCompared) / beerInput).toFixed(2);
      return result;
    }

    return '0.00';
  };

  const gridLayout = (
    <ScrollView contentContainerStyle={gridScrollView}>
      {beerList.map((beer, index) => (
        <Card key={index} style={gridCard}>
          <CardItem bordered>
            <Thumbnail square source={beer.image} />
            <Text style={gridCardText}>
              {beer.label}
              {'\n'}
              R$ {calculator(price, parseInt(value, 10), beer.value)}
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
                R$ {calculator(price, parseInt(value, 10), beer.value)}
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

  const picker = (
    <>
      <View style={labelDescription}>
        <Text style={labelText}>ESCOLHA A CERVEJA</Text>
      </View>
      <View style={pickerArea}>
        <Form>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Escolha o tamanho"
              placeholderStyle={pickerPlaceholder}
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
    </>
  );

  const priceInput = (
    <>
      <View style={labelDescription}>
        <Text style={labelText}>DIGITE O VALOR</Text>
      </View>
      <View style={priceInputArea}>
        <Form>
          <Item>
            <Icon active name="md-cash" />
            <View style={priceInputContainer}>
              <TextInputMask
                type={'money'}
                value={price}
                onChangeText={(text) => setPrice(text)}
                placeholder={'R$0,00'}
                style={priceInputText}
              />
            </View>
          </Item>
        </Form>
      </View>
    </>
  );

  return (
    <View style={homeLayout}>
      {picker}
      {priceInput}
      {displayGrid ? gridLayout : listLayout}
    </View>
  );
};

export default Home;
