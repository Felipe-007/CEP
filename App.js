/**
 * useState
 */
import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import api from "./src/services/api";

export default function App(){

  const [nome, setNome] = useState('Felipe Lopes')

  return(
    <View style={styles.container}>
      <Text>{ nome }</Text>
    </View>
  )
}