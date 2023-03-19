import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {

  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#00D1C0', '#28DA91']}
      start={{
        x: 0, y: 0
      }}
      style={styles.container}>

      <View style={styles.container}>



        <View style={styles.containerLogo}>
          <Animatable.Image animation="fadeIn"
            source={require('../../assents/image.png')}
            style={{ width: '100%' }}
            resizeMode="contain"
          />
        </View>
        <Animatable.View delay={500} animation="fadeInUp" style={styles.buttonSignIn}>

          <TouchableOpacity onPress={() => navigation.navigate('SingIn')}>

            <LinearGradient
              colors={['#00D1d9', '#28DA91']}
              start={{ x: 0, y: 0 }} style={styles.button}>
              <Text style={styles.buttonText}>Sign-in</Text>
            </LinearGradient>

          </TouchableOpacity>

        </Animatable.View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#00D1BF",

  },
  containerLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingEnd: 25,
    paddingStart: 25,
  },
  button: {
    position: 'absolute',
    borderRadius: 50,
    paddingVertical: 8,
    width: '40%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff'
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonSignIn: {
    marginBottom: 50,
  }

})