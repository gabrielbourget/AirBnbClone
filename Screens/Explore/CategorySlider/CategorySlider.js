import React from 'react'
import { View, ScrollView } from 'react-native'
import Category from '../../../Components/Category/Category'

import styles from './CategorySliderStyles'

class CategorySlider extends React.Component {
    render() {
        return (
            <View style={ styles.scrollViewCradle }>
                <ScrollView
                    horizontal={ true }
                    showsHorizontalScrollIndicator={ false }
                >
                    <Category
                        imageURI={ require('../../../assets/home.jpg')}
                        name='Home'
                    />
                    <Category
                        imageURI={ require('../../../assets/experiences.jpg')}
                        name='Experiences'
                    />                                
                    <Category
                        imageURI={ require('../../../assets/restaurant.jpg')}
                        name='Restaurants'
                    />
                </ScrollView>
            </View>
        )
    }
}

export default CategorySlider