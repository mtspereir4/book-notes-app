// Importando dependências
import { useCallback, useState } from "react";
import { View, Button, FlatList, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import BookCard from "../components/BookCard";
import { getAllBooks } from "../repository/BookRepository";

// Função cria o componente HomeScreen, tela principal do app
export default function HomeScreen({ navigation }) {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // Carrega os livros da base de dados
  const loadAllBooks = useCallback(async () => {
    try {
      setIsLoading(true);
      setErrorMessage(null);
      const booksLoaded = await getAllBooks();
      setBooks(booksLoaded);
    } catch (error) {
      setErrorMessage("Não foi possível recuperar os livros.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Atualiza os livros sempre que a tela volta a ficar em foco
  useFocusEffect(
    useCallback(() => {
      loadAllBooks();
    }, [loadAllBooks]),
  );

  if (isLoading) {
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (errorMessage) {
    return (
      <View>
        <Text>{errorMessage}</Text>
        <Button title="Tentar novamente" onPress={() => loadAllBooks()} />
      </View>
    );
  }

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
