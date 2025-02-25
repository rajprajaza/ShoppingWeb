const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
const products = [
  {
    "id": 1,
    "name": "Laptop",
    "price": 999,
     "description": "This is a short description of the product.",
  "details": "This section contains detailed information about the product, specifications, and more.",
 
    "image": "/images/laptop.jpg"
  },
  {
    "id": 2,
    "name": "Headphones",
    "price": 199,
     "description": "This is a short description of the product.",
  "details": "This section contains detailed information about the product, specifications, and more.",
 
    "image": "/images/headphones.jpg"
  },
  {
    "id": 3,
    "name": "Camera",
    "price": 199,
     "description": "This is a short description of the product.",
  "details": "This section contains detailed information about the product, specifications, and more.",
 
    "image": "/images/camera.jpg"
  },
  {
    "id": 4,
    "name": "Smart Phone",
    "price": 199,
     "description": "This is a short description of the product.",
  "details": "This section contains detailed information about the product, specifications, and more.",
 
    "image": "/images/smartphone.jpg"
  },
  {
    "id": 5,
    "name": "Smart Watch",
    "price": 199,
     "description": "This is a short description of the product.",
  "details": "This section contains detailed information about the product, specifications, and more.",
 
    "image": "/images/smartwatch.jpg"
  },
  {
    "id": 6,
    "name": "Laptop",
    "price": 999,
     "description": "This is a short description of the product.",
  "details": "This section contains detailed information about the product, specifications, and more.",
 
    "image": "/images/laptop.jpg"
  },
  {
    "id": 7,
    "name": "Headphones",
    "price": 199,
     "description": "This is a short description of the product.",
  "details": "This section contains detailed information about the product, specifications, and more.",
 
    "image": "/images/headphones.jpg"
  },
  {
    "id": 8,
    "name": "Camera",
    "price": 199,
     "description": "This is a short description of the product.",
  "details": "This section contains detailed information about the product, specifications, and more.",
 
    "image": "/images/camera.jpg"
  },
  // Add more products here...
]

  
  let cart = [];
  
  app.get("/api/products", (req, res) => res.json(products));
  
  app.get("/api/products/:id", (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    res.json(product || {});
  });
  
  app.post("/api/cart", (req, res) => {
    const { productId } = req.body;
    const product = products.find(p => p.id === productId);
    if (product) {
      cart.push(product);
      res.json({ success: true, cart });
    } else {
      res.json({ success: false, message: "Product not found" });
    }
  });
  
  app.get("/api/cart", (req, res) => res.json(cart));
  
  app.post("/api/checkout", (req, res) => {
    const { items, totalAmount } = req.body;

    // Validate the request payload for items and totalAmount
    if (!items || items.length === 0 || typeof totalAmount !== "number") {
        return res.status(400).json({
            success: false,
            message: "Invalid request: items or totalAmount is missing or invalid.",
        });
    }

    // Simulate payment success with an 80% chance
    const success = Math.random() > 0.2; 

    // Clear cart only if payment is successful
    if (success) {
        // Here you can clear your cart variable if needed, or handle it accordingly
        cart = []; // Reset the cart for mock purposes
        return res.status(200).json({
            success: true,
            message: "Payment Successful",
        });
    } else {
        return res.status(500).json({
            success: false,
            message: "Payment Failed. Please try again.",
        });
    }
});

  

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
