const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
 
// Create MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Create submissions table if not exists
(async () => {
  await pool.query(`
    CREATE TABLE contact_submissions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
})();

// POST route: insert contact
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const [result] = await pool.execute(
      "INSERT INTO contact_submissions (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );
    res.status(201).json({ success: true, insertId: result.insertId });
  } catch (err) {
    console.error("DB error:", err);
    res.status(500).json({ success: false, error: "Database error" });
  }
});

// GET route: fetch contacts
app.get("/api/contacts", async (req, res) => {
  try {
    const [rows] = await pool.execute("SELECT * FROM contact_submissions ORDER BY submitted_at DESC");
    res.json({ success: true, data: rows });
  } catch (err) {
    console.error("DB error:", err);
    res.status(500).json({ success: false, error: "Database error" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Backend running on port ${process.env.PORT}`);
});