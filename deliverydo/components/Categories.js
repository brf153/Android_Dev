import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'

const Categories = () => {
  const props = [
    {
      imgUrl: '../assets/food.jpg',
      title: 'Texting'
    },
    {
      imgUrl: '../assets/food.jpg',
      title: 'Texting'
    },
    {
      imgUrl: '../assets/food.jpg',
      title: 'Texting'
    }
  ]
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {
        props.map((item, index) => (
          <CategoryCard key={index} imgUrl={item.imgUrl} title={item.title} />
        ))
      }
      <Text>categories</Text>
    </ScrollView>
  )
}

export default Categories