import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from '../screens/Home'
import Grow from '../screens/Grow'
import Search from '../screens/Search'
import More from '../screens/More'
import History from '../screens/History'
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'

const TabsNavigation = () => {
    const Tab = createBottomTabNavigator()
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarStyle:{
                    borderTopWidth:0,
                    
                },
                headerShown:false
            
            }}>
                <Tab.Screen component={Home} name="Home" options={{

                    tabBarIcon: () => {
                        return (
                            <Ionicons name="home-outline" color='#202A44' size={30} />
                        )
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontWeight: '500',
                    }
                }} />
                <Tab.Screen component={History} name="History" options={{

                    tabBarIcon: () => {
                        return (
                            <Ionicons name="list" color='#202A44' size={30} />
                        )
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontWeight: '500',
                    }

                }} />
                <Tab.Screen component={Grow} name="Grow" options={{

                    tabBarIcon: () => {
                        return (
                            <Ionicons name="briefcase" color='#202A44' size={30} />
                        )
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontWeight: '500',
                    }
                }} />
                <Tab.Screen component={Search} name="Search" options={{

                    tabBarIcon: () => {
                        return (
                            <Ionicons name="search" color='#202A44' size={30} />
                        )
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontWeight: '500',
                    }
                }} />
                <Tab.Screen component={More} name="More" options={{

                    tabBarIcon: () => {
                        return (
                            <Ionicons name="open" color='#202A44' size={30} />
                        )
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontWeight: '500',
                    }
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default TabsNavigation