import { StatusBar, View, Text, SafeAreaView, TouchableOpacity, StyleSheet, FlatList, Animated, ScrollView } from "react-native"
import React from 'react';
import LinearGradient from "react-native-linear-gradient";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useState } from "react";
import { ExpandingDot,ScalingDot } from "react-native-animated-pagination-dots";

const Home = () => {
    const [viewOpen, setViewOpen] = useState(false)
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const data = [
        {
            title: 'Mulund Gas',
            price: 'INR 2500.00'
        },
        {
            title: 'Mulund Gas',
            price: 'INR 2500.00'
        },
        {
            title: 'Mulund Gas',
            price: 'INR 2500.00'
        }, {
            title: 'Mulund Gas',
            price: 'INR 2500.00'
        }
    ]
    const renderItem = ({ item }) => {
        return (
            <View style={[styles.inBoxStyleNew, { backgroundColor: 'white', marginTop: 30,marginBottom:10,marginLeft:20}]}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 30, marginTop: 10 }}>
                        <Ionicons name='pricetag' size={35} color='#000' />
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                        <Text style={{
                            fontSize: 18,
                            textAlign: 'center',
                            marginTop: 10
                        }}> {item.title} </Text>
                        <Text style={{
                            fontSize: 13,
                            color: 'rgb(83,132,237)',
                            marginTop: 5,
                            marginLeft: 4
                        }}> {item.price} </Text>
                    </View>
                    <Text style={{ fontSize: 10, marginTop: 5, marginLeft: 10 }}>Rename</Text>
                </View>
                <Text style={{
                    fontSize: 13,
                    color: 'rgb(83,132,237)',
                    marginTop: 10,
                    marginLeft: 80
                }}> Pay Now </Text>
                <Text style={{
                    fontSize: 13,
                    marginLeft: 80,
                    color: 'rgba(0,0,0,0.5)',
                    marginTop: 10
                }}> Pay Within 10 Days </Text>
            </View>
        )
    }
    return (
        <ScrollView style={{flex:1}}>
        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
            <StatusBar barStyle='light-content' />
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={{ fontSize: 17, color: 'white', fontWeight: '400' }}>Login to Mobank</Text>
            </TouchableOpacity>
            <View style={styles.mainView}>
                <View style={styles.midLeft}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name='pricetag' size={35} color='#000' />
                    </View>
                    <Text style={{ fontSize: 13, textAlign: 'center' }}>
                        Transfer Money
                    </Text>
                </View>
                <View style={styles.midView}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name='barcode' size={35} color='#000' />
                    </View>
                    <Text style={{ fontSize: 13, textAlign: 'center' }}>
                        Scan & Pay
                    </Text>
                </View>
                <View style={styles.midRight}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name='card' size={35} color='#000' />
                    </View>
                    <Text style={{ fontSize: 13, textAlign: 'center' }}>
                        BHIM UPI
                    </Text>
                </View>
            </View>
            <View style={{ width: '100%', marginTop: 20 }}>
                <Text style={{ fontSize: 17, marginLeft: 10 }}>Payments & Reminders</Text>
            </View>
            <FlatList
                data={data}
                horizontal
                renderItem={renderItem}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    {
                        useNativeDriver: false,
                    }
                )}
                showsHorizontalScrollIndicator={false}
                decelerationRate={'normal'}
                style={{marginBottom:60}}

            />
            <ScalingDot
                data={data}
                expandingDotWidth={30}
                scrollX={scrollX}
                inActiveDotOpacity={0.6}
                dotStyle={{
                    width: 10,
                    height: 10,
                    backgroundColor: '#0000',
                    borderRadius: 5,
                    marginHorizontal: 5,
                }}
            />
            <LinearGradient style={{ height: !viewOpen ? '40%' : '60%', borderBottomLeftRadius: 130, borderBottomRightRadius: 130, position: 'absolute', justifyContent: 'space-between' }}
                colors={['rgb(58,9,5)', 'rgb(155,34,24)',]}
                end={{ x: 0.1, y: 1 }}
            >
                <SafeAreaView>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20 , marginTop:10}}>
                        <Ionicons name='logo-bitcoin' size={35} color='#fff' />
                        <View style={{ flexDirection: 'column', top: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                                RBL BANK
                            </Text>
                            <Text style={{ fontSize: 9, color: 'white', textAlign: 'right' }}>
                                apno ka bank
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginTop: 30 }}>
                        <View>
                            <View style={{ flexDirection: 'column', top: 10 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Ionicons name='phone-portrait' size={35} color='#fff' />
                                </View>
                                <Text style={{ fontSize: 13, color: 'white', textAlign: 'center' }}>
                                    Mobile
                                </Text>
                            </View>
                            <View style={styles.item}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Ionicons name='bulb' size={35} color='#fff' />
                                </View>
                                <Text style={{ fontSize: 13, color: 'white', textAlign: 'center' }}>
                                    Electricity
                                </Text>
                            </View>
                            {
                                viewOpen && (
                                    <View>
                                        <View style={[styles.item, { marginTop: 30 }]}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <Ionicons name='phone-portrait' size={35} color='#fff' />
                                            </View>
                                            <Text style={{ fontSize: 13, color: 'white', textAlign: 'center' }}>
                                                Loans
                                            </Text>
                                        </View>
                                        <View style={[styles.item, { marginTop: 30 }]}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <Ionicons name='bulb' size={35} color='#fff' />
                                            </View>
                                            <Text style={{ fontSize: 13, color: 'white', textAlign: 'center' }}>
                                                Loans
                                            </Text>
                                        </View>
                                    </View>
                                )
                            }
                        </View>
                        <View>
                            <View style={{ flexDirection: 'column', top: 10 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Ionicons name='tv' size={35} color='#fff' />
                                </View>
                                <Text style={{ fontSize: 13, color: 'white', textAlign: 'center' }}>
                                    DTH
                                </Text>
                            </View>
                            <View style={styles.item}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Ionicons name='beaker' size={35} color='#fff' />
                                </View>
                                <Text style={{ fontSize: 13, color: 'white', textAlign: 'center' }}>
                                    Gas
                                </Text>
                            </View>
                            {
                                viewOpen && (
                                    <View>
                                        <View style={[styles.item, { marginTop: 30 }]}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <Ionicons name='beaker' size={35} color='#fff' />
                                            </View>
                                            <Text style={{ fontSize: 13, color: 'white', textAlign: 'center' }}>
                                                Donation
                                            </Text>
                                        </View>
                                        <View style={[styles.item, { marginTop: 30 }]}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <Ionicons name='bulb' size={35} color='#fff' />
                                            </View>
                                            <Text style={{ fontSize: 13, color: 'white', textAlign: 'center' }}>
                                                Loans
                                            </Text>
                                        </View>
                                    </View>
                                )
                            }
                        </View>
                        <View>
                            <View style={{ flexDirection: 'column', top: 10 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Ionicons name='wifi' size={35} color='#fff' />
                                </View>
                                <Text style={{ fontSize: 13, color: 'white', textAlign: 'center' }}>
                                    Broadband
                                </Text>
                            </View>
                            <View style={styles.item}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Ionicons name='water' size={35} color='#fff' />
                                </View>
                                <Text style={{ fontSize: 13, color: 'white', textAlign: 'center' }}>
                                    Water
                                </Text>
                            </View>
                            {
                                viewOpen && (
                                    <View style={[styles.item, { marginTop: 30 }]}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Ionicons name='wifi' size={35} color='#fff' />
                                        </View>
                                        <Text style={{ fontSize: 13, color: 'white', textAlign: 'center' }}>
                                            Insurance
                                        </Text>
                                    </View>
                                )
                            }
                        </View>
                        <View>
                            <View style={{ flexDirection: 'column', top: 10 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Ionicons name='call' size={35} color='#fff' />
                                </View>
                                <Text style={{ fontSize: 13, color: 'white', textAlign: 'center' }}>
                                    Landline
                                </Text>
                            </View>
                            <View style={styles.item}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Ionicons name='home' size={35} color='#fff' />
                                </View>
                                <Text style={{ fontSize: 13, color: 'white', textAlign: 'center' }}>
                                    Rental
                                </Text>
                            </View>
                            {
                                viewOpen && (
                                    <View style={[styles.item, { marginTop: 30 }]}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Ionicons name='call' size={35} color='#fff' />
                                        </View>
                                        <Text style={{ fontSize: 13, color: 'white', textAlign: 'center' }}>
                                            Taxes
                                        </Text>
                                    </View>
                                )
                            }
                        </View>
                    </View>

                </SafeAreaView>
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}
                    onPress={() => setViewOpen(!viewOpen)}
                >
                    {
                        !viewOpen && (
                            <Ionicons name='arrow-down' size={35} color='#fff' />

                        )
                    }
                    {
                        viewOpen && (
                            <Ionicons name='arrow-up' size={35} color='#fff' />

                        )
                    }
                </TouchableOpacity>
            </LinearGradient>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
  
    midView: {
        width: 130,
        height: 130,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: "center",
        shadowColor: "#2c3f51",
        shadowOffset: {
            width: 2.2,
            height: 3.4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        // elevation: 1,
        justifyContent: 'center',
        borderWidth:0.5
    },
    midLeft: {
        width: 110,
        height: 100,
        backgroundColor: 'rgba(0,0,0,0.04)',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    midRight: {
        width: 110,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.04)',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    loginBtn: {
        backgroundColor: 'rgb(83,132,237)',
        width: 230,
        height: 40,
        borderRadius: 30,
        marginTop: 340,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        flexDirection: 'column',
        top: 30
    },
    mainView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        width: '100%',
    },
    inBoxStyleNew: {
        borderRadius: 25,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
        shadowColor: 'black',
        backgroundColor: 'white',
        width: 250,
        height: 120
    },
})
export default Home
