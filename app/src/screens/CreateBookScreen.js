import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

import { saveBook } from "../features/books/repositories/BookRepository";

export default function CreateBooksScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  // Função cria um novo livro e chama a função saveBook() para adicionar o livro criado
  async function handleSave() {
    const newBook = {
      id: Date.now().toString(),
      title: title.trim(),
      author: author.trim(),
    };

    // Valida o conteúdo do campo título não permitindo títulos vazios
    if (!title.trim()) {
      return;
    }

    try {
      await saveBook(newBook);
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder="Título: "
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={style.input}
        placeholder="Autor: "
        value={author}
        onChangeText={setAuthor}
      />
      <Button title="Salvar livro" onPress={handleSave} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 16,
    gap: 12,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
  },
});
