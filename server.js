const express = require("express");
const cors = require("cors"); // Import the CORS package

const app = express();
const port = 3000;

// Use the CORS middleware to allow cross-origin requests
app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

// Endpoint for signup
app.post("/signup", (req, res) => {
    const { name, email, password } = req.body;

    // Here, you can add code to save the data to a database
    // For demonstration, we'll send a success response

    res.status(200).json({ message: "Signup successful!" });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
