import { View, Text, TouchableOpacity } from "react-native";

import BookCard from "../components/BookCard";

export default function HomeScreen({ navigation }) {
  const books = [
    {
      id: "1",
      title: "Lord of Mysteries",
      author: "Cuttlefish",
    },
    {
      id: "2",
      title: "Shadow Slave",
      author: "Guiltythree",
    },
    {
      id: "3",
      title: "Reverend Insanity",
      author: "Gu Zhen Ren",
    },
  ];
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
