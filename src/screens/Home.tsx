import React from 'react'
import { View, Text, ScrollView, Image, HStack } from 'native-base'
import { TouchableOpacity } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import { Card } from '../components/Card'

export function Home() {
  return (
    <View flex={1} w='100%' backgroundColor='#FFF' >
      <View mb={8}>
        <Image
          source={require('../assets/banner.png')}
          alt="Logo"
          w='100%'
        />
        <HStack mx='5%' >
          <Text fontFamily='anton' fontSize={26} mx='1%' >TENIS</Text>
          <Text fontFamily='anton' color='#CECECF' fontSize={26} mx='1%'  >-</Text>
          <Text fontFamily='anton'  color='#CECECF' fontSize={26} mx='1%'  >MASCULINO</Text>
          <View position='absolute' right={0} alignSelf="center" >
            <TouchableOpacity  >
              <MaterialIcons
                name="filter-list"
                size={24}
                color='#000'
              />
            </TouchableOpacity>
          </View>
        </HStack>
      </View>
      <View borderBottomColor='#D8D8D8' borderBottomWidth={2} ></View>

      <ScrollView>
        <Text fontFamily='anton' fontSize={26} mx='1%' >LANÇAMENTOS</Text>
        <HStack justifyContent='space-around' >
          <Card img={require('../assets/1.png')} cost='R$199,00'>Nike Shox 10</Card>
          <Card img={require('../assets/2.png')} cost='R$199,00'>AAAAAAA</Card>
        </HStack>

        <HStack justifyContent='space-around' >
          <Card img={require('../assets/1.png')} cost='R$199,00'>Nike Shox 10</Card>
          <Card img={require('../assets/2.png')} cost='R$199,00'>AAAAAAA</Card>
        </HStack>
      </ScrollView>
    </View>
  )
}