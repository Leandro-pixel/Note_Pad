import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../misc/colors'

const SearchBar = ({containerStyle}) => {
  return (
    <View>
      <TextInput style={[styles.SearchBar, {...containerStyle}]} placeholder='Search here...'/>
    </View>
  )
}

const styles = StyleSheet.create({
    SearchBar: {
        borderWidth: 0.5,
        borderColor: colors.PRIMARY,
        height: 40,
        borderRadius: 40,
        paddingLeft: 15,
        fontSize: 20,
    }
})

export default SearchBar