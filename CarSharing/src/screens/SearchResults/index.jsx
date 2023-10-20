import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import RouteMap from '../../components/RouteMap'
import UberTypes from '../../components/UberTypes'

import { useRoute } from '@react-navigation/native'

const SearchResults = () => {

  const route=useRoute();
  
  return (
    <View style={{display:'flex',justifyContent:'space-between'}}>
      <View style={{height:Dimensions.get('window').height-400}}>
        <RouteMap/>
      </View>
      <View style={{height:400}}>
        <UberTypes/>
      </View>
    </View>
  )
}

export default SearchResults