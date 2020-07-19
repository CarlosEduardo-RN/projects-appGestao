import React, {Component} from 'react';
import { View,Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Picker, Alert} from 'react-native';

import BarraNavegacao from '../components/BarraNavegação';

export default class Cadastro extends Component {
  constructor(props){
    super(props);
    this.state = { produto: 0, cliente: 0, funcionario: 0, tipo: 'tipo', unidade: 'unidade'};
  }

// ===============================================================================
// renderiza na aplicação o estado contendo formulário de cadastro de produtos
  produtoToque(){
    this.setState({
      funcionario: this.state.funcionario = 0,
      cliente: this.state.cliente = 0,
      produto: this.state.produto = 1
    });
  }
// ===============================================================================
// renderiza na aplicação o estado contendo formulário de cadastro de cliente
  clienteToque(){
    this.setState({
      funcionario: this.state.funcionario = 0,
      cliente: this.state.cliente = 1,
      produto: this.state.produto = 0
    });
  }
// ===============================================================================
// renderiza na aplicação o estado contendo formulário de cadastro de funcionários
  funcionarioToque(){
    this.setState({
      funcionario: this.state.funcionario = 1,
      cliente: this.state.cliente = 0,
      produto: this.state.produto = 0
    });
  }
  // ===============================================================================
  // cancela a operação retornando o formulário limpo
  btn_cancelar(){
    this.setState({
      funcionario: this.state.funcionario = 0,
      cliente: this.state.cliente = 0,
      produto: this.state.produto = 0
    })
  }
  // ===============================================================================
  // salva os dados no banco de dados, retorna um alerta informando se sim ou se não,
  // retorna o formulário limpo
  btn_salvar(){
    this.setState({
      funcionario: this.state.funcionario = 0,
      cliente: this.state.cliente = 0,
      produto: this.state.produto = 0
    })
    Alert.alert("SALVAR", "SALVO COM SUCESSO", [{ text: "OK" }]);
  }

