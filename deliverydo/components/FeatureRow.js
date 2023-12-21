import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

export default function FeatureRow({title, description}) {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="text-bold text-lg">{title}</Text>
            <ArrowRightIcon color="#00CCBB" />
        </View>

        <Text className="text-xs text-gray-500 px-4">{description}</Text>

        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            showsHorizontalScrollIndicator={false}
            className="pt-4"
        >
            {/* RestaurantCard */}

            <RestaurantCard 
                imgURL={require('../assets/food.jpg')}
                title="Restaurant Name"
                rating={4.5}
                genre="American"
                address="123 Main St"
                short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod."
                dishes={[
                    {
                        name: "Pizza",
                        price: 12.99,
                    },
                    {
                        name: "Pizza",
                        price: 12.99,
                    },
                    {
                        name: "Pizza",
                        price: 12.99,
                    },
                ]}
                long={20}
                lat={10}
            />

        </ScrollView>
    </View>
  )
}