import { View, Text, StyleSheet, FlatList } from "react-native";
import CollapseIndicator from "./CollapseIndicator";
import { useState } from "react";

type Props = {
  data: string[];
  emptyListMessage: string;
  title: string;
  renderItem: (renderItemProps: { item: string; index: number }) => JSX.Element;
};

const styles = StyleSheet.create({
  sectionTitle: { fontWeight: "bold" },
});

export default function ItemList(props: Props) {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);
  function toggleCollapse() {
    setIsCollapse((previousState) => !previousState);
  }
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {props.data.length === 0 ? (
        <Text style={styles.sectionTitle}>{props.emptyListMessage}</Text>
      ) : (
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <CollapseIndicator
              isCollapse={isCollapse}
              onPress={toggleCollapse}
            />
            <Text style={styles.sectionTitle} onPress={toggleCollapse}>
              {props.title}
            </Text>
          </View>

          {!isCollapse && (
            <FlatList data={props.data} renderItem={props.renderItem} />
          )}
        </View>
      )}
    </View>
  );
}
