import React , { useState }from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign,Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'


export default function SingIn() {
  const [input, setInput] = useState('');
    const [hidePass, setHidePass] = useState(true);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#00D1C0', '#28DA91']}
        start={{
          x: 0, y: 0
        }} style={styles.headerColor}>
      </LinearGradient>




      <Animatable.View animation={'fadeIn'} daley={300} style={styles.containerForm}>
        <View>
          <Image source={require('../../assets/CityLinkColor.png')}
            style={styles.logoColor} resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>Nome</Text>
        <TextInput placeholder='Seu Nome Aqui' style={styles.input} />



        <Text style={styles.title}>Senha</Text>

        <View style={styles.inputArea} >
          <TextInput placeholder='********' style={{ paddingBottom: 10, paddingTop: 10, width: '85%' }}
            value={input} onChangeText={(texto) => setInput(texto)} secureTextEntry={hidePass}
          />
          <TouchableOpacity style={styles.eyeSenha} onPress={() => setHidePass(!hidePass)}>
            {hidePass ? <Ionicons name='eye' color='#dadada' size={25} /> :
              <Ionicons name='eye-off' color='#dadada' size={25} />
            }
          </TouchableOpacity>
        </View>




        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
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
  logoColor: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 25,
    marginTop: "15%"
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
    marginTop: -45,
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
  button: {
    marginTop: 15,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,


  },
  buttonText: {
    alignSelf: 'center',
    paddingHorizontal: 100,
    paddingVertical: 7,
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
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#28DA91',
    height: 40
},
  inputArea: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#28DA91',
    paddingHorizontal: 8,
  }
})