# Getting Started with Express (Part 1)

This is the demo application that accompanies my "Getting Started with Express (Part 1)" video.  It uses the [Express framework](http://expressjs.com/) to model a very basic in memory key/value store database that has no persistence.

## Requirements

To follow along with the video, you'll need:

* [Node.js](https://nodejs.org/) (I used version 14 which was the current long term stable at time of writing).
* The `npm` command (installs with Node.js).
* [Postman](https://www.postman.com/) (to compose and send HTTP requests, particularly `POST` requests that you won't be able to do in a browser easily).

## Installation / Setup:

```bash
$ git clone https://github.com/simonprickett/getting-started-with-express-part-1.git
$ cd getting-started-with-express-part-1
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

This uses [nodemon](https://www.npmjs.com/package/nodemon) to watch for changes and restart the application.

If you don't want this behavior, use:

```bash
$ npm start
```

You'll then need to stop the server () and restart it to pick up code changes.

## Endpoints

The server has the following endpoints for basic database operations...

### Get the Value of a Given Key

Let's see what's stored in the `favoriteColor` key:

**Request:**

```
GET http://localhost:3000/get/favoriteColor
```

**Response (Key Exists):**

```json
{
    "value": "red"
}
```

**Response (Key Doesn't Exist):**

```json
{}
```

Note: key names are case sensitive, so `favoriteColor` and `favoritecolor` are two different keys.

### Set the Value of a Given Key

**Request:**

Let's set the value stored at key `favoriteColor` to `red`.

```
POST http://localhost:3000/set
```

JSON Encoded Request Body:

```json
{
    "key": "favoriteColor",
    "value": "red"
}
```

**Response:**

```json
{
    "status": "OK"
}
```

The response has a 201 (Created) HTTP response code.

Note: key names are case sensitive, so `favoriteColor` and `favoritecolor` are two different keys.

### Get Database Information

We can get basic, or detailed database information.  Basic information consists of the size of the database (the number of keys it is holding).  Detailed information adds an array of key names that currently hold values.

**Request (basic):**

```
GET http://localhost:3000/dbinfo
```

**Response (basic):**

```json
{
    "size": 1
}
```

**Request (detailed):**

```
GET http://localhost:3000/dbinfo?details=true
```

**Response (detailed):**

```json
{
    "size": 1,
    "keys": [
        "favoriteColor"
    ]
}
```