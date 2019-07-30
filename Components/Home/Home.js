import React from 'react'
import {
    View, Text,
    Image, StyleSheet
} from 'react-native'

import styles from './styles'

import StarRating from 'react-native-star-rating'
import CachedImage from '../CachedImage/CachedImage'

class Home extends React.Component {

    render() {
        const { width, type, location, price, imageURI } = this.props
        return (
            <View style={{
                width: (width / 2) - 30,
                height: (width / 2) - 30,
                marginBottom: 20,
                borderWidth: 0.5,
                borderColor: '#DDD',
            }}>
                <View style={{ flex: 1}}>
                    <CachedImage
                        style={ styles.homeImage }
                        source={{ uri: imageURI }}
                    />
                </View>
                <View style={ styles.homeDetailsCradle }>
                    <Text style={ styles.homeTitle}>
                        { type }
                    </Text>
                    <Text style={ styles.homeLocation }>
                        { location }
                    </Text>
                    <Text style={ styles.accomodationRate }>
                        { price }
                    </Text>
                    <StarRating 
                        disable={ true }
                        maxStars={ 5 }
                        rating={ this.props.rating }
                        starSize={ 10 }
                    />
                </View>
            </View>
        );
    }
}

export default Home

// const styles_coupled = StyleSheet.create({
//     homeCradle: {
//         width: this.props.width / 2,
//         height: this.props.width / 2
//     }
// })