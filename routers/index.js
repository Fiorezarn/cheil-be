const express = require('express');
const router = express.Router();
const mainRouter = require('@/routers/main.route');

router.use('/submission', mainRouter);

module.exports = router;
