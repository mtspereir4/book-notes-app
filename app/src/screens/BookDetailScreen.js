import { View, Text, Button, StyleSheet } from "react-native";
import {
  deleteBook,
  getBookById,
} from "../features/books/repositories/BookRepository";
import { useEffect, useState } from "react";

export default function BookDetailScreen({ navigation, route }) {
  const [book, setBook] = useState(null);

  const { bookId } = route.params;

  // Recupera o livro da base de dados a partir do id informado
  async function loadBook() {
    try {
      const loadedBook = await getBookById(bookId);
      setBook(loadedBook);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeleteBook() {
    try {
      await deleteBook(bookId);
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const removeListener = navigation.addListener("focus", () => {
      loadBook();
    });

    return removeListener;
  }, [navigation]);

  // Trata a primeira montagem do componente onde book = null;
  if (!book) {
    return <Text>Carregando...</Text>;
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Titulo: {book.title}</Text>
      <Text style={style.author}>Autor: {book.author}</Text>
      <Button
        title="Editar livro"
        onPress={() => navigation.navigate("CreateBook", { book })}
      />
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
