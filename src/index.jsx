import { useFonts } from 'expo-font'
import { Text, View, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { THEME } from './constans/theme';
import { Header } from './components';
import { Calculator, Data, Result } from './screens/index';
import { useState } from 'react';

const App = () => {

  const [loaded] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf')
  })

  const [open, setOpen] = useState(false)
  const [oper, setOper] = useState("")
  const [result, setResult] = useState("")

  const change = (operator) => {
    setOpen(!open)
    setOper(operator)
  }

  const onChangeResult = (value1, value2, sign) => {
    setOpen(false)
    setOper("")
    let num1 = parseInt(value1)
    let num2 = parseInt(value2)
    switch (sign) {
      case "+":
        setResult(num1 + num2)
        break;
      case "-":
        setResult(num1 - num2)
        break;
      case "x":
        setResult(num1 * num2)
        break;
      case "/":
        setResult(num1 / num2)
        break;
      default:
        break;
    }
  }

  const Content = () => {
    if (open) {
      return <Calculator change={change} />
    }
    if (!open && oper !== "") {
      return <Data onChangeResult={onChangeResult} change={change} oper={oper} />
    }
    return <Result result={result} change={change} />
  }
  if (!loaded) {
    return (
      <View style={styles.containerLoader} >
        <ActivityIndicator size="large" color={THEME.colors.primary} />
      </View>
    )
  }
  return (

    <View style={styles.container}>
      <Header title="OPERACIONES" />
      <Content />
    </View>

  );
}


export default App