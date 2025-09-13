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
   'Submissions retrieved successfully',
   submissions,

   200
  );
 } catch (error) {
  console.log(error);
  return errorServerResponse(res, 'Server Error!');
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
  return successResponseData(res, 'Submission Success!', data);
 } catch (error) {
  console.log(error);
  return errorServerResponse(res, 'Server Error!');
 }
};

module.exports = {
 submissionForm,
 getSubmissions,
};
