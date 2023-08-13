import { useRouter, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import portraits from '../data/portraits';
import { Ionicons } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';

const PortraitDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const portrait = portraits.find((p) => p.id == id);

  const handlePressBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        sharedTransitionTag={`image-${portrait.id}`}
        style={styles.image}
        source={portrait.image}
      />
      <Animated.Text
        sharedTransitionTag={`title-${portrait.id}`}
        style={styles.name}
      >
        {portrait.name}
      </Animated.Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Details:</Text>
        <Text style={styles.detailsText}>{portrait.description}</Text>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={handlePressBack}>
        <Ionicons name='ios-arrow-back' size={24} color='#FFFFFF' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: '50%',
    objectFit: 'fill',
    resizeMode: 'cover',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 16,
  },
  detailsContainer: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailsText: {
    fontSize: 16,
    lineHeight: 24,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#000000',
    opacity: 0.8,
  },
});

export default PortraitDetails;
