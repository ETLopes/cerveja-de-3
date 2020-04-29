import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  gridCard: {width: '47%', borderRadius: 5},
  gridScrollView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gridCardText: {
    fontSize: 10,
    flex: 1,
    flexWrap: 'wrap',
    paddingLeft: 5,
  },
  homeLayout: {flex: 1, backgroundColor: 'white', margin: 10},
  labelDescription: {backgroundColor: '#ff0000', padding: 5},
  labelText: {color: '#FFF', fontWeight: 'bold', fontSize: 15},
  pickerArea: {backgroundColor: '#FFF'},
  pickerPlaceholder: {color: '#bfc6ea'},
  priceInputArea: {
    backgroundColor: '#FFF',
    marginBottom: 5,
    marginTop: 5,
  },
  priceInputContainer: {width: '93%'},
  priceInputText: {fontSize: 15},
});

export default styles;
