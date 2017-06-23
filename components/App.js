import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeroPicker from './HeroPicker';

export default class App extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <HeroPicker heroes={heroes} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    // flexDirection: "row"
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
        heroClass: "Wizard",
        abilities: [
            "Intuition",
            "Spell Shield"
        ]
    },
    {
        name: "Georgina",
        heroClass: "Swamp Witch",
        abilities: [
            "Herbal Remedy",
            "Poison Shot"
        ]
    },
    {
        name: "Blair",
        heroClass: "Red Priestess",
        abilities: [
            "Consecrate",
            "Heal"
        ]
    }


]
