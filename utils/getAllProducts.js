import mongoConnect from "./database/mongoConnect";

async function getAllProducts() {
  const client = await mongoConnect();
  const db = client.db("xclusive-store");
  const productsCollection = db.collection("all-products");

  let allProducts = await productsCollection.find({}).toArray();

  allProducts = allProducts.map((product) => ({
    ...product,
    _id: product._id.toString(),
  }));

  await client.close();

  return allProducts;
}

export default getAllProducts;
