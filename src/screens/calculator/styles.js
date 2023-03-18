import { StyleSheet } from "react-native";
import { THEME } from "../../constans/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    containerCard: {
        width: "80%",
        backgroundColor: THEME.colors.secondary,
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 20,
        alignItems: "center",
        padding: 4
    },
    containerButton: {
        width: "40%",
    }
})