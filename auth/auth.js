const User = require("../src/models/User");

const router = require("express").Router();

const bcrypt = require("bcrypt");
// Register user

router.post("/", async (req, res) => {
  const { usuario, password, confirmpassword, type } = req.body;

  // Validations
  if (!usuario) {
    return res.status(422).json({ msg: "O usuario é obrigatorio!" });
  }

  if (!password) {
    return res.status(422).json({ msg: "A senha é obrigatoria!" });
  }

  if (password !== confirmpassword) {
    return res.status(422).json({ msg: "As senhas não conferem!" });
  }

  // Check if user exists
  const userExists = await User.findOne({ usuario: usuario });
  if (userExists) {
    return res.status(422).json({ msg: "Usuario ja existe!" });
  }

  // Create password
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  // Create user
  const user = new User({
    usuario,
    password: passwordHash,
    type,
  });

  try {
    await user.save();
    res.status(201).json({ msg: "Usuario criado com sucesso!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Erro no servidor" });
  }
});

module.exports = router;
