import { View, Text,Dimensions } from 'react-native'
import React from 'react'
import HomeMap from '../../components/HomeMap'
import SafetyMeasures from '../../components/SafetyMeasures'
import HomeSearch from '../../components/HomeSearch'

const HomeScreen = () => {
  return (
    <View>
      <View style={{height:Dimensions.get('window').height-400}}>
        <HomeMap/>
      </View>
        {/* Safety mesures message */}
        <SafetyMeasures/>
        {/* Bottom component */}
        <HomeSearch/>
    </View>
  )
}

export default HomeScreen