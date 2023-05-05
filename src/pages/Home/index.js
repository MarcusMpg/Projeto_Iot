import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image, TouchableOpacityBase, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Ionicons, Entypo, EvilIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { footerObjects } from '../../model/footer-objects';

const { width, heigth } = Dimensions.get('screen');

export default function Home() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <LinearGradient colors={['#00D1C0', '#28DA91']} start={{ x: 0, y: 0 }} style={styles.headerColor}>

                    <Animatable.View animation="fadeIn" delay={100} style={styles.animationView}>
                        <View style={styles.headeraline}>

                            <TouchableOpacity >
                                <Entypo name="menu" size={40} color="#fff" style={styles.icone} />
                            </TouchableOpacity>

                            <Image source={require('../../assets/CityLINKBranco.png')} style={styles.logo} resizeMode="contain" />

                        </View>

                        <Animatable.View animation="fadeIn" delay={100} style={styles.headerUser}>
                            <View style={styles.textUserContainer}>
                                <Text style={styles.textfont1}>Olá,</Text>
                                <Text style={styles.textfont2}>Jhon Doe</Text>
                            </View>
                            <View>
                                <FontAwesome name="user-circle-o" size={40} color="#fff" style={{ paddingEnd: '13%' }} />
                            </View>
                        </Animatable.View>
                    </Animatable.View>
                </LinearGradient>
                <View style={styles.carouselContainer}>
                    <Image source={require('../../assets/imgLider.png')} resizeMode='stretch'
                        style={{ width: width / 1, height: width / 1.8, }} />
                </View>

                <View style={styles.walletContainer}>
                    <View style={styles.walletTitleContainer}>
                        <Image source={require('../../assets/walletIcon.png')} style={styles.walletIcon} />
                        <Text style={styles.walletTitle}>Digital Wallet</Text>
                    </View>

                    <Text style={{ paddingStart: '10%', paddingTop: '2%', fontSize: 15 }}>Saldo</Text>

                    <View style={styles.walletResgate}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginStart: '10%', paddingTop: 6 }}>R$ 20.00</Text>
                        <TouchableOpacity style={{ paddingEnd: 20 }}>
                            <LinearGradient
                                colors={['#00D1C0', '#28DA91']}
                                start={{ x: 0, y: 0 }} style={styles.buttonText}>
                                <Text style={{ marginHorizontal: '8%', marginVertical: '4%', fontSize: 20, color: '#fff' }}>Resgatar</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.toolsContainer}>
                    <TouchableOpacity style={styles.toolsIcons}>
                        <View style={styles.viewImgTools}>
                            <FontAwesome5 name="trash-alt" size={30} color="black" style={styles.imgToolsIcons} />
                        </View>
                        <Text style={{ paddingHorizontal: '5%', fontWeight: 'bold', textAlign: "center" }}>Lixeira IOT</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.toolsIcons}>
                        <View style={styles.viewImgTools}>
                            <FontAwesome5 name="vr-cardboard" size={30} color="black" style={styles.imgToolsIcons} />
                        </View>

                        <Text style={{ paddingHorizontal: '5%', paddingTop: '3%', fontWeight: 'bold', fontSize: 16, textAlign: "center" }}>VR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.toolsIcons}>
                        <View style={styles.viewImgTools}>
                            <EvilIcons name="location" size={40} color="black" style={styles.imgToolsIcons} />
                        </View>
                        <Text style={{ paddingHorizontal: '6%', fontWeight: 'bold', textAlign: "center" }}>VR maps</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>


        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DADADA',
        
    },
    scrollContainer: {
      
    },
    headerColor: {
        width: width / 1,
        height: width / 2.2,
        flex: 1
    },
    AanimationView: {
        flexDirection: 'row',
    },
    logo: {
        width: width / 1.7,
        height: width / 4,
        marginEnd: '18%',
        marginTop: 8,
    },
    icone: {
        paddingStart: 20,
        paddingTop: 45
    },
    headeraline: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    headerUser: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textUserContainer: {
        paddingStart: 30
    },
    textfont1: {
        color: '#fff',
        fontSize: 16,
    },
    textfont2: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    carouselContainer: {
        backgroundColor: '#fff',
        marginBottom: '2%',
        width: width / 1, 
        height: width / 1.8,
    },
    walletContainer: {
        backgroundColor: '#fff',
        borderRadius: 20,
        marginHorizontal: '5%',
        height: '20%',
        height: "21%"
    },

    walletTitleContainer: {
        width: '100%',
        height: '50%',
        flexDirection: 'row',
        paddingTop: 20
    },
    walletIcon: {
        width: width / 8,
        height: width / 8,
        marginEnd: '5%',
        marginStart: '10%',
        backgroundColor: "#000",
        
        
    },
    walletTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    walletResgate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '4%'
    },
    buttonText: {
        borderRadius: 15,
        alignItems: 'center',
    },


    //------ Area de Conectividade --------------------------
    toolsContainer: {
        flex: 1,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: "100%", 
        height: 250,
        
    },
    toolsIcons: {
        borderWidth: 1,
        backgroundColor: '#fff',
        width: 105,
        height: 130,
    },
    viewImgTools: {
        backgroundColor: '#dadada',
        borderRadius: 100,
        margin: '10%',
        borderWidth: 1,
        height: 65,
        width: 77,
        marginBottom: "20%",
        marginLeft: 12,
        alignItems: "center",
        paddingTop: 5,
        
    },
    imgToolsIcons: {
        flex: 1,
        margin: 10,
    },


})