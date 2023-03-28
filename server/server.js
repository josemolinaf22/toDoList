const PORT = process.env.PORT ?? 8000;
const express = require("express");

const app = express();
const pool = require("./db");
const cors = require("cors");

app.use(cors());

// Get all todos
app.get("/todos/:userEmail", async (req, res) => {
  // console.log(req);
  const { userEmail } = req.params;
  // const userEmail = req.params.userEmail;

  try {
    const todos = await pool.query(
      "SELECT * FROM todos WHERE user_email = $1",
      [userEmail]
    );
    res.json(todos.rows);
  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));