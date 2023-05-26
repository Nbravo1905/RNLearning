import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, Platform } from 'react-native'
//import { getColors } from 'react-native-image-colors'

import { Pokemon } from '../interfaces/pokemonInterface'
import { FadeInImage } from './FadeInImage';

const { width } = Dimensions.get("window");

interface Props {
  pokemon: Pokemon,
  index: any
}

const PokemonCard2 = ({ pokemon, index }: Props) => {

  const [bgColor, setBgColor] = useState('grey');

  /*useEffect(() => {
    getColors(pokemon.picture, { fallback: 'grey'})
      .then( colors => {
        switch (colors.platform) {
          case 'android':
            setBgColor(colors.dominant || 'grey');
            break;
          case 'ios':
            setBgColor(colors.background || 'grey');
          default:
            break;
        }
      })
  },[]);*/
  console.log(index);

  return (
    <TouchableOpacity
      activeOpacity={1}
    >
      <View style={{
        ...styles.cardContainer,
        backgroundColor: bgColor,
      }}>

        

        {
          index % 2 ? (
            <>
              {/* Nombre del Pokemon y ID */}
              <View>
                <Text style={styles.namePokemonL}>
                  {pokemon.name}
                  { '\n#' + pokemon.id}
                </Text>
                <FadeInImage 
                  uri={pokemon.picture}
                  style={styles.pictureR}
                />
              </View>
            </>
          ) : (
            <>
              {/* Nombre del Pokemon y ID */}
              <View>
                <Text style={styles.namePokemonR}>
                  {pokemon.name}
                  { '\n#' + pokemon.id}
                </Text>
                <FadeInImage 
                  uri={pokemon.picture}
                  style={styles.pictureL}
                />
              </View>
            </>
          )
        }

        {/* <Image 
          source={{uri: 'https://www.pngkit.com/png/detail/156-1564723_pokeball-nikumaroro-island.png'}}
          style={{
            width: 50,
            height: 50
          }}
        /> */}

      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    width: width * 0.8,
    marginBottom: 25,
    borderRadius: 10,
    elevation: 2
  },
  namePokemonL: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20, left: 10
  },
  namePokemonR: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20, right: -190
  },
  pictureR: {
    width: 150,
    height: 150,
    position: 'absolute',
    right: -5,
    bottom: -50,
  },
   pictureL: {
    width: 150,
    height: 150,
    position: 'absolute',
    left: -5,
    bottom: -50,
  }
});


export default PokemonCard2