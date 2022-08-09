import React, {useState} from 'react'
import { View, Text } from 'react-native'

// Style
import styles from '@components/modal/Style'

// Components
import CreateComponent from '@components/modal/CreateComponent'

const CreateModal = ({navigation}) => {
    // const [input, setInput] = useState({
    //     name:'', duration:'', style:'', serve:'', ingredients: [], instructions: []
    // })
    const [name, setName] = useState();
    const [style, setStyle] = useState();
    const [time, setTime] = useState();
    const [serve, setServe] = useState();
    const [ingredient, setIngredient] = useState([]);
    const [instructions, setInstructions] = useState();

    const createData = {
        name: name,
        style: style,
        time: time,
        serve: serve,
        ingredient: ingredient,
        instructions: instructions,
    }
    console.log(createData)
    const CreateHandler = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.container}>
        <CreateComponent
            name={name}
            onChangeName={value=> setName(value)}
            style={style}
            onChangeStyle={value=> setStyle(value)}
            time={time}
            onChangeTime={value=> setTime(value)}
            serve={serve}
            onChangeServe={value=> setServe(value)}
            ingredient={ingredient}
            onChangeIngredient={value=> setIngredient(value)}
            instructions={instructions}
            onChangeInstructions={value=> setInstructions(value)}
            back={()=> navigation.goBack()}
            create={CreateHandler}
        />
        </View>
    )
}

export default CreateModal