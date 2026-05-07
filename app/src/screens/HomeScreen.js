import { View, Text, TouchableOpacity } from "react-native";

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
        <TouchableOpacity
          key={book.id}
          onPress={() => navigation.navigate("BookDetails", { book })}
        >
          <Text>{book.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
