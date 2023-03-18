import { StyleSheet } from "react-native";
import { THEME } from "../../constans/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    containerCard: {
        backgroundColor: THEME.colors.secondary,
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    title: {
        textTransform: "uppercase",
        fontFamily: "Poppins-Medium",
        fontSize: 20
    },
    result: {
        fontSize: 50,
        marginVertical:20
    },
    image:{
        width:200,
        height:200
    }
})