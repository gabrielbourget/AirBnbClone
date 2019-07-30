import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    scrollViewItemCradle: {
        height: 130, 
        width: 130,
        // TODO: -> Indicative of the need for a consistent 
        //          grid gap within a flexbox paradigm. 
        marginLeft: 20,
        borderWidth: 0.5,
        borderColor: '#DDD'
    },
    scrollViewItemTop: {
        height: 130, 
        width: 130,
        flex: 2
    },
    scrollViewItemImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    scrollViewItemBottom: {
        flex: 1,
    },
    scrollViewItemBottomText: {
        flex: 1,
        paddingLeft: 10, 
        paddingTop: 10
    }
})

export default styles