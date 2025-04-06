import multer from 'multer'

const storage = multer.memoryStorage()

const upload = multer({ storage : storage }) // store image in memory storage temporarily and upload to cloudinary

export default upload