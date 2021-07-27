import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList  } from 'react-native';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput'


export default function App() {
  const [taskList, setTaskList] = useState([]);

  const addTaskHandler = (newTask) => {
    setTaskList(currentTasks => [...currentTasks, {key: Math.random().toString() , value: newTask}]);
  } 

  return (
    <View style={styles.screen} >
      <TaskInput addTaskHandler={addTaskHandler}/>

      <FlatList 
        data={taskList} 
        renderItem={itemData => <TaskItem value={itemData.item.value}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  }
});
 