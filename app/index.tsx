import { useState } from "react";
import { View } from "react-native";
import TodoInput from "@/components/TodoInput";
import ItemList from "@/components/ItemList";
import TodoItem from "@/components/TodoItem";
import CompletedItem from "@/components/CompletedItem";

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
    <View
      style={{
        flex: 1,
        padding: 20,
        gap: 10,
      }}
    >
      <TodoInput updateTodoList={updateTodoList} />

      <View style={{ flex: 2, gap: 25 }}>
        <ItemList
          data={todoList}
          renderItem={({ item }) => (
            <TodoItem
              itemText={item}
              onCompleteButtonClickedHandle={onCompleteButtonClickedHandle}
              onRemoveButtonClickedHandle={onRemoveButtonClickedHandle}
            />
          )}
          emptyListMessage="Your list is empty 🤔"
          title="To do list 🏃‍➡️"
        />

        <ItemList
          data={completedList}
          renderItem={({ item }) => <CompletedItem itemText={item} />}
          emptyListMessage="Nothing is completed 🫢"
          title="To do list 😎"
        />
      </View>
    </View>
  );
}
