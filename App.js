//Import
import React from 'react';
import {Text, AppRegistry, View, Alert, Image, TouchableOpacity} from 'react-native';

//Formatações
const Estilos = {
  principal:{
    backgroundColor: '#f1f2f6',
    flex: 1,  
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    backgroundColor:'#538530',
    color:'#FFF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 30,
  },
  textoBotao:{
    color:'#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  } 
 
};

const gerarFrase = () =>{

  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);

  //frases
  var frases = Array();
  frases[0] = 'A motivação não é a fórmula mágica para atingir o sucesso, mas certamente garante o caminho mais rápido para o alcançar. ';
  frases[1] = 'Sua luta não termina quando sentir cansaço, mas sim quando atingir o sucesso tão merecido. ';
  frases[2] = 'Você não só tem o direito de ser feliz como também tem a obrigação de lutar para alcançar a felicidade.';
  frases[3] = 'Você não só tem o direito de ser feliz como também tem a obrigação de lutar para alcançar a felicidade.';
  frases[4] = 'Às vezes um pouco de motivação ajuda a superar os maiores desafios.';

  var fraseEscolhida = frases[ numeroAleatorio ];

  //Função alert que pode ser customizada
  Alert.alert(
    'Frase do dia', //Dando um titulo para o Alert
    fraseEscolhida,
    );
}

//Criar o componente
export default class App extends React.Component {
  render() {
    const { principal, botao, textoBotao } = Estilos; //Destructuring Assignment
    return (
      //View é como um container, a caixa principal
      <View style={ principal } >   

      <Image source={require('./imgs/logo.png')}/>

     <TouchableOpacity 
        onPress={ gerarFrase }
        style={botao}>
       <Text style={textoBotao}>Gerar Frase</Text>
     </TouchableOpacity> 

      </View>
    );
  }
}

AppRegistry.registerComponent('frasesdodia', () => App);
