import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { CollapsibleButton } from "react-native-collapsible-button";

export default function App() {
    const [value, setValue] = useState(true);

    const handleValue = () => setValue(!value);

    return (
        <View style={styles.mainContainer}>
            <StatusBar style="auto" />
            <View style={styles.container}>
                <Text style={styles.text}>About</Text>
                <CollapsibleButton
                    value={value}
                    onPress={handleValue}
                    rippleColor="#2979FF"
                    textColor="#2979FF"
                    borderColor="#2979FF"
                />
            </View>
            <Text style={styles.sampleText} numberOfLines={value ? 3 : 100}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 20,
        marginTop: 300,
    },
    container: {
        alignItems: "center",
        backgroundColor: "#fff",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    text: { fontSize: 16 },
    sampleText: { lineHeight: 25, marginTop: 10, fontSize: 15 },
});
