import mongoConnect from "./database/mongoConnect";
import { ObjectId } from "mongodb";

export async function getAllProducts() {
  const client = await mongoConnect();
  const db = client.db("xclusive-store");
  const productsCollection = db.collection("all-products");
  let allProducts;

  try {
    allProducts = await productsCollection.find({}).toArray();
    product = { ...product, _id: product._id.toString() };
    allProducts = allProducts.map((product) => ({
      ...product,
      _id: product._id.toString(),
    }));
  } catch (error) {
    throw new Error(error.message);
  } finally {
    await client.close();
  }

  return allProducts;
}

export async function getSingleProduct(id) {
  const client = await mongoConnect();
  const db = client.db("xclusive-store");
  const productsCollection = db.collection("all-products");
  let product;

  try {
    product = await productsCollection.findOne({ _id: new ObjectId(id) });
    product = { ...product, _id: product._id.toString() };
  } catch (error) {
    throw new Error(error.message);
  } finally {
    await client.close();
  }

  return product;
}
