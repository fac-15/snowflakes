# ❄️ SNOWFLAKES ❄️ 

[![Build Status](https://travis-ci.com/fac-15/snowflakes.svg?branch=staging)](https://travis-ci.com/fac-15/snowflakes)

## About
*Snowflakes* is a web-app designed to get people involved in climate change activism. This is a project by *Oliver, Jihyun, Cynthia & Kristina* from Founders & Coders 15.

> “You are not special. You're not a beautiful and unique snowflake. You're the same decaying organic matter as everything else.”
> from *Fight Club* 
> 
Taken from Chuck Palahniuk’s iconic 1990s novel-turned-film *Fight Club*, the term **‘snowflake’** has come to be the go-to derogatory term for liberals and progressives.

We believe that climate change is an issue that’s worth getting offended over. **Snowflakes aims to provide a starting point for young people looking to get involved with climate change activism for the first time.**

![People dancing as snowflakes](https://media.giphy.com/media/3o7TKMf5HQQlZvv9Cg/giphy.gif)




## View Heroku deployed version of *Snowflakes* 

https://snowflake-ca.herokuapp.com/

Please note that the local version of this project is further along than the deployed version.

## How to install local version of *Snowflakes*

1. Clone repo onto your local machine  

```git clone git@github.com:fac-15/snowflakes.git```

2. Install dependencies 

```npm i```

3. Start local server  

``` npm run dev ```

4. Open your browser to 

https://localhost:4000

:heavy_plus_sign: See our test results
``` npm run test ```

<img width='50px' src="https://media.giphy.com/media/4HeSrL5CtS6UE0VzRR/giphy.gif">

<br>
<br>

## 🚶User Journey
As a user I would like to know some simple actions that I can take to get involved in making an impact against climate change.

## 🕺User Stories 

- [ ] See a nav menu in the corner
- [x] Be shown the goal of the app
- [x] Be shown a walkthrough of how to use the app
- [ ] Complete a short quiz
- [x] See results of 3 tailored actions that user can take to engage with climate change
- [x] See all results of actions
- [ ] Be able to send site to another person

## 🧘 Stretch goals
- [ ] Use a cookie to remember results without sign in
- [ ] Send a link with an HTML emails with links to results

## Tech Stack
Node | Express | Handlebars | PostgreSQL | Jest | CSS | SASS

## Flow of the app
- User goes to a home page, clicks a button
- Brief instruction to go to the top three page and clicks a button
- Show the top three actions(Donate, Organisation, Tweet). On the bottom of the page, another brief instruction to go to the explore page and two buttons. One is for explanation of the meaning of snowflake and another links to explore page
- On the explore page, 5 devided sections and 'email me' option and home button

## Brief File Structure
:file_folder: Public
- img
- scripts
- styles

:file_folder: src
- controllers
- model
- views

:file_folder: tests

## Brief Database Schema
- topthree
- organisations
- events
- donate
- petitions
- socials

## What we learned
- How to use SASS
    - variables, better uses of helpers
- How to implement ESlint
- No space for databaseURL in config.env
- How to test database
- Using promises instead of callback hell
- Agile methodology?
- Scoping
- Working two sprints
- Managing time / Planning

## What we need to work on
- Using fetch
- Getting Travis to pass our database tests


## Thank you for reading!
P.S. Please star this repo :star2: 

