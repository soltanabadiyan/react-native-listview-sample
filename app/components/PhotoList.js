import React from 'react'
import { View, Text, ListView, ActivityIndicator } from 'react-native'

// import PhotoItem voor een rij
import PhotoItem from './PhotoItem'

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class PhotoList extends React.Component {
  constructor() {
    super()

    // standaard state
    this.state = {
      dataSource: ds.cloneWithRows([])
    }
  }

  componentWillReceiveProps(nextProps) {
    // als de props veranderen, verander dan de state
    if (nextProps.photos != null) {
      this.setState({
        dataSource: ds.cloneWithRows(nextProps.photos)
      })
    }
  }

  // render een rij
  renderRow = (rowData, sectionID, rowID) => {
    // render een component voor elke rij.
    // en geef de data mee.
    return (
      <PhotoItem photo={rowData} />
    )
  }

  render() {
    const { photos, fetching } = this.props

    // als de data geladen wordt, laat dat zien. Anders laat de lijst zien

    return (
      fetching == true ?
        <ActivityIndicator size="large" />
      :
        <ListView
         dataSource={this.state.dataSource}
         renderRow={(rowData, sectionID, rowID) => this.renderRow(rowData, sectionID, rowID)}
       />
    )
  }
}
