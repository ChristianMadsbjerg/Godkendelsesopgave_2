// Importer nødvendige komponenter fra React Native.
import {Button, StyleSheet, Text, View} from "react-native";
// Importer React. Bemærk, at dette teknisk set ikke er nødvendigt, 
// da "react-native" også indeholder de nødvendige React-eksporter, 
// men det er blevet importeret for klarheds skyld.
import * as React from "react";

// Definer "Contracts" funktionen (komponenten). 
// Denne komponent indeholder to knapper, der navigerer til andre skærme i appen.
function Contracts({navigation}) {
    return (
        // Brug en View komponent til at gruppere indholdet.
        <View style={styles.container}>
            // Første knap, der ved klik vil navigere til 'Camera' skærmen.
            <Button title="Camera" onPress={() => navigation.navigate('Camera')} />
            // Anden knap, der ved klik vil navigere til 'Image' skærmen.
            <Button title="Image" onPress={() => navigation.navigate('Image')} />
        </View>
    );
}

// Eksporter "Contracts" komponenten, så den kan bruges i andre dele af appen.
export default Contracts;

// Definer styles for denne komponent ved hjælp af React Native's StyleSheet.
const styles = StyleSheet.create({
    container: {
        paddingTop: 100,          // Indstil øverste polstring til 100 pixels.
        paddingBottom: 100,       // Indstil nederste polstring til 100 pixels.
        borderColor: 'green',     // Sæt kantfarve til grøn.
        borderWidth: 20,          // Indstil kantbredden til 20 pixels.
        flex: 1,                  // Tillad komponenten at fylde tilgængelig plads.
        justifyContent: 'center', // Centrer børneelementer lodret.
        alignItems: 'center',     // Centrer børneelementer vandret.
        backgroundColor: 'white', // Indstil baggrundsfarve til hvid.
        height: '100%'            // Sæt højden til 100% af forældrekomponenten.
    },
});
