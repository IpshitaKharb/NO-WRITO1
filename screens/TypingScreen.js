import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Platform,
  SafeAreaView,
} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import * as Font from 'expo-font'

let customFonts = {
  HomemadeApple: require('../Font/Handwriting/POLA.ttf'),
}

export default class TypingScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fontsLoaded: false,
    }
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts)
    this.setState({ fontsLoaded: true })
  }

  componentDidMount() {
    this._loadFontsAsync()
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <Image source={require('../assets/Paper.png')} style={styles.image} />
        <TextInput
          onChangeText={(yourText) => this.setState({ yourText })}
          placeholder={'Your Text'}
          style={styles.inputText}
          multiline={true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '115%',
    height: '135.5%',
    marginBottom: '-170.4%',
    resizeMode: 'contain',
  },

  inputText: {
    marginBottom: '180%',
    height: 130,
    width: '90%',
    fontFamily: 'HomemadeApple',
    fontSize: RFValue(20),
    color: 'blue',
  },

  imageContainer: {
    flex: 1,
  },

  handwriting1: {
    marginTop: RFValue(300),
    flex: RFValue(0.03),
  },
})
