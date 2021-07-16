CREATE DATABASE tenpoDB;


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email)
    VALUES ('pedro', 'pedro@tenpo.com'),
    ('nico', 'nico@tenpo.com');

select * from users;