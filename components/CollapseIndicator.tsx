import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props = {
  isCollapse: boolean;
};

export default function CollapseIndicator({ isCollapse }: Props) {
  if (isCollapse) {
    return <FontAwesome name="chevron-right" size={12} color="black" />;
  }

  return <FontAwesome name="chevron-down" size={12} color="black" />;
}
