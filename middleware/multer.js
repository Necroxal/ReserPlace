const multer = require('multer');
const path = require('path');



const uploadImage = () => {
    const storage = multer.diskStorage({
        destination: './public/image',
        filename: (req, file, cb) => {
            const fileTypes = /jpeg|jpg|png|gif/;
            const mimetype = fileTypes.test(file.mimetype);
            const extname = fileTypes.test(path.extname(file.originalname));
            if (mimetype && extname) {
                return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
              }
            else{
                cb("Error: invalid image format");
            }
        }
    });

    const upload = multer({storage: storage}).single('image');
    return upload;
}


module.exports = {
    uploadImage
}