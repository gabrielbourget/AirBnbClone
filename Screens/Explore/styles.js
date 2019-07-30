import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
    safeAreaView: { flex: 1 },
    container: { flex: 1 },
    searchBar: {        
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginTop: Platform.OS === 'android' ? 30 : null,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'black',
        shadowOpacity: 0.2
    },
    searchTextInput: {
        flex: 1,
        fontWeight: '700',
        backgroundColor: 'white',
        marginLeft: 10
    },
    body: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 20
    },
    promptText: {
        fontSize: 24,
        fontWeight: '700',
        paddingHorizontal: 20
    },
    jumbotronCradle: {
        marginTop: 25,
        paddingHorizontal: 20
    },
    actionHeading: {
        fontSize: 24,
        fontWeight: '700'
    },
    actionSubHeading: {
        fontWeight: '100',
        marginTop: 10
    },
    jumbotronImage: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'cover',
        borderRadius: 2.5,
        shadowOffset: { width: 3, height: 6 },
        shadowColor: 'black',
        shadowOpacity: 0.8
    },

})

export default styles