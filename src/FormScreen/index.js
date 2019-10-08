import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar, ImageBackground, TextInput } from 'react-native';

export default class FormScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        StatusBar.setHidden(true)
        return (
            <ImageBackground source={require('../../assets/images/bg.jpg')} style={{ width: '100%', height: '100%' }}>

                <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', flexDirection: 'column', width: '80%' }}>

                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }} />

                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 30, fontWeight: '600', color: '#f15a23', textAlign: 'center' }}>Register</Text>
                    </View>

                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }} />
                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }} />


                    <View style={styles.textView} >
                        <TextInput placeholderTextColor="black" placeholder="First Name" style={styles.textInput} />
                    </View>

                    <View style={styles.textView} >
                        <TextInput placeholderTextColor="black" placeholder="Last Name" style={styles.textInput} />
                    </View>

                    <View style={styles.textView} >
                        <TextInput placeholderTextColor="black" placeholder="User ID  " style={styles.textInput} />
                    </View>

                    <View style={styles.textView} >
                        <TextInput placeholderTextColor="black" placeholder="Password" style={styles.textInput} />
                    </View>

                    <View style={styles.textView} >
                        <TextInput placeholderTextColor="black" placeholder="Email" style={styles.textInput} />
                    </View>

                    <View style={styles.textView} >
                        <TextInput placeholderTextColor="black" placeholder="Mobile" style={styles.textInput} />
                    </View>

                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }} />
                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }} />

                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }} >
                        <Text onPress={() => this.props.navigation.navigate('SignIn')} style={{ fontSize: 30, fontWeight: '600', color: '#f15a23', textAlign: 'center' }}>Sign In</Text>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }} >
                        <Text style={{ textAlign: 'center' }}>if you already have an account please sign in</Text>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }} />

                </View>

            </ImageBackground>
        )
    }
}



const styles = StyleSheet.create({
    textInput: {
        textAlign: 'left',
        fontSize: 17,
        color: '#f15a23'
    },
    textView: {
        flex: 1,
        justifyContent: 'center',
        borderColor: '#f15a23',
        borderWidth: 2,
        backgroundColor: 'white',
        borderRadius: 50,
        paddingLeft: 20,
        marginVertical: 5
    }
});
