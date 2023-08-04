const aws = require("aws-sdk");
const { v4: uuid } = require('uuid');
const dotenv = require('dotenv');

dotenv.config();

const upload =  async(files, folder) => {
    const s3 = new aws.S3();
    const params = files.map((file) => {
        return {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `uploads/${folder}/${uuid()}-${file.originalname}`,
            Body: file.buffer
        }
    });
    return await Promise.all(params.map((param) => s3.upload(param).promise()))
}

module.exports = {
    s3upload: upload
}

