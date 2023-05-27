import React, { useEffect, useState, useRef } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, Platform } from 'react-native'
import { getColors } from 'react-native-image-colors'

import { Pokemon } from '../../interfaces/pokemonInterface'
import { FadeInImage } from '../FadeInImage';

const { width } = Dimensions.get("window");

interface Props {
  pokemon: Pokemon
}

const PokemonCard = ({ pokemon }: Props) => {

  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);

  useEffect(() => {
    getColors(pokemon.picture, { fallback: 'grey'})
      .then( colors => {

        if( !isMounted.current ) return;
        
        switch (colors.platform) {
          case 'android':
            setBgColor(colors.dominant || 'grey');
            break;
          case 'ios':
            setBgColor(colors.primary || 'grey');
          default:
            break;
        }

      })

    return () => {
      isMounted.current = false;
    }
  },[]);

  return (
    <TouchableOpacity
      activeOpacity={1}
    >
      <View style={{
        ...styles.cardContainer,
        backgroundColor: bgColor
      }}>

        {/* Nombre del Pokemon y ID */}
        <View>
          <Text style={styles.namePokemon}>
            {pokemon.name}
            { '\n#' + pokemon.id}
          </Text>
        </View>

        {/* <Image 
          source={{uri: 'https://www.pngkit.com/png/detail/156-1564723_pokeball-nikumaroro-island.png'}}
          style={{
            width: 50,
            height: 50
          }}
        /> */}

        <FadeInImage 
          uri={pokemon.picture}
          style={styles.picture}
        />

      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    width: width * 0.4,
    marginBottom: 25,
    borderRadius: 10,
    elevation: 2
  },
  namePokemon: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    top: 5, left: 10
  },
  picture: {
    width: 110,
    height: 110,
    position: 'absolute',
    right: -8,
    bottom: -9,
  }
});


export default PokemonCard