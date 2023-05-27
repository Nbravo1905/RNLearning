import { View, Text, FlatList, ActivityIndicator, SafeAreaView, } from 'react-native'
import React, { memo } from 'react'

import styles from './Home.styles'
import { usePokemon } from '../../hooks/usePokemon'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import Header from '../../components/Header/Header'

const HomeScreen = () => {

  const { pokemons, isLoading, loadPokemons } = usePokemon();

  return (
    <SafeAreaView style={styles.SafeAreaView}>
        <FlatList 
          data={pokemons}
          keyExtractor={ (pokemon) => pokemon.id }
          showsVerticalScrollIndicator={false}
          numColumns={2}
          initialNumToRender={25}

          ListHeaderComponent={<Header />}

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

    </SafeAreaView>
  )
}

export default HomeScreen