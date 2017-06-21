import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HeroPicker extends React.Component {

    render() {

        return(
            <View style={styles.container}>
                <Text>{this.props.name}</Text>
                <Text>{this.props.heroClass}</Text>
                <Text>{this.props.abilities}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "black",
    width: 100,
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

});
