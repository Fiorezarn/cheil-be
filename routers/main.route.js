const {
 submissionForm,
 getSubmissions,
} = require('@/controllers/main.controller');
const { SubmissionValidation } = require('@/validations/submission.validation');
const upload = require('@/utils/multer');
const express = require('express');
const router = express.Router();

router.get('/', getSubmissions);
router.post('/', upload.single('image'), SubmissionValidation, submissionForm);

module.exports = router;
