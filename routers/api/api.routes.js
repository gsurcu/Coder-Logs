const express = require('express');
const path = require('path')
const rutasProductos = require('./productos/productos.routes')
const authRoutes = require('./auth/auth.routes');
const randomNumber = require('./random/random.routes')
const router = express.Router();

//Routes
// router.use(infoLog)
router.use('/auth', authRoutes);
router.use('/productos', rutasProductos);

router.get('/randoms', (req, res) => {
  const { cant } = req.query
  // console.log(cant,1)
  const random = randomNumber(Number(cant))
  res.render('random', { num: random})
})

module.exports = router;