if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
};

// require("dotenv").config();

// Importações
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Use express
const app = express();

app.use(express.json());
app.use(cors());

// Models
const User = require("./src/models/User");

// Routes
const authRouter = require("./auth/auth");
const loginRouter = require("./src/routes/login.route");
const apliqueRouter = require("./src/routes/aplique.routes");
const userRouter = require("./src/routes/user.routes");
const taskRouter = require("./src/routes/task.routes");
const lencolApliqueRouter = require("./src/routes/lencolApliquue.routes");
const lencolTecidoRouter = require("./src/routes/lencolTecido.routes");
const materialRouter = require("./src/routes/material.routes");

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
    return res.status(404).json({ msg: "Usuario não encontrad!!" });
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
// Rota login ***
app.use("/login", loginRouter);
// Rotas
app.use("/aplique", apliqueRouter);
app.use("/users", userRouter);
app.use("/tarefas", taskRouter);
app.use("/lencolApliques", lencolApliqueRouter);
app.use("/lencolTecidos", lencolTecidoRouter);
app.use("/material", materialRouter);

// Credencials
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

// conexão com o banco de dados
mongoose
  .set("strictQuery", false)
  .connect(
    `mongodb+srv://${dbUser}:${dbPass}@cluster0.wrwrg0v.mongodb.net/?retryWrites=true&w=majority`
    // `mongodb+srv://${dbUser}:${dbPass}@cluster0.wrwrg0v.mongodb.net/`

  )

  .then(() => {
    app.listen(3000);

    console.log("Conectou com o banco");
  })
  .catch((err) => console.log(err));

//npm run dev