  render(){
    // ===============================================================================
    // renderização com formulário de cadastro de funcionários
    if(this.state.funcionario == 1 ){
      return(
        <View style={styles.container}>  
          <BarraNavegacao voltar  navigator={this.props.navigator} />
            <ScrollView>
              <View style={styles.cont_botoes}>
                <View style={styles.botoes}><TouchableOpacity onPress={()=>{this.produtoToque();}}><Text style={styles.txt}>PRODUTOS</Text></TouchableOpacity></View>
                <View style={styles.botoes}><TouchableOpacity onPress={()=>{this.clienteToque();}}><Text style={styles.txt}>CLIENTES</Text></TouchableOpacity></View>
                <View style={styles.botoes}><TouchableOpacity onPress={()=>{this.funcionarioToque();}}><Text style={styles.txt}>FUNCIONÁRIOS</Text></TouchableOpacity></View>
                <View style={styles.botoes}><TouchableOpacity onPress={()=>{this.funcionarioToque();}}><Text style={styles.txt}>PROCURAR EM FUNCIONÁRIOS</Text></TouchableOpacity></View>
              </View>
                <View style={styles.formulario}>
                  <Text>CADASTRO DE FUNCIONÁRIOS:</Text>
                  <TextInput style={styles.entrada_txt} placeholder="Nome:"/>
                  <TextInput style={styles.entrada_txt} placeholder="CPF:"      keyboardType='numeric' maxLength={11}/>
                  <TextInput style={styles.entrada_txt} placeholder="E-mail:"   keyboardType='email-address'/>
                  <TextInput style={styles.entrada_txt} placeholder="Telefone:" keyboardType='numeric'maxLength={10}/>
                  <TextInput style={styles.entrada_txt} placeholder="Celular:"  keyboardType='numeric' maxLength={11}/>
                  <TextInput style={styles.entrada_txt} placeholder="Endereço:" />
                  <TextInput style={styles.entrada_txt} placeholder="Rua:"/>
                  <TextInput style={styles.entrada_txt} placeholder="Número:"   keyboardType='numeric'/>
                  <TextInput style={styles.entrada_txt} placeholder="Complemento:"/>
                  <TextInput style={styles.entrada_txt} placeholder="Cargo:"/>
              </View>
              <View style={styles.btn_cancel_salvar}>
                <TouchableOpacity style={styles.btn_cancelar} onPress={() => {this.btn_cancelar();}}><View><Text style={styles.btn_cancelar_txt}>CANCELAR</Text></View></TouchableOpacity>
                <TouchableOpacity style={styles.btn_salvar} onPress={() => {this.btn_salvar();}}><View><Text style={styles.btn_salvar_txt}>SALVAR</Text></View></TouchableOpacity>
              </View>
            </ScrollView>
        </View>
      );
    }else 
    // ===============================================================================
    // renderização com formulário de cadastro de clientes
    if(this.state.cliente == 1 ){
      return(
        <View style={styles.container}>
          <BarraNavegacao voltar  navigator={this.props.navigator} />  
            <ScrollView>
              <View style={styles.cont_botoes}>
                <View style={styles.botoes}><TouchableOpacity onPress={()=>{this.produtoToque();}}><Text style={styles.txt}>PRODUTOS</Text></TouchableOpacity></View>
                <View style={styles.botoes}><TouchableOpacity onPress={()=>{this.clienteToque();}}><Text style={styles.txt}>CLIENTES</Text></TouchableOpacity></View>
                <View style={styles.botoes}><TouchableOpacity onPress={()=>{this.funcionarioToque();}}><Text style={styles.txt}>FUNCIONÁRIOS</Text></TouchableOpacity></View>
                <View style={styles.botoes}><TouchableOpacity><Text style={styles.txt}>PROCURAR CLIENTES</Text></TouchableOpacity></View>
              </View>
                <View style={styles.formulario}>
                  <Text>CADASTRO DE CLIENTES:</Text>
                  <TextInput style={styles.entrada_txt} placeholder="Nome:" />
                  <TextInput style={styles.entrada_txt} placeholder="CPF:"                 keyboardType='numeric' maxLength={11}/>
                  <TextInput style={styles.entrada_txt} placeholder="CNPJ:"                keyboardType='numeric' maxLength={19}/>
                  <TextInput style={styles.entrada_txt} placeholder="E-mail:"              keyboardType='email-address'/>
                  <TextInput style={styles.entrada_txt} placeholder="Telefone:"            keyboardType='numeric' maxLength={10}/>
                  <TextInput style={styles.entrada_txt} placeholder="Celular:"             keyboardType='numeric' maxLength={11}/>
                  <TextInput style={styles.entrada_txt} placeholder="Inscrição Estadual:"  keyboardType='numeric' maxLength={10}/>
                  <TextInput style={styles.entrada_txt} placeholder="Endereço:"/>
                  <TextInput style={styles.entrada_txt} placeholder="Rua:"/>
                  <TextInput style={styles.entrada_txt} placeholder="Número:"              keyboardType='numeric'/>
                  <TextInput style={styles.entrada_txt} placeholder="Complemento:"/>
                </View>
                <View style={styles.btn_cancel_salvar}>
                  <TouchableOpacity style={styles.btn_cancelar} onPress={() => {this.btn_cancelar();}}><View><Text style={styles.btn_cancelar_txt}>CANCELAR</Text></View></TouchableOpacity>
                  <TouchableOpacity style={styles.btn_salvar} onPress={() => {this.btn_salvar();}}><View><Text style={styles.btn_salvar_txt}>SALVAR</Text></View></TouchableOpacity>
              </View>
            </ScrollView>
        </View>
      );
    }else 
    // ===============================================================================
    // renderização com formulário de cadastro de produtos
    if(this.state.produto == 1 ){
      return(
        <View style={styles.container}>
          <BarraNavegacao voltar  navigator={this.props.navigator} />  
            <ScrollView>
              <View style={styles.cont_botoes}>
                <View style={styles.botoes}><TouchableOpacity onPress={()=>{this.produtoToque();}}><Text style={styles.txt}>PRODUTOS</Text></TouchableOpacity></View>
                <View style={styles.botoes}><TouchableOpacity onPress={()=>{this.clienteToque();}}><Text style={styles.txt}>CLIENTES</Text></TouchableOpacity></View>
                <View style={styles.botoes}><TouchableOpacity onPress={()=>{this.funcionarioToque();}}><Text style={styles.txt}>FUNCIONÁRIOS</Text></TouchableOpacity></View>
                <View style={styles.botoes}><TouchableOpacity><Text style={styles.txt}>PROCURAR EM PRODUTOS</Text></TouchableOpacity></View>
              </View>
                <View style={styles.formulario}>
                  <Text>CADASTRO DE PRODUTOS:</Text>
                  <TextInput style={styles.entrada_txt} placeholder="Código:"   keyboardType='numeric' />
                  <Picker onValueChange={() => {false}}>
                    <Picker.Item label='Tipo' value='tipo'/>
                    <Picker.Item label='Produto' value='prod'/>
                    <Picker.Item label='Peça' value='peca' />
                  </Picker>
                  <TextInput style={styles.entrada_txt} placeholder="Data de Cadastro:" keyboardType='numeric'/>
                  <TextInput style={styles.entrada_txt} placeholder="Descrição:"/>
                  <Picker onValueChange={() => {false}}>
                    <Picker.Item label='Unidade (UN)' value='unid'/>
                    <Picker.Item label='Metro (MT)' value='mt'/>
                    <Picker.Item label='Quilograma (Kg)' value='kg' />
                  </Picker>
                  <TextInput style={styles.entrada_txt} placeholder="Fabricante:" />
                  <TextInput style={styles.entrada_txt} placeholder="Fornecedor:"/>
                  <TextInput style={styles.entrada_txt} placeholder="Preço de Venda:"   keyboardType='numeric'/>
                  <TextInput style={styles.entrada_txt} placeholder="Preço de Custo:"/>
                  <TextInput style={styles.entrada_txt} placeholder="NCM:"/>
                  <TextInput style={styles.entrada_txt} placeholder="Estoque Atual:"/>
                  <TextInput style={styles.entrada_txt} placeholder="Classe:"/>
                </View>
              <View style={styles.btn_cancel_salvar}>
                <TouchableOpacity style={styles.btn_cancelar} onPress={() => {this.btn_cancelar();}}><View><Text style={styles.btn_cancelar_txt}>CANCELAR</Text></View></TouchableOpacity>
                <TouchableOpacity style={styles.btn_salvar} onPress={() => {this.btn_salvar();}}><View><Text style={styles.btn_salvar_txt}>SALVAR</Text></View></TouchableOpacity>
              </View>
            </ScrollView>
        </View>
      );
    }else {
      // ===============================================================================
      // renderização sem nenhum formulário de cadastro
      return(
        <View style={styles.container}>
          <BarraNavegacao voltar  navigator={this.props.navigator} />   
            <ScrollView>
              <View style={styles.cont_botoes}>
                <View style={styles.botoes}><TouchableOpacity onPress={()=>{this.produtoToque();}}><Text style={styles.txt}>PRODUTOS</Text></TouchableOpacity></View>
                <View style={styles.botoes}><TouchableOpacity onPress={()=>{this.clienteToque();}}><Text style={styles.txt}>CLIENTES</Text></TouchableOpacity></View>
                <View style={styles.botoes}><TouchableOpacity onPress={()=>{this.funcionarioToque();}}><Text style={styles.txt}>FUNCIONÁRIOS</Text></TouchableOpacity></View>
              </View>
            </ScrollView>
        </View>
      );
    }
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
  },
  entrada_txt:{
    borderColor: '#000',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 3
  },
  formulario:{
    margin: 10
  },
  btn_cancel_salvar:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor:'#fff'
  },
  btn_cancelar:{
    borderRadius:7,
    backgroundColor: '#DC143C',
    width: 90,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn_cancelar_txt:{
    color: '#fff'
  },
  btn_salvar:{
    borderRadius:7,
    backgroundColor: '#00FF7F',
    width: 90,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn_salvar_txt:{
    color: '#fff'
  }
});