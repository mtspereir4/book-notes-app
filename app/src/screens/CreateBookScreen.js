import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function CreateBooksScreen({ navigation, route }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const { onCreateBook } = route.params;

  // Função cria um novo livro e chama a função handleCreateBook() para adicionar o livro criado
  function handleSave() {
    const newBook = {
      id: Date.now().toString(),
      title,
      author,
    };

    // Valida o conteúdo do campo título não permitindo títulos vazios
    if (!title.trim()) {
      return;
    }

    onCreateBook(newBook);

    navigation.goBack();
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
