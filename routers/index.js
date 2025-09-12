const express = require('express');
const router = express.Router();
const mainRouter = require('@/routers/main.route');
const { welcomeApi } = require('@/controllers/main.controller');

router.use('/submission', mainRouter);

module.exports = router;
