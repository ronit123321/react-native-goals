import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity
} from "react-native";

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.list_item}>
        <Text> {props.title} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list_item: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10
  }
});

export default GoalItem;
