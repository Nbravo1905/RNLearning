import { View, Text, FlatList, Image, ActivityIndicator, } from 'react-native'
import React from 'react'
import { useSafeAreaInsets  } from 'react-native-safe-area-context'

import { styles } from '../theme/appTheme'
import { usePokemon } from '../hooks/usePokemon'
import PokemonCard from '../components/PokemonCard'


const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  const { pokemons, isLoading, loadPokemons } = usePokemon();

  return (
    <>
      <Image 
        source={{uri: 'https://www.pngkit.com/png/detail/156-1564723_pokeball-nikumaroro-island.png'}}
        style={styles.pokebolaBg}
      />

      <View style={{
        alignItems: 'center'
      }}>
        <FlatList 
          data={pokemons}
          keyExtractor={ (pokemon) => pokemon.id }
          showsVerticalScrollIndicator={false}
          numColumns={2}

          ListHeaderComponent={(
            <Text style={{
              ...styles.titleHome,
              ...styles.globalMargin,
              top: top + 20,
              marginBottom: top + 20,
              paddingBottom: 10
            }}>Pokedex</Text>
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

    </>
  )
}

export default HomeScreen