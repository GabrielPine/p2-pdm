import React, { useState, useCallback } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import axios from 'axios';
import PhotoList from './PhotoList';
import LoadButton from './LoadButton';

interface CatPhoto {
  id: string;
  url: string;
}

export default function App() {
  const [photos, setPhotos] = useState<CatPhoto[]>([]);

  const fetchPhotos = useCallback(async () => {

    try {
      const response = await axios.get<CatPhoto[]>('https://api.thecatapi.com/v1/images/search?limit=5')
      setPhotos((prevPhotos) => [...prevPhotos, ...response.data]);
    } catch (error) {
      console.error('Erro ao buscar fotos:', error);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fotos de Gatos 🐱</Text>
      <LoadButton onPress={fetchPhotos} />
      <ScrollView style={styles.scrollView}>
        <PhotoList photos={photos} />
      </ScrollView>
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