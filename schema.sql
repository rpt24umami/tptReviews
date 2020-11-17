DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

USE REVIEWS;

CREATE TABLE reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description varchar(10000) not null,
  title varchar(250),
  rating INT,
  helpful INT,
  user varchar(30),
  productid INT
);

CREATE TABLE alignment (
  id INT AUTO_INCREMENT PRIMARY KEY,
  review INT,
  standard varchar(30),
  alignment INT,
  FOREIGN KEY (review) REFERENCES reviews(id)
);

CREATE TABLE grade (
  id INT AUTO_INCREMENT PRIMARY KEY,
  review INT,
  grade varchar(255),
  FOREIGN KEY (review) REFERENCES reviews(id)
);

INSERT INTO reviews (description, rating, helpful, user, productid)
values ('description here', 3, 3, 'Aowei', 1)