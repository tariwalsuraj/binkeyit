import jwt from 'jsonwebtoken'

const auth = async(request,response,next)=>{
    try {
        // access token from postman from http://localhost:8080/api/user/login ["bearer", "token"] ? optional sign
        const token = request.cookies.accessToken || request?.headers?.authorization?.split(" ")[1] 
       // check if token is valid or not
        if(!token){
            return response.status(401).json({ // response status to user
                message : "Provide token"
            })
        }
        // verify token decrpyt token
        const decode = await jwt.verify(token,process.env.SECRET_KEY_ACCESS_TOKEN)
        // check if token is valid or not for authorization
        if(!decode){
            return response.status(401).json({ //taken get exipred
                message : "unauthorized access",
                error : true,
                success : false
            })
        }

        request.userId = decode.id // from const decode = await jwt.verify(token,process.env.SECRET_KEY_ACCESS_TOKEN)

        next() // next middleware call function

    } catch (error) {
        return response.status(500).json({
            message : "You have not login",///error.message || error,
            error : true,
            success : false
        })
    }
}

export default auth