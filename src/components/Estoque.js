import React, {Component} from 'react';
import { View,Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import BarraNavegacao from '../components/BarraNavegação';

export default class Vendas extends Component {

  constructor(props){
    super(props);
    this.state = { mov_estoque: 0};
  }
  movimentar_estoque(){
    this.setState({
      mov_estoque: this.state.mov_estoque = 1
    });
  }
  render(){
    if(this.state.mov_estoque == 1){
      return(
        <View style={styles.container}>
          <BarraNavegacao voltar  navigator={this.props.navigator} />   
            <ScrollView>
              <View style={styles.cont_botoes}>
                <View style={styles.botoes}><TouchableOpacity><Text style={styles.txt}>PRODUTOS CADASTRADOS </Text></TouchableOpacity></View>
                <View style={styles.botoes}><TouchableOpacity><Text style={styles.txt}>ESTOQUE ATUAL</Text></TouchableOpacity></View>
                <View style={styles.botoes}><TouchableOpacity><Text style={styles.txt}>MOVIMENTAR ESTOQUE</Text></TouchableOpacity></View>
              </View>
              <View>
                  <Text>PÁGINA PARA MOVIMENTAR ESTOQUE</Text>
              </View>
            </ScrollView>
        </View>
        );
    }
    return(
    <View style={styles.container}>
      <BarraNavegacao voltar  navigator={this.props.navigator} />   
        <ScrollView>
          <View style={styles.cont_botoes}>
            <View style={styles.botoes}><TouchableOpacity><Text style={styles.txt}>PRODUTOS CADASTRADOS </Text></TouchableOpacity></View>
            <View style={styles.botoes}><TouchableOpacity><Text style={styles.txt}>ESTOQUE ATUAL</Text></TouchableOpacity></View>
            <View style={styles.botoes}><TouchableOpacity onPress={()=>{this.movimentar_estoque();}}><Text style={styles.txt}>MOVIMENTAR ESTOQUE</Text></TouchableOpacity></View>
          </View>
        </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff'
  },
  cont_botoes:{
    flex:1,
    backgroundColor: '#fff',
    marginLeft: 5,
    marginRight: 5
  },
  botoes: {
    height: 35,
    width: '100%',
    backgroundColor: '#66CDAA',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2
  },
  txt:{
    color:'white'
  }
});