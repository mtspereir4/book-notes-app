import { View, Text, Button, StyleSheet } from "react-native";
import { deleteBook } from "../features/books/repositories/BookRepository";

export default function BookDetailScreen({ navigation, route }) {
  const { book } = route.params;

  async function handleDeleteBook() {
    try {
      await deleteBook(book.id);
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Titulo: {book.title}</Text>
      <Text style={style.author}>Autor: {book.author}</Text>
      <Button title="Remover livro" onPress={handleDeleteBook} />
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
