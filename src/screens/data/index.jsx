import { useEffect, useState } from "react";
import { View, Text, Button, TextInput } from "react-native"
import { Card } from "../../components";
import { THEME } from "../../constans/theme";

import { styles } from "./styles";

const Data = ({ onChangeResult, change, oper }) => {

    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const [sign, setSign] = useState("+")

    const onHandleChange1 = (text) => {
        setValue1(text)
    }
    const onHandleChange2 = (text) => {
        setValue2(text)
    }

    useEffect(() => {
        switch (oper) {
            case "suma":
                setSign("+")
                break;
            case "resta":
                setSign("-")
                break;
            case "multiplicar":
                setSign("x")
                break;
            case "dividir":
                setSign("/")
                break;
            default:
                break;
        }
    }, [])
    return (
        <View style={styles.contenedor}>
            <Card style={styles.contenedorCard}>
                <Text style={styles.title}>{oper}</Text>
                <View style={styles.contenedorDatos}>
                    <TextInput style={styles.input} placeholder="0" keyboardType="numeric" onChangeText={onHandleChange1} />
                    <Text style={styles.signo}>{sign}</Text>
                    <TextInput style={styles.input} placeholder="0" keyboardType="numeric" onChangeText={onHandleChange2} />
                </View>
                <View style={styles.contenedorButton}>
                    <Button title="atrás" onPress={() => change("")} color={THEME.colors.button} />
                    <Button title="resultado" onPress={()=>onChangeResult(value1, value2, sign)}  color={THEME.colors.button} />
                </View>
            </Card>
        </View>
    )
}

export default Data
