import { View, Text } from "react-native";

type Props = {
  itemText: string;
};

export default function CompletedItem(props: Props) {
  return (
    <View
      style={{
        padding: 10,
        flexDirection: "row",
      }}
    >
      <Text style={{ flex: 1, textDecorationLine: "line-through" }}>
        ✌️ {props.itemText}
      </Text>
    </View>
  );
}
