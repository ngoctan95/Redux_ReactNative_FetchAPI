import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {styles} from '../../styles/style';
class Header extends Component{
    render(){
        return(
            <View style={this.props.style}>
             <View style={{justifyContent:'center',flex:1}}>
                <Text style={styles.text}>{this.props.title}</Text>
             </View>
            </View>
        )
    }
}
export default Header;