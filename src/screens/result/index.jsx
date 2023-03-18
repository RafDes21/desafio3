import React from 'react'
import { View, Text, Button, Image } from 'react-native'
import { Card } from "../../components/index"

import { styles } from './styles'

const Result = ({ result, change }) => {
    return (
        <View style={styles.container}>
            <Card style={styles.containerCard}>
                <Text style={styles.title}>resultado</Text>
                <Image source={{
                    uri:"https://educacion30.b-cdn.net/wp-content/uploads/2018/04/matematicas-978x652.jpg"
                }} style={styles.image} />
                <Text style={styles.result}>{result}</Text>
                <Button title="Hacer una nueva Cuenta" onPress={() => change(true)} />
            </Card>
        </View>
    )
}

export default Result
