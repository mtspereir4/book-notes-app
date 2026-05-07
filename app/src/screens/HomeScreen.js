import { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

import BookCard from "../components/BookCard";
import { mockBooks } from "../features/books/data/mockBooks";

export default function HomeScreen({ navigation }) {
  const [books, setBooks] = useState(mockBooks);

  function addBook() {
    const newBook = {
      id: Date.now().toString(),
      title: "Novo livro",
      author: "Autor desconhecido",
    };
    setBooks([...books, newBook]);
  }

  return (
    <View>
      <Button title="Adicionar livro" onPress={addBook} />
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
