import React,{createRef} from 'react';
import { View, StyleSheet, TouchableOpacity, Text,SafeAreaView } from 'react-native';

import { WebView } from 'react-native-webview';

const WEBVIEW_REF = createRef();

export default class WebViewScreen extends React.Component {
  

  buttonOnPress = () => {
    console.warn('button Pressed')
  }

  

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <WebView
          source={{ uri: 'https://incsonline.in/' }}
          style={styles.webview}
          ref={WEBVIEW_REF}
        />

        <TouchableOpacity style={styles.button} onPress={() => WEBVIEW_REF.current.goBack()}>
          <Text style={{textAlign: 'center', color: '#FFFFFF',fontSize:18,}}>GoBack</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,

  },
  webview: {
    flex: 1,
  },
  button: {
    padding: 15, 
    backgroundColor: '#002db3', 
    justifyContent: 'center', 
    alignItems: 'center',
    margin:10,
    borderRadius:50,
    
  }
});