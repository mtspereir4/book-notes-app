export const CREATE_BOOKS_TABLE = `
  CREATE TABLE IF NOT EXISTS books (
    id TEXT PRIMARY KEY NOT NULL,
    title TEXT NOT NULL CHECK(
      length(title) <= 255
    ),
    author TEXT CHECK(
      length(author) <= 100
    ),
    genre TEXT CHECK(
      length(genre) <= 100
    ),
    reading_status TEXT CHECK(
      length(status) <= 100
    ),
    publication_year INTEGER CHECK(
      publication_year BETWEEN 1500 AND 2100
    ),
    book_image_uri TEXT CHECK(
      length(book_image_uri) <= 255
    ),
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`;

// LEMBRETE: CRIAR TRIGGER PARA ATUALIZAR O CAMPO updated_at

export const CREATE_NOTES_TABLE = `
  CREATE TABLE IF NOT EXISTS notes (
    id TEXT PRIMARY KEY NOT NULL,
    book_id TEXT NOT NULL,
    title TEXT CHECK(
        length(title) <= 255
    ),
    content TEXT NOT NULL CHECK(
      length(content) <= 2000
    ),
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (book_id)
      REFERENCES books(id)
      ON DELETE CASCADE
  );
`;
