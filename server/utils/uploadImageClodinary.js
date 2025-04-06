import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name : process.env.CLODINARY_CLOUD_NAME,
    api_key : process.env.CLODINARY_API_KEY,
    api_secret : process.env.CLODINARY_API_SECRET_KEY
})

// Upload image to cloudinary
const uploadImageClodinary = async(image)=>{
    const buffer = image?.buffer || Buffer.from(await image.arrayBuffer()) // if image in the buffer || Convert image to array buffer

    const uploadImage = await new Promise((resolve,reject)=>{ 
        cloudinary.uploader.upload_stream({ folder : "binkeyit"},(error,uploadResult)=>{ // store image in binkeyit folder
            return resolve(uploadResult)
        }).end(buffer)
    })

    return uploadImage
}

export default uploadImageClodinary
