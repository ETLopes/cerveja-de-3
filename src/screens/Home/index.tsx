import React, {useState, useLayoutEffect} from 'react';
import {View} from 'react-native';

import {Form, Item, Icon, Text, Button} from 'native-base';

import {TextInputMask} from 'react-native-masked-text';

import Grid from '../../components/grid';
import ListView from '../../components/list';

import styles from './styles';
import {NavigationStackProp} from 'react-navigation-stack';

const {
  homeLayout,
  labelDescription,
  labelText,
  priceInputArea,
  priceInputText,
  priceInputContainer,
} = styles;

import beerList from '../../constants';
import CustomPicker from '../../components/picker';

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
      <CustomPicker beerList={beerList} value={value} onChange={setValue} />
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
