BEGIN;

CREATE TABLE topthree (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    url VARCHAR(200) NOT NULL,
    description VARCHAR(500)
);

CREATE TABLE organisations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    url VARCHAR(200) NOT NULL,
    description VARCHAR(500)
);


CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    url VARCHAR(200) NOT NULL,
    description VARCHAR(500)
);


CREATE TABLE charities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    url VARCHAR(200) NOT NULL,
    description VARCHAR(500)
);


CREATE TABLE petitions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    url VARCHAR(200) NOT NULL,
    description VARCHAR(500)
);

CREATE TABLE followers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    url VARCHAR(200) NOT NULL,
    description VARCHAR(500)
);

INSERT INTO petitions (name, url, description) VALUES
(
    'petition_one',
    'http://neopets.com',
    'Only the best website in the history of the internet'

);

INSERT INTO petitions (name, url, description) VALUES
(
    'petition_two',
    'http://neopets.com',
    'Only the best website in the history of the internet'

);

INSERT INTO petitions (name, url, description) VALUES
(
    'petition_three',
    'http://neopets.com',
    'Only the best website in the history of the internet'

);

INSERT INTO topthree (name, url, description) VALUES
(
  'topthree_data_1',
  'http://neopets.com',
  'Only the best website in the history of the internet'
);

INSERT INTO topthree (name, url, description) VALUES
(
  'topthree_data_2',
  'http://neopets.com',
  'Only the best website in the history of the internet'
);

INSERT INTO topthree (name, url, description) VALUES
(
  'topthree_data_3',
  'http://neopets.com',
  'Only the best website in the history of the internet'
);

INSERT INTO organisations (name, url, description) VALUES
(
  'organizations_data_1',
  'http://neopets.com',
  'Only the best website in the history of the internet'
);

INSERT INTO organisations (name, url, description) VALUES
(
  'organizations_data_2',
  'http://neopets.com',
  'Only the best website in the history of the internet'
);

INSERT INTO organisations (name, url, description) VALUES
(
  'organizations_data_3',
  'http://neopets.com',
  'Only the best website in the history of the internet'
);

INSERT INTO events (name, url, description) VALUES
(
  'events_data_1',
  'http://neopets.com',
  'Only the best website in the history of the internet'
);

INSERT INTO events (name, url, description) VALUES
(
  'events_data_2',
  'http://neopets.com',
  'Only the best website in the history of the internet'
);

INSERT INTO events (name, url, description) VALUES
(
  'events_data_3',
  'http://neopets.com',
  'Only the best website in the history of the internet'
);

INSERT INTO charities (name, url, description) VALUES
(
  'charities_data_1',
  'http://neopets.com',
  'Only the best website in the history of the internet'
);

INSERT INTO charities (name, url, description) VALUES
(
  'charities_data_2',
  'http://neopets.com',
  'Only the best website in the history of the internet'
);

INSERT INTO charities (name, url, description) VALUES
(
  'charities_data_3',
  'http://neopets.com',
  'Only the best website in the history of the internet'
);

INSERT INTO followers (name, url, description) VALUES
(
  'followers_data_1',
  'http://neopets.com',
  'Only the best website in the history of the internet'
);

INSERT INTO followers (name, url, description) VALUES
(
  'followers_data_2',
  'http://neopets.com',
  'Only the best website in the history of the internet'
);

INSERT INTO followers (name, url, description) VALUES
(
  'followers_data_3',
  'http://neopets.com',
  'Only the best website in the history of the internet'
);

COMMIT;
