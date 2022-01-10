import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import "react-native-gesture-handler";

import UserContextProvider from "./src/contexts/UserContext";
import MainStack from "./src/stacks/MainStack";

export default () => {
    return (
        <UserContextProvider>
            <NavigationContainer>
                <MainStack />
            </NavigationContainer>
        </UserContextProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
