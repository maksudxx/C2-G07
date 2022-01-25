const { Router } = require("express");
const { v4: uuidv4 } = require("uuid");
const { Usuario, Rol, ObraArte } = require("../db");

const router = Router();

router.get("/usuario", async (req, res, next) => {
  //let usuario = await Usuario.findByPk(req.query.id);
  let usuario = await Usuario.findAll({
    include: { model: ObraArte },
  });
  res.json(usuario);
});

router.get("/usuario/:id", async (req, res, next) => {
  try {
    let usuario = await Usuario.findByPk(req.params.id, {
      include: { model: ObraArte },
    });
    res.json(usuario);
  } catch (err) {
    res.next(err);
  }
});

router.post("/usuario", async (req, res, next) => {
  try {
    const {
      usuario_name,
      usuario_email,
      usuario_token,
      usuario_imagen,
      usuario_password,
      rol_id,
    } = req.body;
    let nuevoUsuario = await Usuario.create({
      usuario_id: uuidv4(),
      usuario_name,
      usuario_email,
      usuario_token,
      usuario_imagen,
      usuario_password,
    });

    //↓ asigno rol (si no funciona con set probar con add por ejemplo: addRol en vez de setRol)
    await nuevoUsuario.setRol(rol_id);
    res.json(nuevoUsuario);
  } catch (err) {
    next(err);
  }
});
router.delete("/:usuario_id", async (req, res, next) => {
  const { usuario_id } = req.params;
  const usuDelete = await Usuario.findOne({ us_id: usuario_id });
  if (usuDelete) {
    usuDelete
      .destroy()
      .then(() => res.status(200).json({ message: `Usuario eliminado` }))
      .catch((err) => next(err));
  } else {
    res.status(404).json({ message: `El usuario no existe en la BD` });
  }
});

router.put("/usuario/:usuario_id", async (req, res, next) => {
  const { usuario_id } = req.params;
  const { name, imagen, telefono, facebook, instagram, paginaweb } = req.body;

  const usuarioEdit = await Usuario.findOne({
    where: { usuario_id: usuario_id },
  });
  try {
    if (usuarioEdit) {
      usuarioEdit.usuario_name = name;
      usuarioEdit.usuario_imagen = imagen;
      usuarioEdit.usuario_telefono = telefono;
      usuarioEdit.usuario_facebook = facebook;
      usuarioEdit.usuario_instagram = instagram;
      usuarioEdit.usuario_paginaweb = paginaweb;
      await usuarioEdit.save();
      res.json(usuarioEdit);
    } else {
      res.json("El usuario no existe en la BD");
    }
  } catch (err) {
    next(err);
  }
});
module.exports = router;
