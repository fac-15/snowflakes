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
    date DATE NOT NULL,
    url VARCHAR(200) NOT NULL,
    description VARCHAR(500)
);


CREATE TABLE donate (
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

CREATE TABLE socials (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    url VARCHAR(200) NOT NULL,
    description VARCHAR(500)
);

------------------------------------- TOP THREE ------------------------------------------------------
INSERT INTO topthree (name, url, description) VALUES
(
    'petition_one',
    'http://neopets.com',
    'Only the best website in the history of the internet'
);
INSERT INTO topthree (name, url, description) VALUES
(
  'topthree_data',
  'http://neopets.com',
  'Only the best website in the history of the internet'
);
INSERT INTO topthree (name, url, description) VALUES
(
  'topthree_data',
  'http://neopets.com',
  'Only the best website in the history of the internet'
);

------------------------------------- ORGANISATIONS ------------------------------------------------------

INSERT INTO organisations (name, url, description) VALUES
(
  'Friends of the Earth',
  'https://friendsoftheearth.uk',
  null
);
INSERT INTO organisations (name, url, description) VALUES
(
  'Extinction Rebellion',
  'https://rebellion.earth',
  null
  );
INSERT INTO organisations (name, url, description) VALUES
(
  'The Climate Coalition',
  'https://www.theclimatecoalition.org/',
  null
);
INSERT INTO organisations (name, url, description) VALUES
(
  'Campaign Against Climate Change',
  'https://www.campaigncc.org/climatejobs',
  null
);
INSERT INTO organisations (name, url, description) VALUES
(
  'The Climate Group',
  'https://www.theclimategroup.org/',
  null
);
------------------------------------- EVENTS ------------------------------------------------------

INSERT INTO events (name, date, url, description) VALUES
(
  'Socialism 101: System change not climate change',
  '2019-02-02',
  'https://www.eventbrite.co.uk/e/socialism-101-system-change-not-climate-change-tickets-54283505426?aff=ebdssbdestsearch',
  'Join us at this event to discuss how why capitalism can not solve the climate crisis, and how we can build a society that can.'

);
INSERT INTO events (name, date, url, description) VALUES
(
  'The synergies and trade-offs in tackling air pollution and climate change',
  '2019-01-30',
  'https://www.eventbrite.co.uk/e/the-synergies-and-trade-offs-in-tackling-air-pollution-and-climate-change-tickets-53910338273?aff=ebdssbdestsearch',
  'This panel discussion brings together experts in the field to discuss the synergies and trade-offs in addressing climate change and air pollution.'
);
INSERT INTO events (name, date, url, description) VALUES
(
  'Four Seasons Film Festival 2019: Beyond Climate UK Premiere + 73 Cow',
  '2019-03-19',
  'https://www.eventbrite.co.uk/e/four-seasons-film-festival-2019-beyond-climate-uk-premiere-73-cows-190319-tickets-53404715943?aff=ebdssbdestsearch',
  'Narrated by David Suzuki, Beyond Climate explores the human and environmental impacts of climate change in British Columbia, and is a timely contribution to the province and country as we grapple with climate change, the paramount issue of our time.'
);
INSERT INTO events (name, date, url, description) VALUES
(
  'Building a Rebellion // Workshop and Social',
  '2019-01-18',
  'https://www.eventbrite.co.uk/e/building-a-rebellion-workshop-and-social-part-of-self-organising-week-at-grow-tickets-54341413631?aff=ebdssbdestsearch',
  'Help us build a rebellion against the extinction of life on earth! This event has a focus on direct action to climate change.'
);
INSERT INTO events (name, date, url, description) VALUES
(
  'Groundswell London',
  '2019-04-27',
  'https://www.eventbrite.co.uk/e/groundswell-london-tickets-54637301640?aff=ebdssbdestsearch#tickets',
  'The mix of informative sessions, practical workshops and stimulating talks means there’s something for everyone. So whether you’re just starting your journey for climate action or a seasoned climate campaigner, taking part in Groundswell will be your next step to creating a better future.'
);

------------------------------------- DONATE ------------------------------------------------------

INSERT INTO donate (name, url, description) VALUES
(
  'Greenpeace UK',
  'https://secure.greenpeace.org.uk/page/contribute/greenpeace-main',
  null
);
INSERT INTO donate (name, url, description) VALUES
(
  'Extinction Rebellion',
  'https://fundrazr.com/ExtinctionRebellion?ref=ab_2qHfMwo6qKx2qHfMwo6qKx',
  null
);
INSERT INTO donate (name, url, description) VALUES
(
  'The Climate Coalition',
  'https://www.theclimatecoalition.org/give/',
  null
);
INSERT INTO donate (name, url, description) VALUES
(
  'Friends of the Earth',
  'https://act.friendsoftheearth.uk/donate/make-donation?utm_source=FN181HERO',
  null
);
INSERT INTO donate (name, url, description) VALUES
(
  'World Wildlife Fund',
  'https://www.wwf-adopt-a-animal.co.uk/charities/wwf-animal-adoptions/?keyword=wwf%20donate&device=c&vm=brand',
  null
);

------------------------------------- PETITIONS ------------------------------------------------------

INSERT INTO petitions (name, url, description) VALUES
(
  'Move the target deadlines of the 2008 Climate Change Act from 2050 to 2035',
  'https://petition.parliament.uk/petitions/231038',
  'The recent IPCC report on climate change, suggests that the process of climate change is accelerating, will have more dramatic effects and is more limited by time . This is grounds to amend the target or baseline year from 2050 to 2035 as outlined in the Climate Change Act'
);
INSERT INTO petitions (name, url, description) VALUES
(
  'Ban the use of all non-recyclable and unsustainable food packaging',
  'https://petition.parliament.uk/petitions/232684',
  'Today the Earth is at a crisis point due to our plastic consumption, and as a result, people in the UK are more willing than ever to engage in recycling. Yet so much food packaging remains completely, frustratingly unrecyclable. Let us aim for the UK to lead the world with a 100% recycling rate.'
);
INSERT INTO petitions (name, url, description) VALUES
(
  'Ban plastic carrier bags completely, this is to include ALL retailers.',
  'https://petition.parliament.uk/petitions/224215',
  'Plastic is doing really bad things for our environment but yet the vast majority of us still use plastic bags daily when we buy groceries, cloths etc. This should not be an option, there are alternatives, people just need to be prepared and carry an eco friendly bag, backpack etc.'
);

------------------------------------- SOCIALS ------------------------------------------------------

INSERT INTO socials (name, url, description) VALUES
(
  'Steve Masters',
  'https://twitter.com/AnothervoiceWB',
  '@AnothervoiceWB'
);
INSERT INTO socials (name, url, description) VALUES
(
  'Rupert Read',
  'https://twitter.com/GreenRupertRead',
  '@greenrubertread'
);
INSERT INTO socials (name, url, description) VALUES
(
  'Carline Lucas',
  'https://twitter.com/CarolineLucas',
  '@CarolineLucas'
);


COMMIT;
