import React from 'react'
import {
    View, SafeAreaView,
    TextInput, Platform,
    StatusBar, ScrollView,
    Text, Dimensions,
    StyleSheet, Image
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import Category from '../../Components/Category/Category'
import Home from '../../Components/Home/Home'

import styles from './styles' 

const { height, width } = Dimensions.get('window')

class Explore extends React.Component {

    componentDidMount() {
        this.startHeaderHeight = 80

        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    render(){
        return (
            <SafeAreaView style={ styles.safeAreaView }>
                <View style={ styles.container }>
                    
                    {/* HEADER */}
                    <View style={ styles.header }>
                        <View style={ styles.searchBar }>
                            <Icon name='ios-search' size={ 20 }/>
                            <TextInput 
                                placeholder='Try somewhere new'
                                placeholderTextColor='grey'
                                style={ styles.searchTextInput }
                            />
                        </View>
                    </View>

                    {/* PAGE BODY */}
                    <ScrollView scrollEventThrottle={16} >
                        <View style={ styles.body }>
                            <Text style={ styles.promptText }>
                                What can we help you find?
                            </Text>
                        </View>

                        {/* CATEGORY SLIDER */}
                        <View style={ styles.scrollViewCradle }>
                            <ScrollView
                                horizontal={ true }
                                showsHorizontalScrollIndicator={ false }
                            >
                                <Category
                                    imageURI={ require('../../assets/home.jpg')}
                                    name='Home'
                                />
                                <Category
                                    imageURI={ require('../../assets/experiences.jpg')}
                                    name='Experiences'
                                />                                
                                <Category
                                    imageURI={ require('../../assets/restaurant.jpg')}
                                    name='Restaurants'
                                />
                            </ScrollView>
                        </View>

                        {/* JUMBOTRON */}
                        <View style={ styles.jumbotronCradle }>
                            <Text style={ styles.actionHeading }>
                                Introducing AirBnb Plus
                            </Text>
                            <Text style={ styles.actionSubHeading }>
                                A new selection of homes verified for quality and comfort.
                            </Text>
                        </View>
                        <View style={ styles_two.jumbotronImageCradle }>
                            <Image 
                                style={ styles.jumbotronImage }
                                source={{ uri: 'https://images.unsplash.com/photo-1530256581378-2c72deb2c0a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80' }}
                            />
                        </View>

                        {/* HOME PREVIEWS */}
                        <View style={ styles.homepreviewsCradle }>
                            <Text style={ styles.homePreviewsTagline }>
                                Homes around the world.
                            </Text>
                            <View style={ styles.homePreviewCradle }>
                                <Home
                                    width={ width }
                                />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

export default Explore

const styles_two = StyleSheet.create({
    jumbotronImageCradle: {
        width: width - 40,
        height: 200,
        margin: 20
    },
})