import { View, Text, StyleSheet, FlatList } from "react-native";
import CollapseIndicator from "./CollapseIndicator";

type Props = {
  data: string[];
  isCollapseList: boolean;
  setIsCollapseList: (value: React.SetStateAction<boolean>) => void;
  emptyListMessage: string;
};

const styles = StyleSheet.create({
  sectionTitle: { fontWeight: "bold" },
});

export default function ItemList(props: Props) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {props.data.length === 0 ? (
        <Text style={styles.sectionTitle}>Your list is empty 🤔</Text>
      ) : (
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <CollapseIndicator isCollapse={props.isCollapseList} />
            <Text
              style={styles.sectionTitle}
              onPress={() =>
                props.setIsCollapseList((previousState) => !previousState)
              }
            >
              To do list 🏃‍➡️
            </Text>
          </View>

          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TodoItem
                itemText={item}
                onCompleteButtonClickedHandle={onCompleteButtonClickedHandle}
                onRemoveButtonClickedHandle={onRemoveButtonClickedHandle}
              />
            )}
          />
        </View>
      )}
    </View>
  );
}
