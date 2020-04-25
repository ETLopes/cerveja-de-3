import React from 'react';

import {beerProps} from './interface';

import {
  volume269,
  volume275,
  volume300,
  volume310,
  volume350,
  volume355,
  volume410,
  volume473,
  volume550,
  volume600,
  volume1000,
} from '../../assets';

const beerList: beerProps[] = [
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

export default beerList;
