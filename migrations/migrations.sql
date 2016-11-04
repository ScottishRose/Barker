DROP DATABASE IF EXISTS bark_bark;
CREATE DATABASE bark_bark;

\c bark_bark

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL
);

CREATE TABLE barks (
  id SERIAL PRIMARY KEY,
  body VARCHAR NOT NULL,
  user_id INTEGER REFERENCES users (id)
);
