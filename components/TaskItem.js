import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TaskItem = props => {
    return (
      <TouchableOpacity activeOpacity={0.8}  onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.listItem}>
            <Text>{props.value}</Text>
        </View>
       </TouchableOpacity>
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
