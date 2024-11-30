import { useState } from "react";
import { TextInput } from "react-native";

type Props = {
  updateTodoList: (todo: string) => void;
};

export default function TodoInput({ updateTodoList }: Props) {
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <TextInput
      style={{
        borderRadius: 10,
        borderColor: "#4e6190",
        borderWidth: 5,
        padding: 10,
      }}
      placeholder="What to do?"
      value={inputValue}
      onChangeText={(text) => setInputValue(text)}
      onSubmitEditing={() => {
        updateTodoList(inputValue);
        setInputValue("");
      }}
    />
  );
}
