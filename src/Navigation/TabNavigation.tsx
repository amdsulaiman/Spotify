// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
// import Home from '../screens/Home';
// import Search from '../screens/Search';
// import Premium from '../screens/Premium';
// import Libary from '../screens/Libary';
// import {Ionicons } from '@expo/vector-icons'
// import { theme } from '../components';
// import { ThemeProvider } from '@shopify/restyle';
// import React from 'react';

// const Tabs =  createMaterialBottomTabNavigator();
// const TabNavigation = () => {
    
//   return (
//     <Tabs.Navigator
//         barStyle={{ backgroundColor: theme.colors.primary }}
//        screenOptions={({ route }) => ({
//          // @ts-ignore
//          tabBarIcon: ({ focused, color="black", size= 26 }) => {
//            let iconName:any;
 
//            if (route.name === 'Home') {
//              iconName = focused
//                ? 'home-outline'
//                : 'home-outline';
//            } else if (route.name === 'Search') {
//              iconName = focused ? 'search-outline' : 'search-outline';
//            } else if (route.name === "Libary") {
//              iconName = focused ? 'library-outline' : 'library-outline';
             
//            } else if (route.name === "Premium") {
//              iconName = focused ? 'at-outline' : 'at-outline';
             
//            }
 
//            // You can return any component that you like here!
//            return <Ionicons name={iconName} size={size} color={color} />;
//          },
//        })}
//        // @ts-ignore
//        tabBarOptions={{
//          activeTintColor: 'tomato',
//          inactiveTintColor: 'black',
//          showLabel:true,
//        }}
       
//        >
//         <Tabs.Screen name="Home" component={Home} />
//          <Tabs.Screen name="Search" component={Search} />
//          <Tabs.Screen name="Libary" component={Libary}/>
//          <Tabs.Screen name="Premium" component={Premium}/>
//        </Tabs.Navigator>
//   );
// };

// export default TabNavigation;

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react'
import { View, Text } from 'react-native'
import Home from '../screens/Home';
import Search from '../screens/Search';
import Premium from '../screens/Premium';
import Libary from '../screens/Libary';
import {Ionicons } from '@expo/vector-icons'
import { theme } from '../components';
import { ThemeProvider } from '@shopify/restyle';
import PlayScreen from '../screens/PlayScreen';
const Tabs = createMaterialBottomTabNavigator();
const TabNavigation = () => {
    return (
        <> 
        <PlayScreen />
        <Tabs.Navigator
        barStyle={{ backgroundColor: theme.colors.primary }}
       screenOptions={({ route }) => ({
         // @ts-ignore
         tabBarIcon: ({ focused, color="black", size= 26 }) => {
           let iconName:any;
 
           if (route.name === 'Home') {
             iconName = focused
               ? 'home-outline'
               : 'home-outline';
           } else if (route.name === 'Search') {
             iconName = focused ? 'search-outline' : 'search-outline';
           } else if (route.name === "Libary") {
             iconName = focused ? 'library-outline' : 'library-outline';
             
           } else if (route.name === "Premium") {
             iconName = focused ? 'at-outline' : 'at-outline';
             
           }
 
           // You can return any component that you like here!
           return <Ionicons name={iconName} size={size} color={color} />;
         },
       })}
       // @ts-ignore
       tabBarOptions={{
         activeTintColor: 'tomato',
         inactiveTintColor: 'black',
         showLabel:true,
       }}
       
       >
        <Tabs.Screen name="Home" component={Home} />
         <Tabs.Screen name="Search" component={Search} />
         <Tabs.Screen name="Libary" component={Libary}/>
         <Tabs.Screen name="Premium" component={Premium}/>
       </Tabs.Navigator>
       </>
    )
}

export default TabNavigation