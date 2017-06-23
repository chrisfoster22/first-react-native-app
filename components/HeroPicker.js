import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class HeroPicker extends React.Component {

    constructor(props) {
        super(props);
        this.totalHeroes = 3;
        this.state = {
            selectedHeroes: [],
        }
    }

    render() {

        let heroPicker = this;
        let numChosen = this.totalHeroes - this.state.selectedHeroes.length;
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

                let heroIndex = heroPicker.state.selectedHeroes.indexOf(hero);

                if (heroIndex === -1 && numChosen > 0) {
                    heroPicker.setState({selectedHeroes: [...heroPicker.state.selectedHeroes, hero]})
                } else if (heroIndex > -1) {
                    let selectedHeroes = heroPicker.state.selectedHeroes;
                    selectedHeroes.splice(heroIndex, 1);
                    heroPicker.setState({selectedHeroes: selectedHeroes})
                }

            }
      })

      let selectText;

      (() => {
          selectText = numChosen === 0 ? <Text>Start!</Text> : <Text>Choose {numChosen} more heroes!</Text>
      })()

        return(
            <View style={styles.heroPicker}>
                <View style={styles.container}>
                    {heroes}
                </View>
                <View style={styles.selectText}>
                    {selectText}
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    heroPicker: {
        flex: 1
    },
    selectText: {
        flex: 1,
        alignItems: "center"
    },
    container: {
        flex: 1,
        flexDirection: "row",
        padding: 10,
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-around"
    },
      hero: {
          margin: 10,
        borderWidth: 2,
        borderColor: "black",
        width: 120,
        height: 100,
        // flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    highlight: {
        backgroundColor: "red"
    }

});
