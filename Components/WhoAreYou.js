import * as React from 'react';
import {Alert, Dimensions, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";
import axios from "axios";
import { md5 } from 'js-md5';


export default function WhoAreYou({navigation, route}) {
    console.log(md5("Anas@2001"));

    const ipAddressContainer = route.params.ipAddress;
        const handleRole = async (role) => {
        // Save the role into the userType state
        console.log('User-Type-Added: ' + role);
        let userType;
        userType = role;
        navigation.navigate('GetToKnow', userType);
    };

    // let [fontsLoad] = useFonts({OpenSans_Bold});
    return (


        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={require('../img/logoColored.png')} style={styles.logo} />
            </View>
            <Text style={styles.postHeader}>Who are you?</Text>
            <Pressable style={styles.button} onPress={() => handleRole('owner')}>
                <Text style={styles.buttonText}>Property Owner</Text>
            </Pressable>
            {/*<Pressable style={styles.button} onPress={() => navigation.navigate('GetToKnow')}>*/}
            {/*    <Text style={styles.buttonText}>Property Agent</Text>*/}
            {/*</Pressable>*/}
            <Pressable style={styles.button} onPress={() => handleRole('tenant')}>
                <Text style={styles.buttonText}>Tenant</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.newRoleText}>Create new role on existing credentials?</Text>
            </Pressable>
        </View>

    );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        marginTop: -windowHeight * 0.1
    },
    logo: {
        width: windowWidth * 0.25,
        height: windowWidth * 0.25,
    },
    header: {
        flexDirection: 'row',
        alignItems:'center',
    },

    headerText:{
        fontSize: windowWidth * 0.06,
        paddingTop: windowHeight * 0.15,
        color: "#1363DF",
        fontWeight: 'bold'
    },
    LoginAs: {

        marginTop: windowHeight * 0.025,    // = 20
        fontSize: windowWidth * 0.08,
        fontWeight: 'bold',
        marginBottom: windowHeight * 0.025,  // = 30
        color: '#47b5ff'

    },
    button: {
        width: '60%',
        paddingVertical: windowHeight * 0.02,  // = 15
        padding: windowHeight * 0.025,
        backgroundColor: '#e5e5e5',
        marginTop: windowHeight * 0.025,    // =20
        borderRadius: windowHeight * 0.3,
        borderColor: '#cdcdcd',
        borderWidth: windowHeight * 0.002,  // = 2


        // borderRadius: "5"
    },
    buttonText: {
        color: '#06283d',
        textAlign: 'center',
        fontSize: windowWidth * 0.05,       // = 20

    },
    postHeader: {

        marginTop: windowHeight * 0.025,
        fontSize: windowWidth * 0.077, // = 30
        fontWeight: 'bold',
        marginBottom: windowHeight * 0.025,
        color: '#47b5ff'

    },
    newRoleText:{
        marginTop: windowHeight *0.05,  // This will make the text fall almost to the end of the screen
        marginBottom: windowHeight * 0.03,  // Add some margin at the bottom
        fontSize: windowWidth * 0.04,  // Adjust the font size
        textDecorationLine: 'underline',  // Underline the text
        color: '#06283d',
    }

});