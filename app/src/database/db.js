import * as SQLite from "expo-sqlite";

export async function getDatabase() {
  return await SQLite.openDatabaseAsync("book_notes.db");
}
