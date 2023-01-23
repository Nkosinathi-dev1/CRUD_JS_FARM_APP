const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./models/product");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//HARDCODED
const categories = ["fruit", "vegetable", "dairy"];

//get all products
app.get("/products", async (req, res) => {
  const { category } = req.query;
  if (category) {
    const products = await Product.find({ category: category });
    res.render("products/index", { products, category });
  } else {
    const products = await Product.find({});
    res.render("products/index", { products, category: "All" });
  }
});

//go to add product form
app.get("/products/new", (req, res) => {
  res.render("products/new", { categories });
});

//go to edit page
app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);

  res.render("products/edit", { product, categories });
});

//Post new product
app.post("/products", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.redirect(`/products/${newProduct._id}`);
});

//Put edit product
app.put("/products/:id", async (req, res) => {
  const { id } = req.params;

  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });

  console.log(req.body);
  res.redirect(`/products/${product._id}`);
});

//get product by id
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/show", { product });
});

//delete a product
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.redirect("/products");
});
//mongoDB connection
const CONNECTION_URL =
  "mongodb+srv://Username:PASSWORD@cluster0.zhyecxk.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .set("strictQuery", false)
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(3000, () => console.log(`Server running on 3000 ${3000}`))
  )
  .catch((error) => console.error(error.message));
