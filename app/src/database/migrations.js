import { getDatabase } from "./db";
import {
  CREATE_BOOKS_TABLE,
  CREATE_BOOKS_UPDATED_AT_TRIGGER,
  CREATE_NOTES_TABLE,
  CREATE_NOTES_UPDATED_AT_TRIGGER,
} from "./schemas";

// Inicializa a base de dados e as tabelas books e notes, bem como seus respectivos triggers
export async function runMigrations() {
  const database = await getDatabase();

  await database.execAsync(`
    PRAGMA foreign_keys = ON;

    ${CREATE_BOOKS_TABLE}
    ${CREATE_BOOKS_UPDATED_AT_TRIGGER}
    ${CREATE_NOTES_TABLE}
    ${CREATE_NOTES_UPDATED_AT_TRIGGER}
  `);
}
