const { MongoClient } = require("mongodb");
import products from "../../data/products";

// Connection URL
const url = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.xfupj0y.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(url);

export default async function mongoConnect() {
  // Use connect method to connect to the server
  await client.connect();

  return client;
}
