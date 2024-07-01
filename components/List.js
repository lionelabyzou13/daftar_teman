import React from 'react';
import {Text, View, StyleSheet, FlatList, Button} from 'react-native';
import Contact from './kontak';

const List = ({navigation}) => {
  const data = [
    {
      key: '1',
      gambar: require('../assets/lala.jpg'),
      judul: 'Kayla Flarissa Ananda',
      kota: 'Sukabumi',
      telpon: '08xxxxxxxxx',
    },
    {
      key: '2',
      gambar: require('../assets/faris.jpg'),
      judul: 'Farisan Amanuddin',
      kota: 'Sukabumi',
      telpon: '08xxxxxxxxx'
    },
  ];

  const renderItem = ({item}) => (
    <Contact gambar={item.gambar} judul={item.judul} kota={item.kota} telpon={item.telpon}/>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detail Informasi</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        style={styles.flatList}/>

      <Button title="Go Back" onPress={() => navigation.goBack()}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  flatList: {
    width: '100%',
  },
});

export default List;
