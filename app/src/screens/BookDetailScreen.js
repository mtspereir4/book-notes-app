import { View, Text, StyleSheet } from "react-native";

export default function BookDetailScreen({ route }) {
  const { book } = route.params;

  return (
    <View style={style.container}>
      <Text style={style.title}>Titulo: {book.title}</Text>
      <Text style={style.author}>Autor: {book.author}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBotton: 8,
  },
  author: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
