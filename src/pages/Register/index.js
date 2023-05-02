import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'


export default function Register() {
    const [input, setInput] = useState('');
    const [hidePass, setHidePass] = useState(true);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#00D1C0', '#28DA91']} start={{ x: 0, y: 0 }} style={styles.headerColor}>
                <Animatable.View animation="fadeIn" delay={100} >
                    <View style={styles.headeraline}>
                        <TouchableOpacity onPress={() => navigation.navigate('SingIn')}>
                            <AntDesign name="leftcircleo" size={34} color="#fff" style={styles.icone} />
                        </TouchableOpacity>

                        <Image source={require('../../assets/image.png')}
                            style={styles.logo} resizeMode="contain" />
                    </View>
                </Animatable.View>
            </LinearGradient>

            <Animatable.View animation={'fadeIn'} daley={300} style={styles.containerForm}>

                <Text style={styles.logoRegist}>Registro</Text>


                <Text style={styles.textForm}>Nome</Text>
                <TextInput placeholder='Jhon Doe' style={styles.input} />

                <Text style={styles.textForm}>Email</Text>
                <TextInput keyboardType='email-address' placeholder='example@gmail.com' style={styles.input} />

                <Text style={styles.textForm}>Nº de telefone</Text>
                <TextInput keyboardType='phone-pad' placeholder='(91) 98129 - 9999' style={styles.input} />

                <Text style={styles.textForm}>Senha</Text>


                <View style={styles.inputArea}>

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
                        start={{ x: 0, y: 0 }} style={styles.buttonText} >

                        <Text style={{ color: '#fff', fontSize: 20, borderColor: '#fff' }}>REGISTRE-SE</Text>

                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('SingIn')}>
                    <Text style={styles.signinText}>Já tem uma conta? faça login</Text>
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
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 16,
        paddingEnd: 16,

    },
    icone: {
        marginTop: '7%',
        paddingStart: 10
    },
    logo: {
        width: '50%',
        marginEnd: '24%'
    },
    containerForm: {
        backgroundColor: '#fff',
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 15,
        paddingEnd: '5%',
        paddingStart: '5%',
    },
    logoRegist: {
        color: '#28DA91',
        fontSize: 30,
        alignSelf: 'center',
        fontWeight: 'bold',
        paddingVertical: 30
    },
    textForm: {
        color: '#28DA91',
    },
    input: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#28DA91',
        height: 40
    },
    buttonText: {
        alignSelf: 'center',
        marginTop: 50,
        paddingHorizontal: 90,
        paddingVertical: 5,
        borderRadius: 15,

    },
    signinText: {
        fontSize: 15,
        paddingTop: 10,
        paddingBottom: 50,
        alignSelf: 'center',
        margin: 10,
        color: '#28DA91'
    },
    inputArea: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#28DA91'
    },
    eyeSenha: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',

    }


})