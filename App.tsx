import React, { Component } from 'react';
import {StyleSheet, Text, Button,View,TextInput,ScrollView } from 'react-native';
import {Div,Input} from 'reactnative-ui-bootstrap'

const styles = StyleSheet.create({
	bigBlue: {
		color: 'blue',
		fontWeight: 'bold',
		fontSize: 30,
	},
	input:{
		margin:25,
		fontSize:40,
	},
	texto: {
		color: 'red',
		fontSize:30,
		margin:10,

	},
	branco: {
		color: 'white',
		fontWeight:'bold',
		fontSize:30,
	},
	todatela:{
		position:'relative',
		backgroundColor:'blue',
		padding:82,

	},
	baixo: {
		position:'relative',
		padding:40,

	},
});

class Greeting extends Component {
	constructor(props){
		super(props)
		this.state = {
			altura:0,massa:0,resultado:0,corDinamica:"blue",resultadoText:""
		}
		this.calcular = this.calcular.bind(this)
	}
	calcular() {
		let imc = this.state.massa / (this.state.altura * this.state.altura)
		imc = parseFloat(imc.toFixed(2));
		this.state.resultado = imc
		this.setState({resultado:imc})
		if (imc <=16) {
			this.setState({resultadoText:"Magreza Grave"})
			this.setState({corDinamica:"red"})

		}
		if (imc > 16 && imc <= 18.5 ) {
			this.setState({resultadoText:"Magreza"})
			this.setState({corDinamica:"orange"})

		}
		if (imc >18.5  && imc <=25) {
			this.setState({resultadoText:"Saudável"})
			this.setState({corDinamica:"green"})

		}
		if (imc >25 && imc<=30) {
			this.setState({resultadoText:"Sobrepeso"})
			this.setState({corDinamica:"orange"})
		}
		if (imc >30) {
			this.setState({resultadoText:"Obesidade"})
			this.setState({corDinamica:"red"})

		}
	}
	render() {
		return (

		<View >
			<Div style={styles.todatela} className={'container-fluid'} >
				<Text style={styles.branco}>Calcular IMC {this.props.name}!</Text>
			</Div>
			<Text style={[styles.texto,{color:this.state.corDinamica}]}> Resultado: {this.state.resultado}</Text>
			<Text  style={{fontSize:30,marginLeft:10,color:this.state.corDinamica}}   > {this.state.resultadoText}</Text>

			<View className={'row justify-content-md-center'}>
				<Input style={styles.input} placeholder="Altura" onChangeText={(altura)=>{this.setState({altura:altura})}} keyboardType="numeric"  />
				<Input style={styles.input} placeholder="Massa" className="form-control" onChangeText={(massa)=>{this.setState({massa:massa})}} keyboardType="numeric" />


				<Div style={styles.baixo} className={'col'}>
					<Button onPress={this.calcular} title="calcular" />
				</Div>
			</View>
		</View>
		);
	}
}

export default class LotsOfGreetings extends Component {

  render() {
    return (
	<ScrollView>
        <Greeting  />
	  </ScrollView>

    );
  }
}
