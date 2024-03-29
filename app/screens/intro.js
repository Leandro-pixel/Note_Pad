import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    StatusBar, 
    Dimensions
    } from 'react-native'
import colors from '../misc/colors' //arquivos no misx é como um mixin
import React,{ useState } from 'react'
import RoundIconBtn from '../components/RoundIconBtn'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Intro = ({onFinish}) => {

    const [name, setName] = useState("")

    const handleOnchangeText = (text) => setName(text)

    const handleSubmit = async () => {
        user = {name: name}
        await AsyncStorage.setItem('user', JSON.stringify(user))//guardando a variavel user 
        if(onFinish) onFinish();
    }
 

  return (
    <>
    <StatusBar hidden/>
    <View style={styles.container}>
      <Text style={styles.inputTitle}>Enter Your name to Continue</Text>
      <TextInput 
      value={name} 
      onChangeText={handleOnchangeText} 
      placeholder='Enter Name' 
      style={styles.textInput}
      />
      {name.trim().length >= 3 ? (
      <RoundIconBtn antIconName="arrowright" onPress={handleSubmit}/>
      ) : null}
    </View>
    </>
    
  )
}

const width = Dimensions.get('window').width - 50;//width com dimensão do windows
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        borderWidth: 2,
        borderColor: colors.PRIMARY,
        color: colors.PRIMARY,
        width,
        height: 50,
        borderRadius: 10,
        paddingLeft: 15,
        fontSize: 25,
        marginBottom: 15,
    },
    inputTitle: {
        alignSelf: 'flex-start',
        paddingLeft: 25,
        marginBottom: 5,
        opacity: 0.5,
    }
})

export default Intro;