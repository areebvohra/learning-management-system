import React, { Component } from 'react';
import { StyleSheet, StatusBar, ImageBackground, View, Text, Image } from 'react-native';

export default class DashBoardScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        StatusBar.setHidden(true)
        return (
            <ImageBackground source={require('../../assets/images/bg.jpg')} style={{ width: '100%', height: '100%' }}>
                <View style={{ flex: 1, alignSelf: 'center', flexDirection: 'column', width: '95%' }}>
                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }} />
                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }} />


                    <View style={{ flex: 1, alignSelf: 'center', flexDirection: 'row', }}>
                        <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }} >
                            <Image style={styles.imageStyle} source={require('../../assets/images/examicon.png')} />
                        </View>
                        <View style={{ flex: 0.1 }} />
                        <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }} >
                            <Image style={styles.imageStyle} source={require('../../assets/images/mathematicsicon.png')} />
                        </View>
                    </View>

                    <View style={{ flex: 1, alignSelf: 'center', flexDirection: 'row', }}>
                        <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }} >
                            <Image style={styles.imageStyle} source={require('../../assets/images/othericon.png')} />
                        </View>
                        <View style={{ flex: 0.1 }} />
                        <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }} >
                            <Image style={styles.imageStyle} source={require('../../assets/images/scienceicon.png')} />
                        </View>
                    </View>

                    <View style={{ flex: 1, alignSelf: 'center', flexDirection: 'row', }}>
                        <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }} >
                            <Image style={styles.imageStyle} source={require('../../assets/images/socialicon.png')} />
                        </View>
                        <View style={{ flex: 0.1 }} />
                        <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }} >
                            <Image style={styles.imageStyle} source={require('../../assets/images/urduicon.png')} />
                        </View>
                    </View>

                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }} />
                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center' }} />
                </View>
            </ImageBackground>
        )
    }
}



const styles = StyleSheet.create({
    imageStyle: {
        width: '100%',
        height: '80%'
    }
});
