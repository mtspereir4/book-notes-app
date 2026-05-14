import { getDatabase } from "../../../database/db";

export async function getAllBooks() {
  const database = await getDatabase();

  return await database.getAllAsync(
    `
    SELECT *
    FROM books
    ORDER BY created_at DESC
    `,
  );
}

export async function getBookById(bookId) {
  const database = await getDatabase();

  return await database.getFirstAsync(
    `
    SELECT *
    FROM books
    WHERE id = $id
    `,
    { $id: bookId },
  );
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
    
    VALUES ($id,$title,$author)
    `,
    { $id: book.id, $title: book.title, $author: book.author },
  );
}

export async function deleteBook(bookId) {
  const database = await getDatabase();

  return await database.runAsync(
    `
    DELETE FROM books
    WHERE id = $id
    `,
    { $id: bookId },
  );
}

export async function updateBook(book) {
  const database = await getDatabase();

  return await database.runAsync(
    `
    UPDATE books
    SET
      title = $title,
      author = $author
    WHERE id = $id
    `,
    { $title: book.title, $author: book.author, $id: book.id },
  );
}
