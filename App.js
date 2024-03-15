import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Intro from './app/screens/intro';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoteScreen from './app/screens/NoteScreen';

export default function App() {

  const [user, setUser] = useState({})

  const findUser = async () => {
    const res = await AsyncStorage.getItem('user');
    if(res !== null) {
      setUser(JSON.parse(res))

    }
  }

  useEffect (() => {
    findUser();
   }, [])

  if(!user.name) return <Intro onFinish={findUser}/>

  return <NoteScreen user={user}/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
