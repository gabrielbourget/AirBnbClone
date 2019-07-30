import React from 'react'

import { View, Text } from 'react-native'

import styles from './styles'

class Tag extends React.Component {
    render() {
        const { text } = this.props

        return(
            <View style={ styles.tagCradle }>
                <Text style={ styles.tagText }>{ text }</Text>
            </View>
        )
    }
}

export default Tag