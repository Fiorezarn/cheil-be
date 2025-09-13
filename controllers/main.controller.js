const {
 successResponseData,
 errorServerResponse,
} = require('@/helpers/response.helper');
const { Submission } = require('@/models');

const getSubmissions = async (req, res) => {
 try {
  const submissions = await Submission.findAll({
   order: [['createdAt', 'DESC']],
  });
  return successResponseData(
   res,
   'Submissions fetched successfully',
   submissions,

   200
  );
 } catch (error) {
  return errorServerResponse(res, error.message || 'Server Error!');
 }
};

const submissionForm = async (req, res) => {
 const { name, email, phone } = req.body;
 const image = req.file;

 try {
  const data = await Submission.create({
   name,
   email,
   phoneNumber: phone,
   imagePath: image ? image.filename : null,
  });
  return successResponseData(res, 'Submission created successfully!', data);
 } catch (error) {
  return errorServerResponse(res, error.message || 'Server Error!');
 }
};

module.exports = {
 submissionForm,
 getSubmissions,
};
