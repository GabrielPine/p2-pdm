import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

interface LoadButtonProps {
  onPress: () => void;
}

const LoadButton: React.FC<LoadButtonProps> = ({ onPress }) => {
  return (
    <View>
      <Button title="Carregar mais fotos" onPress={onPress} />
    </View>
  );
};

export default LoadButton;