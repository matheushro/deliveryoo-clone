import { useLayoutEffect } from 'react';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import{
  UseIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline"
import Categories from './components/Categories';

export default function HomeScreen() {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  })

  return (
    <SafeAreaView className="bg-white flex-1 ">
      
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: 'https://links.papareact.com/wru'
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      <View className="flex-row items-center space-x-2 mx-4 pb-2">
        <View className="flex-row flex-1  space-x-2 bg-gray-200 p-3">
            <MagnifyingGlassIcon color={"gray"} size={20} />
            <TextInput placeholder='Restaurants and cousines' keyboardType='default' />
        </View>
      </View>


      <ScrollView 
        className="bg-gray-100 flex-1"
      >
          <Categories />
      </ScrollView>
          

    </SafeAreaView>
  );
}


