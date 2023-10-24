import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../firebase/firebase_config'

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={() => FIREBASE_AUTH.signOut()} />
      <Button title="To Dos" onPress={() => navigation.navigate('To Dos')} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Profile