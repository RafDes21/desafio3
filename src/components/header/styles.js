import { StyleSheet, StatusBar } from "react-native";
import { THEME } from "../../constans/theme";

export const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: THEME.colors.primary,
        marginTop: StatusBar.currentHeight,
        alignItems: "center",
        justifyContent: "center",

    },
    title: {
        color: THEME.colors.white,
        fontSize: 20
    }
})