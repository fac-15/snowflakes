BEGIN;

DROP TABLE IF EXISTS topthree, organisations, events, charities, petitions, followers CASCADE;

CREATE TABLE topthree (
    id SERIAL PRIMARY KEY,
    top_one VARCHAR(200) NOT NULL,
    top_two VARCHAR(200) NOT NULL,
    top_three VARCHAR(200) NOT NULL
);

CREATE TABLE organisations (
    id SERIAL PRIMARY KEY,
    org_one VARCHAR(200) NOT NULL,
    org_two VARCHAR(200) NOT NULL,
    org_three VARCHAR(200) NOT NULL
);


CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    event_one VARCHAR(200) NOT NULL,
    event_two VARCHAR(200) NOT NULL,
    event_three VARCHAR(200) NOT NULL
);


CREATE TABLE charities (
    id SERIAL PRIMARY KEY,
    charity_one VARCHAR(200) NOT NULL,
    charity_two VARCHAR(200) NOT NULL,
    charity_three VARCHAR(200) NOT NULL
);


CREATE TABLE petitions (
    id SERIAL PRIMARY KEY,
    petition_one VARCHAR(200) NOT NULL,
    petition_two VARCHAR(200) NOT NULL,
    petition_three VARCHAR(200) NOT NULL
);

CREATE TABLE followers (
    id SERIAL PRIMARY KEY,
    follower_one VARCHAR(200) NOT NULL,
    follower_two VARCHAR(200) NOT NULL,
    followers_three VARCHAR(200) NOT NULL
);

INSERT INTO petitions (petition_one, petition_two, petition_three) VALUES
(
    'petition_one',
    'petition_two',
    'petition_three'
);

INSERT INTO topthree (top_one, top_two, top_three) VALUES
(
    'top_one',
    'top_two',
    'top_three'
);
INSERT INTO organisations (org_one, org_two, org_three) VALUES
(
    'org_one',
    'org_two',
    'org_three'
);
INSERT INTO events (event_one, event_two, event_three) VALUES
(
    'event_one',
    'event_two',
    'event_three'
);
INSERT INTO charities (charity_one, charity_two, charity_three) VALUES
(
    'charity_one',
    'charity_two',
    'charity_three'
);
INSERT INTO followers (follower_one, follower_two, followers_three) VALUES
(
    'follower_one',
    'follower_two',
    'followers_three'
);

COMMIT;