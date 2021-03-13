# Getting Started with Express (Part 1)

This is the demo application that accompanies my "Getting Started with Express (Part 1)" video.  It models a very basic in memory key/value store database.

## Requirements

To follow along with the video, you'll need:

* [Node.js](https://nodejs.org/) (I used version 14 which was the current long term stable at time of writing).
* The `npm` command (installs with Node.js).
* [Postman](https://www.postman.com/) (to compose and send HTTP requests, particularly `POST` requests that you won't be able to do in a browser easily).

## Installation / Setup:

```bash
$ git clone TODO
$ cd TODO
$ npm install
```

## Configuration

By default, the server runs on port 3000.  To override this, set your own port using an environment variable:

```bash
$ export PORT=8081
```

## Start Up

There's two ways to start the server... if you want to edit the code and have it automatically restart and pick up your edits, use:

```bash
$ npm run dev
```

This uses nodemon to watch for changes and restart the application.

If you don't want this behavior, use:

```bash
$ npm start
```

## Endpoints

TODO