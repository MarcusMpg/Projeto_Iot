import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'


export default function SingIn() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#00D1C0', '#28DA91']}
        start={{
          x: 0, y: 0
        }} style={styles.headerColor}>

        <Animatable.View animation="fadeIn" delay={100} >



          <View style={styles.headeraline}>
            
            <Text style={styles.message}>Login</Text>
          </View>
        </Animatable.View>
      </LinearGradient>




      <Animatable.View animation={'fadeIn'} daley={300} style={styles.containerForm}>
        <View>
          <Image source={require('../../assets/logo_colorida.png')}
            style={{ width: '90%', alignSelf: 'center', marginBottom: 25 }} resizeMode="contain"
          />
        </View>
             <Text style={styles.title}>Nome</Text>
             <TextInput placeholder='Seu Nome Aqui' style={styles.input} />
             <Text style={styles.title}>Senha</Text>
             <TextInput placeholder='Sua Senha' style={styles.input} />

        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Home')}>
          <LinearGradient
            colors={['#00D1C0', '#28DA91']}
            start={{ x: 0, y: 0 }} style={styles.buttonText}>

            <Text style={{ color: '#fff', fontSize: 20 }}>Entrar</Text>

          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Não tem uma conta? Registre-se</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DADADA',
  },
  headerColor: {
    height: '20%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  headeraline: {
   // alignItems: 'center',
    flexDirection: 'row',
    justifyContent: "flex-end",
    marginTop: 30,
    
   
  },
  message: {
    fontSize: 40,
    color: '#fff',
    marginEnd: '42%',
    marginTop: '5%',
    fontWeight: 'bold',
    alignItems: "center",
  },
  icone: {
    marginTop: '7%',
    paddingStart: 10
  },
  containerForm: {
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingEnd: '5%',
    paddingStart: '5%',
  },
  title: {
    //alignSelf: 'center',
    margin: 10,
    color: '#28DA91'
  },
  buttonText: {
    alignSelf: 'center',
    marginTop: 50,
    paddingHorizontal: 90,
    paddingVertical: 5,
    borderRadius: 15,

  },

  registerText: {
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 50,
    alignSelf: 'center',
    margin: 10,
    color: '#28DA91'
  },
  input: {
    //alignSelf: 'center',
    margin: 10,
    borderBottomWidth: 1,
    height: 40,
    borderColor: '#28DA91'
  }
})