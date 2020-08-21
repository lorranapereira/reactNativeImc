import React, { Component } from 'react';
import {StyleSheet, Text,View,TextInput,ScrollView } from 'react-native';
import {Div,Input,P,Gradient,Button} from 'reactnative-ui-bootstrap'

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
			altura:0,massa:0,resultado:0,corDinamica:"#39B3E4",resultadoText:"",obs:"",positionrel:"absolute"
		}
		P.defaultProps ={
			className: "",
			h4: true,
			bold:true,
		}
		Gradient.defaultProps ={
			className: "",
			position:'absolute',
			height: 190,
			width: 360,
			zIndex: -1,
			horizontal: false,
			firstColor : "#1367DC",
			secondColor : "#39B3E4",
		};
		Button.defaultProps ={
			round:true,
		};	
		this.calcular = this.calcular.bind(this)
	}
	calcular() {
		if (this.state.massa !=0 || this.state.altura!=0) {
			let imc = this.state.massa / (this.state.altura * this.state.altura)
			imc = parseFloat(imc.toFixed(2));
			this.state.resultado = imc
			this.setState({resultado:imc})
			let saudavel1 = 18.6  * (this.state.altura * this.state.altura);
			let saudavel2 = 25  *(this.state.altura * this.state.altura);

			if (imc <=16) {
				this.setState({resultadoText:"Magreza Grave"})
				this.setState({obs:"Seu peso ideal é entre: "+parseFloat(saudavel1.toFixed(2))+"kg - "+parseFloat(saudavel2.toFixed(2))+"kg"})
				this.setState({corDinamica:"#E56256"})

			}
			if (imc > 16 && imc <= 18.5 ) {
				this.setState({resultadoText:"Magreza"})
				this.setState({corDinamica:"#F9A21F"})
				this.setState({obs:"Seu peso ideal é entre: "+parseFloat(saudavel1.toFixed(2))+"kg - "+parseFloat(saudavel2.toFixed(2))+"kg"})


			}
			if (imc >18.5  && imc <=25) {
				this.setState({resultadoText:"Saudável"})
				this.setState({corDinamica:"#5BD708"})
				this.setState({obs:"Seu peso ideal é entre: "+parseFloat(saudavel1.toFixed(2))+"kg - "+parseFloat(saudavel2.toFixed(2))+"kg"})


			}
			if (imc >25 && imc<=30) {
				this.setState({resultadoText:"Sobrepeso"})                           
				this.setState({obs:"Seu peso ideal é entre: "+parseFloat(saudavel1.toFixed(2))+"kg - "+parseFloat(saudavel2.toFixed(2))+"kg"})

				this.setState({corDinamica:"#F9A21F"})
			}
			if (imc >30) {
				this.setState({resultadoText:"Obesidade"})
				this.setState({corDinamica:"#E56256"})
				this.setState({obs:"Seu peso ideal é entre: "+parseFloat(saudavel1.toFixed(2))+"kg - "+parseFloat(saudavel2.toFixed(2))+"kg"})


			}
			this.setState({positionrel:"relative"})

		}else {
			this.setState({resultadoText:""})
			this.setState({resultado:0})
			this.setState({corDinamica:"#39B3E4"})



		}
	}
	render() {
		return (

		<View >
			<Gradient></Gradient>
			<Div style={styles.todatela} className={'container-fluid'} >
				<Text style={styles.branco}>Calcular IMC {this.props.name}!</Text>
			</Div>

			<View className={'row justify-content-md-center'}>
				<Div className={'col align-self-center'}>
					<P  style={{marginTop:10,color:this.state.corDinamica}}>Resultado: {this.state.resultado}</P>
				</Div>
				<Div className={'col align-self-center'}>
					<P  style={{position:this.state.positionrel,color:this.state.corDinamica}}>{this.state.resultadoText}</P>
				</Div>
				<Div >
					<P  style={{fontSize:20,marginTop:20,padding:20,textAlign:"center",position:this.state.positionrel,color:'#39B3E4'}}>{this.state.obs}</P>
				</Div>
				<Input style={styles.input}  placeholder="Altura" onChangeText={(altura)=>{this.setState({altura:altura})}} keyboardType="numeric"  />
				<Input style={styles.input} placeholder="Massa" className="form-control" onChangeText={(massa)=>{this.setState({massa:massa})}} keyboardType="numeric" />
				<Div style={styles.baixo} className={'col'}>
					<Button onPress={this.calcular}>Calcular</Button>
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
