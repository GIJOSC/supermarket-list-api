![Logo SevenApp](https://user-images.githubusercontent.com/31870513/201943449-dd8fcb2e-db59-4158-9a1a-04088bdbe5b1.svg)

## Supermarket List Api

API in Node.js using Express and Mongoose to connect a MongoDB Database

The main objective is to make life easier for application users who go to the
supermarket and forget the items they went to buy.
So this API aims to organize this shopping list.

### Technologies used

- Node.js
- Mongoose
- Express
- MongoDB
- Nodemon

### Required Technologies

- Node.js installed (https://nodejs.org)
- MongoDB instance running:
  EX: Running with Docker
  ```
  docker run --name supermarket-list -p 27017:27017 -d mongo
  ```

### Steps to run the project

1. Clone the repository:

```
git clone https://github.com/GIJOSC/supermarket-list-api.git
```

2. Navigate to the repository:

```
cd supermarket-list-api
```

3. Install the dependencies:

```
npm install
```

4. Run the API:

```
npm run start:dev
```

### Available endpoints

- [GET]/list-items
- [POST]/list-items
- [DELETE]/list-items/:id
- [PUT]/list-items/:id
