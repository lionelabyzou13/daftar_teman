import react from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Contact(props) {
  return(
    <View style={styles.container}>
    <Image source={props.gambar} style={styles.image}/>
      <View style={styles.text}>
        <Text style={styles.title}>{props.judul}</Text>
        <Text style={styles.kota}>{props.kota}</Text>
        <Text style={styles.telp}>{props.telpon}</Text>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'blue'
  },
  image:{
    margin:15,
    width:50,
    height:50
  },
  text:{flex:1},
  title:{
    fontWeight: 'bold',
    fontSize:16
  },
  kota:{
    fontSize:14
  },
  telp:{
    fontSize:14,
    color: '#3498db'
  }
})