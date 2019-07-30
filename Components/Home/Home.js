import React from 'react'
import {
    View, Text,
    Image, StyleSheet
} from 'react-native'

import styles from './styles'

class Home extends React.Component {
    render() {
        return (
            <View style={ styles_coupled.homeCradle }>
            <View style={{ flex: 1}}>
                <Image
                    style={ styles.homeImage }
                    source={ require('../../assets/home.jpg') }
                />
            </View>
            <View style={ styles.homeDetailsCradle }>
                <Text style={ styles.homeTitle}>
                    PRIVATE ROOM - 2 BEDS
                </Text>
                <Text style={ styles.homeLocation }>
                    Midtown
                </Text>
                <Text style={ styles.accomodationRate }>
                    45$ / Night
                </Text>
            </View>
        </View>
        );
    }
}

export default Home

const styles_coupled = StyleSheet.create((props) =>{
    homeCradle: {
        width: this.props.width / 2,
        height: this.props.width / 2
    }
})