import { useState, useEffect } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

import BookCard from "../components/BookCard";
import { getAllBooks } from "../features/books/repositories/BookRepository";

export default function HomeScreen({ navigation }) {
  const [books, setBooks] = useState([]);

  // Carrega os livros da base de dados
  async function loadBooks() {
    try {
      const booksLoaded = await getAllBooks();

      setBooks(booksLoaded);
    } catch (error) {
      console.error(error);
    }
  }

  // Atualiza os livros carregados
  useEffect(() => {
    const removeListener = navigation.addListener("focus", () => {
      loadBooks();
    });

    return removeListener;
  }, [navigation]);

  return (
    <View>
      <Button
        title="Novo Livro"
        onPress={() => navigation.navigate("CreateBook")}
      />

      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onPress={() => navigation.navigate("BookDetails", { book })}
        />
      ))}
    </View>
  );
}
