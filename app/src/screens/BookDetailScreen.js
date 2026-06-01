// Importando dependências
import { useCallback, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { deleteBook, getBookById } from "../repository/BookRepository";

// Função cria o componente BookDetailScreen, tela com informações refentes ao livro selecionado
export default function BookDetailScreen({ navigation, route }) {
  const [book, setBook] = useState(null);

  const { bookId } = route.params;

  // A seguinte função recupera o livro da base de dados a partir do id informado
  const loadBook = useCallback(async () => {
    try {
      const loadedBook = await getBookById(bookId);
      setBook(loadedBook);
    } catch (error) {
      console.error(error);
    }
  }, [bookId]);

  // A seguinte função chama a função deleteBook para remover o livro da base de dados a partir do id informado e retorna para a tela anterior no stack
  async function handleDeleteBook() {
    try {
      await deleteBook(bookId);
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  }

  // O seguinte hook chama a função loadBook sempre que a tela BookDetailScreen estiver em foco
  useFocusEffect(
    useCallback(() => {
      loadBook();
    }, [loadBook]),
  );

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
        onPress={() => navigation.navigate("BookForm", { book })}
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
    marginBottom: 8,
  },
  author: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
