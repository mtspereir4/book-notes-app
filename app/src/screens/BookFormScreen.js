import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

import {
  saveBook,
  updateBook,
} from "../features/books/repositories/BookRepository";

export default function BookFormScreen({ navigation, route }) {
  // Verifica se foi passado parâmetros, caso sim, define estado de edição
  const existingBook = route.params?.book;
  const isUpdating = !!existingBook;

  const [title, setTitle] = useState(existingBook?.title || "");
  const [author, setAuthor] = useState(existingBook?.author || "");

  // Função cria um novo livro e chama a função saveBook() para adicionar o livro criado
  async function handleSave() {
    // Valida o conteúdo do campo título não permitindo títulos vazios
    if (!title.trim()) {
      return;
    }

    const bookData = {
      id: isUpdating ? existingBook.id : Date.now().toString(),
      title: title.trim(),
      author: author.trim(),
    };

    try {
      isUpdating ? await updateBook(bookData) : await saveBook(bookData);
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
