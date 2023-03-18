import { StyleSheet } from "react-native";
import { THEME } from "../../constans/theme";

export const styles = StyleSheet.create({

    contenedor: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    contenedorCard: {
        width: "80%",
        backgroundColor: THEME.colors.secondary,
        justifyContent: "center",
        alignItems: "center",
        padding:20
    },
    title: {
        textTransform: "uppercase",
        fontSize:35,
        textAlign: "center"
    },
    contenedorDatos: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20,
        width: "50%",
        borderBottomWidth: 0.5,
    },
    input: {
        fontSize: 20
    },
    signo: {
        fontSize: 30,
    },
    contenedorButton:{
        flexDirection:"row",
        width:"90%",
        justifyContent:"space-between"
    }
})