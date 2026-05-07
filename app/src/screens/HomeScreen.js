import { View, Text, TouchableOpacity } from "react-native";

import BookCard from "../components/BookCard";
import { mockBooks } from "../features/books/data/mockBooks";

export default function HomeScreen({ navigation }) {
  const books = mockBooks;
  return (
    <View>
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
