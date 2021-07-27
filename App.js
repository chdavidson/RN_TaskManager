import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList  } from 'react-native';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput'


export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [isAddVisible, setIsAddVisible] = useState(false);

  const addTaskHandler = (newTask) => {
    setTaskList(currentTasks => [...currentTasks, {id: Math.random().toString() , value: newTask}]);
    setIsAddVisible(false);
  }

  const removeTaskHandler = (targetId) => { 
                    setTaskList(currentTasks => { 
                              return currentTasks.filter(task => task.id !== targetId )})
  }


  const cancelAddTaskHandler = () => { setIsAddVisible(false) }

  return (
    <View style={styles.screen} >
      <Button title="Add new task" onPress={() => setIsAddVisible(true)}/>
      <TaskInput 
          onAddTask={addTaskHandler}
          visibility={isAddVisible}
          onCancelAdd={cancelAddTaskHandler}
      /> 

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
  }
});
 