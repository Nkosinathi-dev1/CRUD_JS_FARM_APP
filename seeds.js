// const e = require("express");
// const mongoose = require("mongoose");
// const Product = require("./models/product");

// const CONNECTION_URL =
//   "mongodb+srv://Username:PASSWORD@cluster0.zhyecxk.mongodb.net/?retryWrites=true&w=majority";

// mongoose
//   .set("strictQuery", false)
//   .connect(CONNECTION_URL)
//   .then(() => console.log("Mongoo Connected"))
//   .catch((error) => console.error(error.message));

// // const p = new Product({
// //   name: "Grape",
// //   price: 1.99,
// //   category: "fruit",
// // });

// // p.save()
// //   .then((p) => {
// //     console.log(p);
// //   })
// //   .catch((e) => {
// //     console.log(e);
// //   });

// const seedProducts = [
//   {
//     name: "Fairy Eggplant",
//     price: 1.0,
//     category: "vegetable",
//   },
//   {
//     name: "Organic Goddess Melon",
//     price: 4.99,
//     category: "fruit",
//   },
//   {
//     name: "Orgnic Mini Seedless Watermelon",
//     price: 3.99,
//     category: "fruit",
//   },
//   {
//     name: "Organic Celery",
//     price: 1.5,
//     category: "vegetable",
//   },
//   {
//     name: "Chocolate Whole Milk",
//     price: 2.69,
//     category: "dairy",
//   },
// ];

// // Product.insertMany(seedProducts)
// //   .then((res) => {
// //     console.log(res);
// //   })
// //   .catch((e) => {
// //     console.log(e);
// //   });
