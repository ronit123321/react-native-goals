import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';


const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => { 
        setEnteredGoal(enteredText); 
    }

    const addHandler = () =>{
        if(enteredGoal.toString().trim() === '') return;
        props.onAddGoal(enteredGoal.toString());
        setEnteredGoal('');
    }

    const cancelHandler = () => {
        setEnteredGoal('');
        props.onCancel();
    }

    return (
        <View style={styles.view1}>
          <TextInput placeholder="Course Goal"
            style={styles.text_input}
            value={enteredGoal}
            onChangeText={goalInputHandler}/>
            <Button style={styles.butt} title="ADD" onPress={addHandler}/>
            <Button style={styles.butt} title="CANCEL" onPress={cancelHandler}/>
         </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({ 
    view1: {flexDirection: "column", justifyContent: 'space-between', alignItems: 'center'},
    butt: {flexDirection: "row"},
    text_input:{borderColor: 'black', borderWidth: 1, padding: 10, width: '80%'}
  });