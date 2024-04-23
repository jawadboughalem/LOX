import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const CharacterDetails = ({ route }) => {
  const { characterId } = route.params;
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`http://api-fantasygame.eu-4.evennode.com/get-character/${characterId}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
      })
      .catch((error) => {
        console.error('Error fetching character details:', error);
      });
  }, []);

  if (!character) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.overlay}>
        <View style={{ height: 300 }}></View>
        <Text style={styles.name}>{character.name}</Text>
        <View style={styles.infoContainer}>
          <View style={[styles.infoBox, { backgroundColor: 'rgba(135, 206, 235, 0.8)' }]}>
            <Text style={styles.infoText}>Points de vie :</Text>
            <Text style={styles.infoValue}>{character.hp}</Text>
          </View>
          <View style={[styles.infoBox, { backgroundColor: 'rgba(173, 216, 230, 0.8)' }]}>
            <Text style={styles.infoText}>Points d'attaque :</Text>
            <Text style={styles.infoValue}>{character.attack_points}</Text>
          </View>
          <View style={[styles.infoBox, { backgroundColor: 'rgba(176, 224, 230, 0.8)' }]}>
            <Text style={styles.infoText}>Attaque principale :</Text>
            <Text style={styles.infoValue}>{character.main_attack}</Text>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{character.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
  },
  scrollView: {
    flexGrow: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    color: '#ADD8E6',
    textTransform: 'uppercase',
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFF'  
  },
  infoText: {
    fontSize: 18,
    marginRight: 10,
    color: '#FFF', 
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  descriptionContainer: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#FFF',  
    borderRadius: 5,
    backgroundColor: 'rgba(135, 206, 235, 0.4)', 
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFF',
  },
});

export default CharacterDetails;
