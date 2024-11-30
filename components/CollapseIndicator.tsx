import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props = {
  isCollapse: boolean;
  onPress: () => void;
};

export default function CollapseIndicator(props: Props) {
  if (props.isCollapse) {
    return (
      <FontAwesome
        name="chevron-right"
        size={12}
        color="black"
        onPress={props.onPress}
      />
    );
  }

  return (
    <FontAwesome
      name="chevron-down"
      size={12}
      color="black"
      onPress={props.onPress}
    />
  );
}
