import React from 'react'
import { Text, Button, View } from 'react-native'
import { Card } from '../../components'
import { THEME } from '../../constans/theme'

import { styles } from './styles'

const Calculator = ({change}) => {
    return (
        <View style={styles.container}>
            <Card style={styles.containerCard} >
                <Text>Sumar</Text>
                <View style={styles.containerButton}>
                    <Button title='Ir' color={THEME.colors.button} onPress={()=>change("suma")}/>
                </View>
            </Card>
            <Card style={styles.containerCard} >
                <Text>Restar</Text>
                <View style={styles.containerButton}>
                    <Button title='Ir' color={THEME.colors.button} onPress={()=>change("resta")}/>
                </View>
            </Card>
            <Card style={styles.containerCard} >
                <Text>Multiplicar</Text>
                <View style={styles.containerButton}>
                    <Button title='Ir' color={THEME.colors.button} onPress={()=>change("multiplicar")}/>
                </View>
            </Card>
            <Card style={styles.containerCard} >
                <Text>División</Text>
                <View style={styles.containerButton}>
                    <Button title='Ir' color={THEME.colors.button} onPress={()=>change("dividir")}/>
                </View>
            </Card>
           
        </View>

    )
}

export default Calculator
