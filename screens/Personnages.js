import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Personnages() {
  const [characters, setCharacters] = useState([]);
  const navigation = useNavigation(); 

  useEffect(() => {
    fetch('http://api-fantasygame.eu-4.evennode.com/get-characters')
      .then(response => response.json())
      .then(data => setCharacters(data))
      .catch(error => console.error('Error fetching characters:', error));
  }, []);

  const handleCharacterPress = characterId => {
    navigation.navigate('CharacterDetails', { characterId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personnages</Text>
      <FlatList
        data={characters}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleCharacterPress(item.id)} style={[styles.card, {backgroundColor: index % 2 === 0 ? '#37474F' : '#607D8B'}]}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.rarity}>Rareté : {item.rarity}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282c34',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#E6E6FA',
    marginBottom: 20,
  },
  listContainer: {
    width: '100%',
    paddingBottom: 20,
  },
  card: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  rarity: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 24,
  },
});
