import jwt from 'jsonwebtoken' // using jwt to generate token

const generatedAccessToken = async(userId)=>{
    const token = await jwt.sign({ id : userId}, // data : secret key when the token is expired
        process.env.SECRET_KEY_ACCESS_TOKEN,
        { expiresIn : '5h'}
    )

    return token
}

export default generatedAccessToken
