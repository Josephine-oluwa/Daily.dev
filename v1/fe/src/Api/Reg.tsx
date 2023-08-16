import axios from "axios"

const URL = "http://localhost:9900/api/v1"

interface iAuth {
    name?: string,
    email?: string,
    password?: string,
    avatar?: string,
    avatarID?: string,
}

export const registerApi = async(data: any)=> {
try {
const config:any = {
    "contentType" : "multipart/formData"
}
return await axios.post(`${URL}/register`,data, config ).then ((res: any) => {
    return res.data.data
})
} catch (error){
    console.log("Error: ", error )
}
}

export const SignInApi = async (data: iAuth) => {
try {
    return await axios.post(`${URL}/SignIn`).then ((res: any)=> {
return res.data.data
    } )
} catch (error) {
    console.log(error)
}
}
export const getOneAPI = async (userID: string) => {
    try {
        return await axios.get(`${URL}/${userID}/get-user`).then((res: any) => {
            return res.data.data
        })
    } catch (error) {
        console.log("Error: ", error)
    }
}

