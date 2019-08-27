import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Modal
} from "react-native";
import GoalItem from "./components/goalItem";
import GoalInput from "./components/goalInput";
import { setRecoveryProps } from "expo/build/ErrorRecovery/ErrorRecovery";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const [modalVisibility, setModalVisibility] = useState(false);

  const addGoalHandler = goal => {
    setCourseGoals(currentGoal => [
      ...currentGoal,
      { id: Math.random().toString(), value: goal }
    ]);

    toggleVisibility();
  };

  const deleteGoal = goalId => {
    setCourseGoals(current => {
      return courseGoals.filter(goal => goal.id !== goalId);
    });
  };

  const toggleVisibility = () => {
    setModalVisibility(!modalVisibility);
  };

  return (
    <View style={styles.body}>
      <Modal visible={modalVisibility} animationType="slide">
        <GoalInput onAddGoal={addGoalHandler} onCancel={toggleVisibility} />
      </Modal>
      <Button title="Add new goal" onPress={toggleVisibility} />

      <View style={styles.list_body}>
        <Text>Your Goals</Text>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              onDelete={deleteGoal}
              title={itemData.item.value}
            />
          )}
          style={styles.view2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 50
  },
  list_body: {
    padding: 10,
    backgroundColor: 'grey'
  }
});
