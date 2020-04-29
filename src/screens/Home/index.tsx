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
} from 'native-base';

import {TextInputMask} from 'react-native-masked-text';

import Grid from '../../components/grid';
import ListView from '../../components/list';

import styles from './styles';
import {NavigationStackProp} from 'react-navigation-stack';

const {
  homeLayout,
  labelDescription,
  labelText,
  pickerArea,
  pickerPlaceholder,
  priceInputArea,
  priceInputText,
  priceInputContainer,
} = styles;

import beerList from '../../constants';

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
      {displayGrid ? (
        <Grid beerList={beerList} beerPrice={price} beerVolume={value} />
      ) : (
        <ListView beerList={beerList} beerPrice={price} beerVolume={value} />
      )}
    </View>
  );
};

export default Home;
