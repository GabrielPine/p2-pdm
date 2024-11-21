import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


export default function App() {

  const testeClick = () => {
    console.log('Botão Pressionado')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fotos de Gatos 🐱</Text>
      <Button title="Carregar Fotos" onPress={testeClick}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  scrollView: {
    marginTop: 20,
  },
});

