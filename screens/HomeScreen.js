import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue dans les Terres de Xefi</Text>
      <Text style={styles.paragraph}>
        Plongez dans le monde enchanté de Legends of Xefi, un jeu de rôle épique qui vous emmène au cœur d'une saga héroïque où le destin de nombreux royaumes est en jeu.
        Dans ce monde peuplé de créatures mythiques, de guerriers valeureux et de magiciens aux pouvoirs incommensurables, chaque choix que vous faites peut changer le cours de l'histoire.
      </Text>
      <Text style={styles.subTitle}>Explorez des Paysages Envoûtants</Text>
      <Text style={styles.paragraph}>
        Voyagez à travers des forêts ancestrales, des montagnes interdites et des royaumes souterrains oubliés.
        Chaque région de Xefi offre ses propres défis et ses secrets à découvrir. Les graphismes somptueux et les environnements immersifs vous transportent dans un univers où la beauté se mêle au danger.
      </Text>
      <Text style={styles.subTitle}>Rencontrez des Personnages Inoubliables</Text>
      <Text style={styles.paragraph}>
        Xefi est peuplée de personnages complexes dotés de leurs propres histoires et motivations.
        Forgez des alliances ou rivalisez avec des héros et des antagonistes qui ne sont pas toujours ce qu'ils semblent être.
        Votre capacité à interagir avec ces personnages déterminera votre capacité à réussir dans les quêtes et à influencer le monde autour de vous.
      </Text>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#282c34',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#E6E6FA',
    textAlign: 'center',
    marginBottom: 30,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
    marginTop: 30,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#D3D3D3',
    textAlign: 'center',
    marginBottom: 20,
  },
});
