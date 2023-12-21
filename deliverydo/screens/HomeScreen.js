import { Text, SafeAreaView, View, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon , UserIcon, MagnifyingGlassIcon as SearchIcon, AdjustmentsHorizontalIcon as AdjustmentsIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'

const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }
    , [])

  return (
    <SafeAreaView className="mt-6 bg-white pt-4 w-[100vw]">
        <View className="flex flex-row items-center mx-4 pb-3 space-x-2">
            <Image 
                source={require('../assets/food.jpg')}
                className="w-7 h-7 p-4 bg-gray-400 rounded-full"
                />

            <View className="w-[300px]">
                <Text className="text-xs font-bold text-gray-400">Deliver Now!</Text>
                <Text className="font-bold text-xl">
                  Current Location
                  <ChevronDownIcon size={20} color="#00CCBB" />
                </Text>
            </View>

            <UserIcon size={35} color="#00CCBB" />
        </View>

            <View className="flex flex-row items-center space-x-2 pb-2 mx-4 w-[100vw]">
              <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                <SearchIcon color="#00CCBB"/>
                <TextInput 
                  placeholder='Restaurants and cuisines'
                  keyboardType='default'
                />
              </View>
              <AdjustmentsIcon color="#00CCBB"/>
            </View>

            <ScrollView
              className="bg-gray-100"
              contentContainerStyle={{
                paddingBottom: 100,
              }}            
            >
              {/* Categories */}
              <Categories/>

              {/* Featured Rows */}
            </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen