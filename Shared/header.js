import React from 'react';
// import {MaterialIcons} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {StyleSheet, Text, View} from 'react-native';

export default function Header({navigation}) {
    const openMenu = () => {
        navigation.openDrawer();
    }
    return(
        <View style={styles.header}>
            <MaterialCommunityIcons name="menu" size={28} onPress={openMenu} style={styles.icon}/>
           <View>
               <Text style={styles.headerText}>Game Center</Text>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
         width: '100%',
         height: '100%',
         flexDirection: "row",
         alignItems: "center",
         justifyContent: "center",
         backgroundColor: "orange"
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#333",
        letterSpacing: 1
   },
   icon: {
       position: "absolute",
       left: 15
   }
})