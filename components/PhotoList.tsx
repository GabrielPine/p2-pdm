import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface PhotoListProps {
  photos: { id: string; url: string }[];
}

const PhotoList: React.FC<PhotoListProps> = ({ photos }) => {
  return (
    <View>
      {photos.map((photo) => (
        <Image key={photo.id} source={{ uri: photo.url }} style={[styles.image, {marginTop: 20}]} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    maxWidth: 500,
    aspectRatio: 1.5,
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 10,
    resizeMode: 'cover', 
  },
});

export default PhotoList;