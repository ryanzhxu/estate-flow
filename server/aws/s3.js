const {S3} = require("aws-sdk");
const { v4: uuid } = require('uuid');
const dotenv = require('dotenv');
const path = require("path");

dotenv.config();
const s3 = new S3();

const upload =  async(files, folder) => {
    const params = files.map((file) => {
        const fileExtension = path.extname(file.originalname);
        return {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `uploads/${folder}/${uuid()}${fileExtension}`,
            Body: file.buffer
        }
    });
    return await Promise.all(params.map((param) => s3.upload(param).promise()))
}

const deleteFiles = async(urls) => {
    const keys = urls.map((url) => {
        return {
            Key: new URL(url).pathname.slice(1)
        }
    });

    const param = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Delete: {
            Objects: keys
        }
    }

    await s3.deleteObjects(param).promise()
        .then((deletedFiles) => {
            console.log(deletedFiles)
        });

}

const isStoredInCloud= (urlString) => {
    try {
        const url = new URL(urlString);
        const hostname = url.hostname;
        return hostname === process.env.CLOUD_DOMAIN;
    } catch (e) {
        return false;
    }
}

module.exports = {
    s3upload: upload,
    deleteFiles,
    isStoredInCloud
}

