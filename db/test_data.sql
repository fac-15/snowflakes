BEGIN;

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