import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {AntDesign} from '@expo/vector-icons'
import colors from '../misc/colors'

const RoundIconBtn = ({antIconName, size, color, style, onPress}) => { //usando propriedade para reutilizar o botão da forma que quiser
  return <AntDesign 
  name={antIconName} 
  size={size || 24} 
  color={color || 
    colors.LIGHT}
    style={[styles.icon, {...style}]}
    onPress={onPress}
    />
}

const styles = StyleSheet.create({
    icon: {
        backgroundColor: colors.PRIMARY,
        padding: 15,
        borderRadius: 50,
        elevation: 5,//é como o shadow
    }
})

export default RoundIconBtn