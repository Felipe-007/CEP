/**
 * 
 */
import React, { useState, useRef } from "react";
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Keyboard } from "react-native";
import { styles } from "./styles";
import api from "./src/services/api";

export default function App() {

  const [cep, setCep] = useState('')
  const inputRef = useRef(null);
  const [cepUser, setCepUser] = useState(null);

  async function buscar() {
    if (cep == '') {  //se o cep for vazio cai aqui
      alert('Digite um CEP válido')
      setCep('') //volta a ficar vazio
      return;  //volta para o inicio
    }

    try {
      const resposta = await api.get(`/${cep}/json`);  //get busca se o cep que foi digitado é valido
      //console.log(resposta.data) //apresentará a resposta encontrada na requisição get
      setCepUser(resposta.data)  //passa para o setCepUser o resultado encontrado em  resposta.data
      Keyboard.dismiss();  //faz o teclado fechar
    } catch (error) {
      console.log('ERROR: ' + error)
    }
  }

  function limpar() {
    setCep('')
    inputRef.current.focus();  //ao limpar, fará com que o cursor permaneã no input
    setCepUser(null); //limpa os campos 
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.texto}>Digite o CEP desejado</Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: 73370100"
          value={cep}
          onChangeText={(texto) => setCep(texto)} //cria o texto, setCep recebera o valor digitado por meio texto
          keyboardType="numeric"
          ref={inputRef}
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={styles.botao} onPress={buscar}>
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={limpar}>
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {cepUser &&  //evita o erro, caso o cepUser começe como null
        <View style={styles.resultado}>
          <Text style={styles.itemText}>CEP: {cepUser.cep}</Text>
          <Text style={styles.itemText}>Logradouro: {cepUser.logradouro}</Text>
          <Text style={styles.itemText}>Bairro: {cepUser.bairro}</Text>
          <Text style={styles.itemText}>Cidade: {cepUser.localidade}</Text>
          <Text style={styles.itemText}>Estado: {cepUser.uf}</Text>
        </View>
      }
    </SafeAreaView>
  )
}