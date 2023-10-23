// Importer nødvendige moduler og komponenter fra React og React Native.
import React, { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

// Definer ImageScreen komponenten, som er beregnet til at vise et billede.
const ImageScreen = ({ route }) => {
    // State til at håndtere det billede, der skal vises.
    const [image, setImage] = useState(null);

    // Brug useEffect til at lytte til ændringer i 'route.params'.
    // Hvis der er en image URI i 'route.params', opdateres state med denne URI.
    useEffect(() => {
        // Tjek om 'route.params' indeholder en image URI.
        if (route.params && route.params.image) {
            setImage(route.params.image);
        }
        
        // Cleanup funktion. Når komponenten unmounts, nulstilles image state.
        return () => {
            setImage(null);
        };
    }, [route.params]);

    return (
        <View style={styles.container}>
     