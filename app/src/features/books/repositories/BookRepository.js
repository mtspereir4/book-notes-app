import { getDatabase } from "../../../database/db";

export async function getAllBooks() {
  const database = await getDatabase();

  return await database.getAllAsync(`
    SELECT *
    FROM books
    ORDER BY created_at DESC
  `);
}

export async function saveBook(book) {
  const database = await getDatabase();

  return await database.runAsync(
    `
    INSERT INTO books (
      id,
      title,
      author
    )
    
    VALUES (?,?,?)
  `,
    [book.id, book.title, book.author],
  );
}
