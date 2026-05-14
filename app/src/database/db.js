import * as SQLite from "expo-sqlite";

let databasePromise = null;

// Verifica se há conexão aberta, se sim: retorna-a, se não: cria um nova conexão e retorna-a
export function getDatabase() {
  if (!databasePromise) {
    databasePromise = SQLite.openDatabaseAsync("book_notes.db");
  }

  return databasePromise;
}
