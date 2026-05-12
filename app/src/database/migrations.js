import { getDatabase } from "./db";
import { CREATE_BOOKS_TABLE, CREATE_NOTES_TABLE } from "./schemas";

export async function runMigrations() {
  const database = await getDatabase();

  await database.execAsync(`
    PRAGMA foreign_key = ON;

    ${CREATE_BOOKS_TABLE};
    ${CREATE_NOTES_TABLE};
  `);
}
