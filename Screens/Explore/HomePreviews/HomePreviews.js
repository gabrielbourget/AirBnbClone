import React from 'react'
import { View, Text } from 'react-native'
import Home from '../../../Components/Home/Home'

import styles from './HomePreviewsStyles'

class HomePreviews extends React.Component {
    render() {
        const { width } = this.props

        return (
            <View style={ styles.homepreviewsCradle }>
                <Text style={ styles.homePreviewsTagline }>
                    Homes around the world.
                </Text>
                <View style={ styles.homePreviewCradle }>
                    <Home 
                        width={ width }
                        imageURI="https://a0.muscache.com/im/pictures/81065909/64b04268_original.jpg?aki_policy=xx_large"
                        type="Elite 3 Bedroom"
                        location="Downtown"
                        price="$400"
                        rating={ 4 }
                    />
                    <Home 
                        width={ width }
                        imageURI="https://a0.muscache.com/im/pictures/0a35aa29-ac22-4ab1-bf09-9d01d8bd2493.jpg?aki_policy=large"
                        type="Party Loft"
                        location="Queen West"
                        price="$350"
                        rating={ 5 }
                    />
                    <Home 
                        width={ width }
                        imageURI="https://a0.muscache.com/im/pictures/83deb8da-8554-4cc8-816a-682a02b3a4f1.jpg?aki_policy=xx_large"
                        type="Unique, Bright Apartment"
                        location="The Annex"
                        price="$128"
                        rating={ 5 }
                    />
                </View>
            </View>
        )
    }
}

export default HomePreviews