import React from 'react'
import { View, Text, Image } from 'native-base'
import {TouchableOpacity} from 'react-native'

interface CardProps {
  img: any;
  cost: string
  children: string

}

export function Card(props: CardProps) {

  function filterDesc(desc: string) {
    if(desc.length < 27) {
      return (
        desc
      )
    }

    return `${desc.substring(0, 25)}...`
  }

  return (
    <TouchableOpacity style={{alignItems: 'center', justifyContent:'center', paddingVertical:'2%'}} >
      <Image
        source={props.img}
        alt="Shoes"
        w={175}
        h={175}
      />
      <Text fontSize={16} >
        {filterDesc(props.children)}
      </Text>
      <View opacity={0.4} >
        <Text>
          {props.cost}
        </Text>
      </View>
    </TouchableOpacity>
  )
}