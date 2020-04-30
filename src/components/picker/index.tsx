import React from 'react';
import {View} from 'react-native';

import styles from '../../styles';

import {Form, Item, Picker, Icon, Text} from 'native-base';

import {pickerProps} from './interface';

const CustomPicker = ({beerList, value, onChange}: pickerProps) => {
  const {labelDescription, labelText, pickerArea, pickerPlaceholder} = styles;
  return (
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
              onValueChange={onChange}>
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
};

export default CustomPicker;
