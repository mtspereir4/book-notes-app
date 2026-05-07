import { View, Text } from "react-native";

export default function BookDetailScreen({ route }) {
  const { book } = route.params;

  return (
    <View>
      <Text>Titulo: {book.title}</Text>
      <Text>Autor: {book.author}</Text>
    </View>
  );
}
