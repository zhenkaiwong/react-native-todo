import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import TodoInput from "@/components/TodoInput";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 10,
  },
  completedItemText: {
    textDecorationLine: "line-through",
  },
});

export default function Index() {
  function generateDummies(total: number) {
    const dummyList = [];

    for (let i = 0; i < total; i++) {
      dummyList.push("Test " + i);
    }
    return dummyList;
  }

  const [todoList, setTodoList] = useState<string[]>([]);
  const [completedList, setCompletedList] = useState<string[]>([]);
  const [isCollapseTodoList, setIsCollapseTodoList] = useState<boolean>(false);
  const [isCollapseCompletedList, setIsCollapseCompletedList] =
    useState<boolean>(false);

  function updateTodoList(todo: string) {
    if (todo === "testtodo") {
      setTodoList((previousTodoList) => [
        ...previousTodoList,
        ...generateDummies(50),
      ]);

      return;
    }

    if (todo === "testcomplete") {
      setCompletedList((previousCompletedList) => [
        ...previousCompletedList,
        ...generateDummies(50),
      ]);

      return;
    }

    setTodoList((previousTodoList) => [...previousTodoList, todo]);
  }

  function removeItemFromTodoList(item: string) {
    setTodoList((previousTodoList) =>
      previousTodoList.filter((todo) => todo !== item)
    );
  }

  function onRemoveButtonClickedHandle(item: string) {
    removeItemFromTodoList(item);
  }

  function onCompleteButtonClickedHandle(item: string) {
    setCompletedList((previousCompletedList) => [
      ...previousCompletedList,
      item,
    ]);
    removeItemFromTodoList(item);
  }

  return (
    <View style={styles.container}>
      <TodoInput updateTodoList={updateTodoList} />

      <View style={{ flex: 2, gap: 25 }}>
        <View style={styles.sectionView}>
          {todoList.length === 0 ? (
            <Text style={styles.sectionTitle}>Your list is empty 🤔</Text>
          ) : (
            <View>
              <View style={styles.listHeaderView}>
                <CollapseIndicator isCollapse={isCollapseTodoList} />
                <Text
                  style={styles.sectionTitle}
                  onPress={() =>
                    setIsCollapseTodoList((previousState) => !previousState)
                  }
                >
                  To do list 🏃‍➡️
                </Text>
              </View>

              <FlatList
                data={todoList}
                renderItem={({ item }) => (
                  <TodoItem
                    itemText={item}
                    onCompleteButtonClickedHandle={
                      onCompleteButtonClickedHandle
                    }
                    onRemoveButtonClickedHandle={onRemoveButtonClickedHandle}
                  />
                )}
              />
            </View>
          )}
        </View>

        <View style={styles.sectionView}>
          {completedList.length === 0 ? (
            <Text style={styles.sectionTitle}>Nothing is completed 🫢</Text>
          ) : (
            <View>
              <View style={styles.listHeaderView}>
                <CollapseIndicator isCollapse={isCollapseCompletedList} />
                <Text
                  style={styles.sectionTitle}
                  onPress={() =>
                    setIsCollapseCompletedList(
                      (previousState) => !previousState
                    )
                  }
                >
                  Accomplished 🙌
                </Text>
              </View>
              <FlatList
                data={completedList}
                renderItem={({ item }) => <CompletedItem itemText={item} />}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

type CompletedItemProps = {
  itemText: string;
};

function CompletedItem(props: CompletedItemProps) {
  return (
    <View style={styles.todoItemView}>
      <Text style={[styles.todoItemText, styles.completedItemText]}>
        ✌️ {props.itemText}
      </Text>
    </View>
  );
}
