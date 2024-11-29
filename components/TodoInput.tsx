import { TextInput } from "react-native";

type Props = {
  updateTodoList: (todo: string) => void;
};

export default function TodoInput({ updateTodoList }: Props) {
  return (
    <TextInput
      style={{
        borderRadius: 10,
        borderColor: "#4e6190",
        borderWidth: 5,
        padding: 10,
      }}
      placeholder="What to do?"
      onSubmitEditing={({ nativeEvent }) => updateTodoList(nativeEvent.text)}
    />
  );
}
