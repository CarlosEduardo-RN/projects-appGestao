import React, {Component} from 'react';
import { View,Text, StyleSheet} from 'react-native';

import BarraNavegacao from '../components/BarraNavegação';

export default class Vendas extends Component {
  render(){
    return(
      <View style={styles.container}>
        <BarraNavegacao voltar  navigator={this.props.navigator} />
        <View style={styles.container}>
          <Text>Página de Relatorios</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});