import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList  } from 'react-native';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput'


export default function App() {
  const [taskList, setTaskList] = useState([]);

  const addTaskHandler = (newTask) => {
    setTaskList(currentTasks => [...currentTasks, {id: Math.random().toString() , value: newTask}]);
  }

  const removeTaskHandler = (targetId) => { 
                    setTaskList(currentTasks => { 
                              return currentTasks.filter(task => task.id !== targetId )})
  }

  return (
    <View style={styles.screen} >
      <TaskInput addTaskHandler={addTaskHandler}/> 

      <FlatList  
        data={taskList}  
        renderItem={itemData => <TaskItem 
                                    id={itemData.item.id}
                                    value={itemData.item.value} 
                                    onDelete={removeTaskHandler} />
                    } />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    backgroundColor: "hotpink"
  }
});
 