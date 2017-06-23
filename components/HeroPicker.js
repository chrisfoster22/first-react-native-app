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

                if (heroIndex === -1) {
                    heroPicker.setState({selectedHeroes: [...heroPicker.state.selectedHeroes, hero]})
                } else {
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

      console.log(selectText);

        return(
            <View>
                <View style={styles.container}>
                    {heroes}
                </View>
                <View>
                    {selectText}
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
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
