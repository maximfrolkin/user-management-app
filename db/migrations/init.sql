CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    date_of_birth DATE NOT NULL,
    sport VARCHAR(100) NOT NULL,
    t_shirt_size VARCHAR(10) NOT NULL
);