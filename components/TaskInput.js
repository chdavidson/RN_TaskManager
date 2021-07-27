import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button, Modal} from 'react-native';

const TaskInput = props => {
    const [newTask, setNewTask] = useState('');  
    
    const taskInputHandler = (enteredText) => {
        setNewTask(enteredText);
    }

    const addTaskHandler = () => {
        props.onAddTask(newTask);
        setNewTask('');
    } 

    return(
        <Modal visible={props.visibility} animationType="slide">
            <View style ={styles.inputContainer}>
                <TextInput
                    placeholder="enter task.."
                    style={styles.input}
                    onChangeText={taskInputHandler}
                    value={newTask}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                    <Button
                        title="Add"
                        onPress={addTaskHandler}
                    /> 
                    </View>
                    <View style={styles.button}>
                    <Button
                        title='Cancel' 
                        color='red'
                        onPress={props.onCancelAdd}
                    />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({ 
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      },   
      input: {
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%'
      }, 
      buttonContainer:{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '75%'
      },
      button:{
          width: '40%'
      }
  })

  export default TaskInput;