import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeroPicker from './HeroPicker';

export default class App extends React.Component {
  render() {

      heroPicker = heroes.map(function(hero) {
          return <HeroPicker name={hero.name} heroClass={hero.heroClass} abilities={hero.abilities.join(", ")} />
      })

    return (
      <View style={styles.container}>
        {heroPicker}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      padding: 40,
    flex: 1,
    backgroundColor: 'lightgrey',
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: 'space-between'
  }
});

const heroes = [

    {
        name: "Chris",
        heroClass: "Wizard",
        abilities: [
            "Fireball",
            "Ice"
        ]
    },
    {
        name: "Natasha",
        heroClass: "Ranger",
        abilities: [
            "Trap",
            "Pure Shot"
        ]
    }

]
