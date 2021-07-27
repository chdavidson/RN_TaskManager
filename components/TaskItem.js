import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.value}</Text>
        </View>
    ); 
}

const styles = StyleSheet.create({ 
  listItem:{
    padding: 10,
    backgroundColor: '#ccc', 
    borderColor: 'dodgerblue',
    borderWidth: 1, 
    marginVertical: 5
  }
})

export default TaskItem; 
