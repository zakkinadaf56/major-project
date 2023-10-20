import { View, Text,Pressable } from 'react-native'
import React from 'react'
import UberTypeRow from '../UberTypeRow'
import typesData from '../../assests/data/types'

const UberTypes = () => {
  const confirm =()=>{
    console.warn('Confirm');
  }
  return (
    <View>
      
      {typesData.map((type)=>(
        <UberTypeRow 
        type={type} 
        key={type.id}
        />
        ))}
      <Pressable onPress={confirm} style={{
        backgroundColor:'black',
        padding:10,
        margin:10,
        alignItems:'center',
      }}>
        <Text style={{
          color:'white',
          fontWeight:'bold',
        }}>Confirm Ride</Text>
      </Pressable>
    </View>
  )
}

export default UberTypes