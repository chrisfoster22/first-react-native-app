import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class HeroPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedHeroes: []
        }
    }

    render() {

        let heroPicker = this;

      let heroes = this.props.heroes.map(function(hero, index) {

          let heroStyles = styles.hero;

          if (heroPicker.state.selectedHeroes.includes(hero)) {
              console.log('HEOOL');
              heroStyles = [styles.hero, styles.highlight]
          };

          return(
              <TouchableOpacity style={heroStyles} onPress={selectHero}>
                  <Text>{hero.name}</Text>
                  <Text>{hero.heroClass}</Text>
                  <Text>{hero.abilities.join(", ")}</Text>
              </TouchableOpacity>
            )

            function selectHero() {
                heroPicker.setState({selectedHeroes: [...heroPicker.state.selectedHeroes, hero]})

            }
      })

        return(
            <View style={styles.container}>
                {heroes}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        padding: 10
    },
      hero: {
          margin: 20,
        borderWidth: 2,
        borderColor: "black",
        width: 100,
        height: 100,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    highlight: {
        backgroundColor: "red"
    }

});
