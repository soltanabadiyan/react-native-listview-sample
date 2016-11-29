import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default class PhotoItem extends React.Component {
  render() {

    // maak van elke propertie een constante
    const { albumId, id, title, url, thumbnailUrl } = this.props.photo

    // vervang http door https
    // in iOS zijn alleen http requests toegestaan.
    const httpThumbnail = thumbnailUrl.replace('http', 'https')

    return (
      <View style={style.wrapper}>
        <Text style={style.title}>{title}</Text>
        <Image source={{uri: httpThumbnail}} style={style.img}/>
      </View>
    )
  }
}

const style = StyleSheet.create({
  wrapper: {
    margin: 20,
  },
  title: {
    fontWeight: 'bold'
  },
  img: {
    height: 100,
    width: 100
  }
})
