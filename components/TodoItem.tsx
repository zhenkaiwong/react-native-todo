import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";

type Props = {
  itemText: string;
  onRemoveButtonClickedHandle: (item: string) => void;
  onCompleteButtonClickedHandle: (item: string) => void;
};

const styles = StyleSheet.create({
  todoItemView: {
    padding: 10,
    flexDirection: "row",
  },
  todoUtilitiesButton: {
    flex: 1 / 3,
    alignItems: "center",
  },
});

export default function TodoItem(props: Props) {
  const [isShowRemoveButton, setIsShowRemoveButton] = useState<boolean>(true);
  const [isShowCompleteButton, setIsShowCompleteButton] =
    useState<boolean>(true);

  return (
    <View style={styles.todoItemView}>
      <Pressable
        style={
          isShowRemoveButton
            ? styles.todoUtilitiesButton
            : [styles.todoItemView, { display: "none" }]
        }
        onPress={() => props.onRemoveButtonClickedHandle(props.itemText)}
      >
        <FontAwesome name="remove" size={24} color="#d6542c" />
      </Pressable>
      <Text style={{ flex: 1 }}>👌 {props.itemText}</Text>
      <Pressable
        style={
          isShowCompleteButton
            ? styles.todoUtilitiesButton
            : [styles.todoItemView, { display: "none" }]
        }
        onPress={() => props.onCompleteButtonClickedHandle(props.itemText)}
      >
        <FontAwesome name="check" size={24} color="#124c81" />
      </Pressable>
    </View>
  );
}
