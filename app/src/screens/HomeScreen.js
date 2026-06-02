// Importando dependências
import { useCallback, useState } from "react";
import { Button, FlatList, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import BookCard from "../components/BookCard";
import { getAllBooks } from "../repository/BookRepository";

// Função cria o componente HomeScreen, tela principal do app
export default function HomeScreen({ navigation }) {
  const [books, setBooks] = useState([]);

  // Carrega os livros da base de dados
  const loadAllBooks = useCallback(async () => {
    try {
      const booksLoaded = await getAllBooks();

      setBooks(booksLoaded);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // Atualiza os livros sempre que a tela volta a ficar em foco
  useFocusEffect(
    useCallback(() => {
      loadAllBooks();
    }, [loadAllBooks]),
  );

  return (
    <FlatList
      data={books}
      keyExtractor={(item) => item.id.toString()}
      ListEmptyComponent={<Text>Nenhum livro cadastrado</Text>}
      ListHeaderComponent={
        <Button
          title="Novo Livro"
          onPress={() => navigation.navigate("BookForm")}
        />
      }
      renderItem={({ item }) => (
        <BookCard
          book={item}
          onPress={() =>
            navigation.navigate("BookDetails", { bookId: item.id })
          }
        />
      )}
    />
  );
}
