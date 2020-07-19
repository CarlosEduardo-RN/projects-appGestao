import { Navigator }        from 'react-native-deprecated-custom-components';
import { AppRegistry }      from 'react-native';
import React, { Component } from 'react';
import {name as appName}    from './app.json';
// =====================================================
// imports das cenas utilizadas na navegação

import Container  from './src/components/Container';
import Cadastro   from './src/components/Cadastro';
import Vendas     from './src/components/Vendas';
import Produtos   from './src/components/Produtos';
import Relatorios from './src/components/Relatorios';
import Servico    from './src/components/Servicos';
import Estoque    from './src/components/Estoque';
// ========================================================


export default class App extends Component {
	render() {
		return (
			<Navigator
				initialRoute={{ id: 'principal' }}
				renderScene={(route, navigator) => {
					switch (route.id) {
						case 'principal':
							return (<Container navigator={navigator} />);
						case 'cadastro':
							return (<Cadastro navigator={navigator} />);
                        case 'vendas':
                            return (<Vendas navigator={navigator} />);
                        case 'produtos':
                            return (<Produtos navigator={navigator} />);
                        case 'relatorios':
                            return (<Relatorios navigator={navigator} />);
                        case 'servicos':
                            return (<Servico navigator={navigator} />);
                        case 'estoque':
                            return (<Estoque navigator={navigator} />);
						default: return false;
					}
				}} 
			/>
		);
	}
}

AppRegistry.registerComponent(appName, () => App);
