import React from 'react'
import { Image, View, Text } from 'react-native'

import styles from './styles'

class Category extends React.Component {
    render() {
        const { imageURI, name } = this.props

        return (
            <View style={ styles.scrollViewItemCradle }>
                <View style={ styles.scrollViewItemTop }>
                    <Image
                        source={ imageURI }
                        style={ styles.scrollViewItemImage }
                    />
                </View>
                <View style={ styles.scrollViewItemBottom }>
                    <Text style={ styles.scrollViewItemBottomText }>
                        { name }
                    </Text>
                </View>
            </View>
        );
    }
}

export default Category;