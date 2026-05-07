import { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

import BookCard from "../components/BookCard";
import { mockBooks } from "../features/books/data/mockBooks";

export default function HomeScreen({ navigation }) {
  const [books, setBooks] = useState(mockBooks);

  function handleCreateBook(book) {
    setBooks([...books, book]);
  }

  return (
    <View>
      <Button
        title="Novo Livro"
        onPress={() =>
          navigation.navigate("CreateBook", {
            onCreateBook: handleCreateBook,
          })
        }
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
