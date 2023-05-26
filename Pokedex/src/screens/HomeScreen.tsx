import { View, Text, FlatList, Image, ActivityIndicator, SafeAreaView, } from 'react-native'
import React, { memo } from 'react'
import { useSafeAreaInsets  } from 'react-native-safe-area-context'

import { COLORS, IMAGES } from '../theme/appTheme'
import { usePokemon } from '../hooks/usePokemon'
import PokemonCard from '../components/PokemonCard'

const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  const { pokemons, isLoading, loadPokemons } = usePokemon();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{
        alignItems: 'center',
      }}>
        <FlatList 
          data={pokemons}
          keyExtractor={ (pokemon) => pokemon.id }
          showsVerticalScrollIndicator={false}
          numColumns={2}

          ListHeaderComponent={(
            <View style={{
              alignItems: 'center', 
              justifyContent: 'center',
              backgroundColor: 'white',
              padding: 10,
              marginBottom: 5
            }}>
              <Image 
                source={IMAGES.titleHeader}
                style={{
                  width: 160,
                  height: 60
                }}
                resizeMode='contain'
              />
              
            </View>
          )}

          renderItem={ ({ item, index }) => <PokemonCard pokemon={item} key={index} /> }
          
          //Infinite Scroll
          onEndReached={ loadPokemons }
          onEndReachedThreshold={ 0.4 }

          ListFooterComponent={
            <ActivityIndicator
              style={{height: 100}}
              size={ 20 }
              color="blue"
            />
          }
        />
      </View>

    </SafeAreaView>
  )
}

export default HomeScreen