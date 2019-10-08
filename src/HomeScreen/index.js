import React, { Component } from 'react';
import { StyleSheet, StatusBar, ImageBackground } from 'react-native';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        setTimeout(() => this.props.navigation.navigate('SignIn'), 2000)
    }

    render() {
        StatusBar.setHidden(true)
        return (
            <ImageBackground source={require('../../assets/images/main.jpg')} style={{ width: '100%', height: '100%' }}>

            </ImageBackground>
        )
    }
}



const styles = StyleSheet.create({

});
