if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
};

require("dotenv").config();


// Importações
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Use express
const app = express();

app.use(express.json());
app.use(cors());


// Models
const User = require("./models/User");


// Routes
const authRouter = require("./auth/auth");
const loginRouter = require("./routes/login.route");
const apliqueRouter = require("./routes/aplique.routes");
const userRouter = require("./routes/user.routes");


// Open Route - Public Route
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Bem vindo a nossa API!" });
});


// Private Route
app.get("/users/:id", checkToken, async (req, res) => {
  const id = req.params.id;

  // Check if user exists
  const user = await User.findById(id, "-password");

  if (!user) {
    return res.status(404).json({ msg: "Usuario não encontrado" });
  }

  res.status(200).json({ user });
});

function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Acesso negado" });
  }

  try {
    const secret = process.env.SECRET;

    // jwt.verify(token, secret);

    next();
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: "Token invalido!" });
  }
}

// auth ****
app.use("/auth/register", authRouter);

//login ***
app.use("/login", loginRouter);
app.use("/aplique", apliqueRouter);
app.use("/users", userRouter);

// Credencials
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;



// conexão com o banco de dados
mongoose
  .set("strictQuery", false)
  .connect(
    `mongodb+srv://${dbUser}:${dbPass}@cluster0.wrwrg0v.mongodb.net/?retryWrites=true&w=majority`
  )

  .then(() => {
    app.listen(3000);

    console.log("Conectou com o banco");
  })
  .catch((err) => console.log(err));

//npm start dev
