const db = require('../db');
const Router = require('express-promise-router');

const router = new Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { rows } = await db.query('SELECT * FROM users WHERE id_user = $1', [id]);
  res.send(rows[0]);
});

module.exports = router;
