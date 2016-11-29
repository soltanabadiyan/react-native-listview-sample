import React from 'react'
import { View, Text } from 'react-native'

import PhotoList from './components/PhotoList'

export default class App extends React.Component {
  constructor() {
    super()

    // fetch url voor gemak
    this.url = 'https://jsonplaceholder.typicode.com'

    // default state
    this.state = {
      photos: null,
      fetching: true
    }
  }

  componentWillMount() {
    // fetch data voor het mounten
    fetch(`${this.url}/photos`).then((resp) => {
      return resp.json()
    }).then((json) => {

      // set fetched data to state
      this.setState({
        photos: json.slice(0, 70),
        fetching: false
      })
    })
  }

  render() {
    const { photos, fetching } = this.state

    // geef de data en de status van het fetchen mee aan het component

    return (
      <View style={{marginTop: 20}}>
        <PhotoList photos={photos} fetching={fetching} />
      </View>
    )
  }
}
