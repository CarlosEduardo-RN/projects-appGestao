import React, {Component} from 'react';
import { View,Text, StyleSheet, TouchableHighlight, Image } from 'react-native';

const btnVoltar = require('../img/btn_volta.png');

export default class BarraNavegacao extends Component {
    render(){
        if (this.props.voltar) {
            return (
                <View style={styles.img}> 
                    <TouchableHighlight underlayColor='#708090' activeOpacity={0.3} onPress={() => { this.props.navigator.pop();}}>
                        <Image source={btnVoltar} />
                    </TouchableHighlight>
                        <Text style={styles.txt} >SmartDev</Text>
                </View>
            );
        }
        return(
            <View style={styles.container}>
                <Text style={styles.texto}>SmartDev</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 60,
        width: '100%',
        backgroundColor: '#708090',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    img:{
        flexDirection: 'row',
        height: 60,
        width: '100%',
        backgroundColor: '#708090',
        alignItems: 'center'
    },
    txt:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 100
    }
});

