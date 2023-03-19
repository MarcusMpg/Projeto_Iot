import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, TouchableOpacityBase, } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Ionicons, Entypo, EvilIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
    return (
        <View style={styles.container}>

            <LinearGradient colors={['#00D1C0', '#28DA91']} start={{ x: 0, y: 0 }} style={styles.headerColor}>

                <Animatable.View animation="fadeIn" delay={100} >
                    <View style={styles.headeraline}>
                        <TouchableOpacity >
                            <Entypo name="menu" size={40} color="#fff" style={styles.icone} />
                        </TouchableOpacity>

                        <Image source={require('../../assents/image.png')}
                            style={styles.logo} resizeMode="contain" />
                    </View>
                    <Animatable.View animation="fadeIn" delay={100} style={styles.headerUser}>
                        <View style={styles.textUser}>
                            <Text style={styles.textfont1}>Olá,</Text>
                            <Text style={styles.textfont2}>Jhon Doe</Text>
                        </View>
                        <View>
                            <FontAwesome name="user-circle-o" size={40} color="#fff" />
                        </View>
                    </Animatable.View>
                </Animatable.View>
            </LinearGradient>

            <View style={styles.carrocel}>
                <Image source={require('../../assents/imgLider.png')} style={styles.imgCarrocel} />
                <View style={styles.textCarrocel}>
                    <Text style={styles.styText1}>VOCÊ É LÍDER  </Text>
                    <Text style={styles.styText2}>NESSA CAUSA</Text>
                </View>
                <View style={styles.containerCarrocel}>
                    <TouchableOpacity style={styles.icoCarroc}>
                        <Entypo name="circle" size={12} color="#fff" style={{ marginHorizontal: 5 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icoCarroc}>
                        <Entypo name="circle" size={12} color="#fff" style={{ marginHorizontal: 5 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icoCarroc}>
                        <Entypo name="circle" size={12} color="#fff" style={{ marginHorizontal: 5 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.walletView}>
                <View style={styles.walletTitle}>
                    <Image source={require('../../assents/walletIcon.png')} style={{ height: 40 }} resizeMode="contain" />
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Digital Wallet</Text>
                </View>
                <View style={styles.walletContent}>
                    <View style={styles.walletSaldo}>
                        <Text>Saldo</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>R$ 20,00</Text>
                    </View>
                    <TouchableOpacity style={styles.walletButton}>
                        <LinearGradient colors={['#00D1C0', '#28DA91']} start={{ x: 0, y: 0 }} style={styles.walletColorButton}>
                            <Text style={styles.walletTextButton}>RESGATAR</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.toolsEx}>
                <Text>Iot</Text>
            </View>

            <View style={styles.toolsFooter}>
                <LinearGradient colors={['#00D1C0', '#28DA91']} start={{ x: 0, y: 0 }} style={styles.footerColor}>
                    <View style={styles.menuFooter}>
                        <TouchableOpacity>
                            <Text style={styles.iconFooter}>Reciclagem</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.iconFooter}>QR code</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.iconFooter}>Grafico</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.iconFooter}>Ajuda</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View >



        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DADADA',
    },
    headerColor: {
        height: '20%',


    },
    headeraline: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 16,
        paddingEnd: 16,
        marginTop: 26
    },
    icone: {

    },
    logo: {
        height: 50,
        width: '50%',
        marginEnd: '24%'
    },
    headerUser: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 30,
        paddingEnd: 25,
        marginTop: 40
    },
    textUser: {
        paddingStart: 16
    },
    textfont1: {
        color: '#fff',
        fontSize: 16,
    },
    textfont2: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    carrocel: {
        alignItems: 'center',
        backgroundColor: '#879da8',
        height: '25%',
    },
    imgCarrocel: {
        width: '100%',
        height: '100%',

    },
    textCarrocel: {
        color: '#fff',
        position: 'absolute',
        paddingTop: 70,
        paddingStart: 90,
        width: '100%'

    },
    styText1: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold'
    },
    styText2: {
        color: '#fff',
        fontSize: 23,
        paddingStart: 80,
        fontWeight: 'bold'
    },
    containerCarrocel: {
        position: 'absolute',
        flexDirection: 'row',
        paddingTop: '70%',
    },
    icoCarroc: {
        marginHorizontal: 5,
        paddingTop: '110%'
    },
    walletView: {
        backgroundColor: '#fff',
        marginTop: 16,
        borderRadius: 10,
        marginHorizontal: 16,
        padding: 20,
        height: '15%'
    },
    walletTitle: {
        flexDirection: 'row',
        paddingBottom: 16
    },
    walletContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    walletColorButton: {
        borderRadius: 20,
    },
    walletTextButton: {
        margin: 10,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        paddingHorizontal: 20
    },
    toolsEx: {
        backgroundColor: '#fff',
        marginTop: 16,
        borderRadius: 10,
        marginHorizontal: 16,
        padding: 20,
        height: '20%'
    },
    toolsFooter: {
        paddingTop: '5%',

    },
    footerColor: {
        height: '100%',
        borderRadius: 50,
    },
    menuFooter: {
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    iconFooter: {

        paddingHorizontal: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
})