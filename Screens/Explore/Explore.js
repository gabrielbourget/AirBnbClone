import React from 'react'
import {
    View, SafeAreaView,
    TextInput, Platform,
    StatusBar, ScrollView,
    Text, Dimensions,
    StyleSheet, Image,
    Animated
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

// - Project Components
import Category from '../../Components/Category/Category'
import Home from '../../Components/Home/Home'
import Tag from '../../Components/Tag/Tag'
import CachedImage from '../../Components/CachedImage/CachedImage'

// - Internal Components
import CategorySlider from './CategorySlider/CategorySlider'
import HomePreviews from './HomePreviews/HomePreviews'

import styles from './styles' 

const { width } = Dimensions.get('window')

class Explore extends React.Component {

    constructor(props) {
        super(props)

        this.startHeaderHeight = null
        this.endHeaderHeight = null 
        this.animatedHeaderHeight = null 
        this.animatedOpacity = null 
        this.animatedTagTop = null
    }

    componentDidMount() {

        this.scrollY = new Animated.Value(0)

        this.startHeaderHeight = 105
        this.endHeaderHeight = 75
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 125 + StatusBar.currentHeight
            this.endHeaderHeight = 95 + StatusBar.currentHeight
        }

        this.animatedHeaderHeight = this.scrollY.interpolate({
            inputRange:[0,50],
            outputRange:[this.startHeaderHeight, this.endHeaderHeight],
            extrapolate: 'clamp'
        })

        this.animatedOpacity = this.animatedHeaderHeight.interpolate({
            inputRange: [ this.endHeaderHeight, this.startHeaderHeight ],
            outputRange: [0,1],
            extrapolate: 'clamp'
        })

        this.animatedTagTop = this.animatedHeaderHeight.interpolate({
            inputRange: [ this.endHeaderHeight, this.startHeaderHeight ],
            outputRange: [-30,10],
            extrapolate: 'clamp'
        })
    }

    render(){
        console.log(this.startHeaderHeight, this.endHeaderHeight,
            this.animatedHeaderHeight, this.animatedOpacity, this.animatedTagTop)
        return (
            <SafeAreaView style={ styles.safeAreaView }>
                <View style={ styles.container }>
                    
                    {/* HEADER */}
                    <Animated.View style={ styles_coupled.header }>
                        <View style={ styles.searchBar }>
                            <Icon name='ios-search' size={ 20 }/>
                            <TextInput 
                                placeholder='Try somewhere new'
                                placeholderTextColor='grey'
                                style={ styles.searchTextInput }
                            />
                        </View>
                        <Animated.View style={ styles_coupled.tagsCradle }>
                            <Tag text="Guests"/>
                            <Tag text="Dates"/>
                            <Tag text="Events"/>
                        </Animated.View>
                    </Animated.View>

                    {/* PAGE BODY */}
                    <ScrollView 
                        scrollEventThrottle={16}
                        onScroll={ Animated.event(
                            [
                                {
                                    nativeEvent: { contentOffset: { y: this.scrollY }}
                                }
                            ]
                        )}
                    >
                        <View style={ styles.body }>
                            <Text style={ styles.promptText }>
                                What can we help you find?
                            </Text>
                        </View>

                        {/* CATEGORY SLIDER */}
                        <CategorySlider/>

                        {/* JUMBOTRON */}
                        <View style={ styles.jumbotronCradle }>
                            <Text style={ styles.actionHeading }>
                                Introducing AirBnb Plus
                            </Text>
                            <Text style={ styles.actionSubHeading }>
                                A new selection of homes verified for quality and comfort.
                            </Text>
                        </View>
                        <View style={ styles_coupled.jumbotronImageCradle }>
                            <CachedImage 
                                style={ styles.jumbotronImage }
                                source={{ uri: 'https://images.unsplash.com/photo-1530256581378-2c72deb2c0a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80' }}
                            />
                        </View>

                        {/* HOME PREVIEWS */}
                        <HomePreviews width={ width }/>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

export default Explore

const styles_coupled = StyleSheet.create({
    header: {
        height: 105,
        height: this.animatedHeaderHeight,
        paddingTop: 20,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#DDD',      
    },
    tagsCradle: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        position: 'relative',
        // top: 10,
        top: this.animatedTagTop,
        opacity: this.animatedOpacity
    },
    jumbotronImageCradle: {
        width: width - 40,
        height: 200,
        margin: 20
    },
})