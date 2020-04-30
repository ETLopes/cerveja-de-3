import {SetStateAction, Dispatch} from 'react';

export interface pickerProps {
  beerList: Array<T>;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}
