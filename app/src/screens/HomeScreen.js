// Importando dependências
import { useCallback, useState } from "react";
import { View, Button } from "react-native";
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
    <View>
      <Button
        title="Novo Livro"
        onPress={() => navigation.navigate("BookForm")}
      />

      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onPress={() =>
            navigation.navigate("BookDetails", { bookId: book.id })
          }
        />
      ))}
    </View>
  );
}
