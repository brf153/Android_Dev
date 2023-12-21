import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/outline'

export default function RestaurantCard({
    imgURL,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) {
  return (
    <TouchableOpacity>
        <Image 
            source={require(imgURL)}
            className="h-40 w-40 rounded"
        />
        <View className="px-3 pb-4">
            <Text className="font-bold text-lg pt-2">
                {title}
            </Text>
            <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text>{rating}
                <Text> 
                    - {genre}
                </Text>
                </Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}