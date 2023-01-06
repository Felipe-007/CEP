/**
 * 
 */
import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import api from "./src/services/api";

export default function App() {

  const [cep, setCep] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.texto}>Digite o CEP desejado</Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: 73370100"
          value={cep}
          onChangeText={ (texto) => setCep(texto) } //cria o texto, setCep recebera o valor digitado por meio texto
          keyboardType="numeric"
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultado}>
        <Text style={styles.itemText}>CEP: 73370100</Text>
        <Text style={styles.itemText}>Logradouro: 73370100</Text>
        <Text style={styles.itemText}>Bairro: 73370100</Text>
        <Text style={styles.itemText}>Cidade: 73370100</Text>
        <Text style={styles.itemText}>Estado: 73370100</Text>
      </View>
    </SafeAreaView>
  )
}