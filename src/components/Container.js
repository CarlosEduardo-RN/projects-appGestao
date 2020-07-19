import React, {Component} from 'react';
import { View,Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
// import { Actions } from 'react-native-router-flux';

import Barra from './BarraNavegação';

const Cadastro = require('../img/cadastro.png');
const Vendas = require('../img/fiscal.png');
const Produtos = require('../img/compras.png');
const Relatorios = require('../img/relatorio.png');
const Ordem = require('../img/Os.png');
const Estoque = require('../img/produto.png');

export default class Container extends Component {
    render(){
        return(
        <View>
            <Barra />
            <ScrollView>
                <View style={styles.container}>
                    <View style={[styles.card_cadastro, styles.card]}><TouchableOpacity onPress={() => {this.props.navigator.push({id: 'cadastro'});}} >
                        <Image style={styles.imagem} source={Cadastro} /><Text style={styles.txt}> CADASTRO </Text></TouchableOpacity></View>
                    <View style={[styles.card_vendas,   styles.card]}><TouchableOpacity onPress={() => {this.props.navigator.push({id: 'vendas'});}}>
                        <Image style={styles.imagem} source={Vendas} /><Text style={styles.txt}> VENDAS </Text></TouchableOpacity></View>
                    <View style={[styles.card_produtos, styles.card]}><TouchableOpacity onPress={() => {this.props.navigator.push({id: 'produtos'});}} >
                        <Image style={styles.imagem} source={Produtos} /><Text style={styles.txt}> PRODUTOS </Text></TouchableOpacity></View>
                    <View style={[styles.card_relatorio,styles.card]}><TouchableOpacity onPress={() => {this.props.navigator.push({id: 'relatorios'});}} >
                        <Image style={styles.imagem} source={Relatorios} /><Text style={styles.txt}> RELATÓRIOS </Text></TouchableOpacity></View>
                    <View style={[styles.card_servico,  styles.card]}><TouchableOpacity onPress={() => {this.props.navigator.push({id: 'servicos'});}} >
                        <Image style={styles.imagem} source={Ordem} /><Text style={styles.txt}> SERVIÇOS </Text></TouchableOpacity></View>
                    <View style={[styles.card_estoque,   styles.card]}><TouchableOpacity onPress={() => {this.props.navigator.push({id: 'estoque'});}} >
                        <Image style={styles.imagem} source={Estoque} /><Text style={styles.txt}> ESTOQUE </Text></TouchableOpacity></View>
                    <View style={styles.last}><Text style={styles.txtlast}>Desenvolvido por Kale Automação e Segurança</Text></View> 
                </View>
            </ScrollView>
        </View>
        );
    }
}
  

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10
    },
    card:{
        width: '100%',
        height: 125,
        borderRadius: 7,
        marginTop: 15,
        alignItems: 'center',
    },
    card_cadastro:{
        backgroundColor: '#00FFFF',
    },
    card_vendas:{
        backgroundColor: '#00FA9A',
    },
    card_produtos:{
        backgroundColor: '#BC8F8F',
    },
    card_relatorio:{
        backgroundColor: '#F08080',
    },
    card_servico:{
        backgroundColor: '#D8BFD8',
    },
    card_estoque:{
        backgroundColor: '#FF6347',
    },
    imagem: {
        margin: 10
    },
    last:{        
        backgroundColor: '#fff',
        width: '100%',
        height: 125,
        borderRadius: 7,
        marginTop: 15,
        alignItems: 'center'
    },
    txtlast:{
        marginTop:50
    },
    txt: {
        marginLeft: 10
    }
});
