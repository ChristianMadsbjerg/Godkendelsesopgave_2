import React, {Fragment, useEffect, useRef, useState} from "react";
import {Camera} from "expo-camera";
import {ActivityIndicator, Button, Image, Linking, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as ImagePicker from "expo-image-picker";
import {StatusBar} from "expo-status-bar";
import { Ionicons } from '@expo/vector-icons';

const CameraScreen = ({navigation}) => {
    const cameraRef = useRef();
    const [hasPermission, setHasPermission] = useState(null);
    const [imagesArr, setImagesArr] = useState([]);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera permissions to make this work!');
            }

            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return (
            <View style={styles.gallery}>
                <Text>No access to camera</Text>
                <Button title={"Change settings"} onPress={() => Linking.openSettings()}/>
            </View>
        )
    }

    const snap = async () => {
        if (!cameraRef.current) return;
        setLoading(true);
        const result = await cameraRef.current.takePictureAsync();
        setImagesArr((imagesArr) => [result].concat(imagesArr));
        setLoading(false);
    };

    const CameraGallery = () => {
        return (
            <View style={styles.gallery}>
                <Text style={styles.buttonGallery}>Billeder taget: {imagesArr.length}</Text>
                <ScrollView horizontal={true} >
                    {
                        imagesArr.length > 0
                            ? imagesArr.map((image,index) => (
                                <TouchableOpacity key={index} style={{paddingHorizontal:10}} onPress={() => navigation.navigate('image',{image:image.uri}) } >
                                    <Image source={{ uri: image.uri }} style={{ width: 100, height: 200 }} />
                                </TouchableOpacity>
                            ))
                            : <Text style={{color:"white"}}> No images taken </Text>
                    }
                </ScrollView>
            </View>
        )
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
        });
        if (!result.canceled) {
            setImagesArr((imagesArr) => [result].concat(imagesArr));
        }
    };

    return (
        <Fragment>
            <StatusBar StatusBarStyle="dark-content" backgroundColor={'rgba(0,0,0,0.8)'} />
            <View style={styles.container}>
                <Camera style={styles.camera} type={type} ref={cameraRef}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.iconButton}
                            onPress={() => {
                                setType(
                                    type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back
                                );
                            }}>
                            <Ionicons name="camera-reverse" size={30} color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.captureButton}
                            onPress={snap}
                        >
                            {loading ? <ActivityIndicator color="white" /> : <Ionicons name="camera" size={50} color="white" />}
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.iconButton}
                            onPress={pickImage}
                        >
                            <Ionicons name="images" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                    <CameraGallery/>
                </Camera>
            </View>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    captureButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 30,
        padding: 10,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconButton: {
        padding: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gallery:{
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});