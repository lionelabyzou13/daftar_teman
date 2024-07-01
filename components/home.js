import React from 'react';
import {Text, View, Image, StyleSheet, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aplikasi Daftar Teman</Text>
      <Image
        source={require('../assets/akbar.jpg')}
        style={styles.image}/>
      <Text style={styles.text}>Muhammad Akbar Perdian</Text>
      <Button title='Goto List' onPress={() => navigation.navigate('List')} />
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
    marginBottom: 260,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default Home;
