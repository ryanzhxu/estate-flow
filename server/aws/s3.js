const aws = require("aws-sdk");
const { v4: uuid } = require('uuid');
const dotenv = require('dotenv');

dotenv.config();

// aws.config.update({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     region: "us-east-1"
// })

const upload =  async(file) => {
    const s3 = new aws.S3();
    const param = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `uploads/${uuid()}-${file.originalname}`,
        Body: file.buffer
    }
    return await s3.upload(param).promise();
}

// const upload = multer({
//     storage: multerS3({
//         s3: new aws.S3(),
//         bucket: process.env.AWS_BUCKET_NAME,
//         key: (req, file, cb) => {
//             console.log(file);
//             cb(null, uuid() + "-" + file.originalname); //use Date.now() for unique file keys
//         }
//     })
// });

module.exports = {
    s3upload: upload
}

