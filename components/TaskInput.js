import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';

const TaskInput = props => {
    const [newTask, setNewTask] = useState('');  
    
    const taskInputHandler = (enteredText) => {
        setNewTask(enteredText);
    }

    return(
        <View style ={styles.inputContainer}>
            <TextInput
                placeholder="enter task.."
                style={styles.input}
                onChangeText={taskInputHandler}
                value={newTask}
            />
            <Button
                title="+"
                onPress={props.addTaskHandler.bind(this, newTask)}
            /> 
        </View>
    );
}

const styles = StyleSheet.create({ 
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      input: {
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%'
      }
  })

  export default TaskInput;