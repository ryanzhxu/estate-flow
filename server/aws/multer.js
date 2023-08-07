const multer = require("multer");
const {StatusCodes} = require("http-status-codes");
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(new Error('Only image files of type jpg, png are allowed'), false);
    }
};

const handleMulterError = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: err.message });
    } else if (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: err.message });
    }
    next();
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    }
});

module.exports = {upload, handleMulterError};
