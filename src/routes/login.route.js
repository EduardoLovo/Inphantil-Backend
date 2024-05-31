const router = require("express").Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Login User
router.post("/", async (req, res) => {
  const { usuario, password } = req.body;

  // Validations
  if (!usuario) {
    return res.status(422).json({ msg: "O usuario é obrigatorio!" });
  }

  if (!password) {
    return res.status(422).json({ msg: "A senha é obrigatoria!" });
  }

  // Check if user exists
  const user = await User.findOne({ usuario: usuario });
  const userType = user.type;
  if (!user) {
    return res.status(404).json({ msg: "Usuario não encontrado!" });
  }

  // Check if password match
  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    return res.status(422).json({ msg: "Senha incorreta!" });
  }

  // const typrUser = await

  try {
    const secret = process.env.SECRET;

    const token = jwt.sign(
      {
        id: usuario._id,
      },
      secret
    );
    res
      .status(200)
      .json({ msg: "Autenticação realizada com sucesso!", token, userType });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Erro no servidor" });
  }
});

module.exports = router;
