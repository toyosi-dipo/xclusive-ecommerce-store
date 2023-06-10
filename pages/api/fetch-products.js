import { getAllProducts } from "../../utils/getProducts";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).jon({ msg: "inappropriate entry request" });
  }

  try {
    const allProducts = await getAllProducts();
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json({ msg: "Error getting products" });
  }
}
