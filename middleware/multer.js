const multer = require('multer');
const path = require('path');



const uploadImage = () => {
    const storage = multer.diskStorage({
        destination: './public/image',
        filename: (req, file, cb) => {
            return cb(null, `${Date.now()}${path.extname(file.originalname)}`)
        }
    });

    const upload = multer({storage: storage}).single('image');
    return upload;
}

module.exports = {
    uploadImage
}