const express = require("express");
const cors = require("cors");
const { products } = require("./data/products");
const app = express();
app.use(cors());
app.use(express.json());

/*
  ============================
  ROUTES (API ENDPOINTS)
  ============================
*/

// Health check
app.get("/", (req, res) => {
  res.json({ ok: true, name: "bellezza-backend" });
});

// Get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Get product by ID
app.get("/api/products/:id", (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.json(product);
});

/*
  ============================
  START SERVER
  ============================
*/

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Bellezza backend running on http://localhost:${PORT}`);
});