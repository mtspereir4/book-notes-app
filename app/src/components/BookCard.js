import { View, Text, TouchableOpacity } from "react-native";

export default function BookCard({ book, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>•{book.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
