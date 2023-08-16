import axios from "axios"

const URL = "http://localhost:3322/api/v1"

interface iCreate{
    name?: string,
    email?: string,
    ID?: string,
    content?: any;
}

export const createContent = async (data: iCreate, ID: string)=> {
    try {
         return await axios.post(`${URL}/${ID}/writeTask`, {write: data}).then((res)=> {
            console.log("Reading Data: ", res.data)
            res.data.data
         })
    } catch (error) {
console.log (error)
    }
}

export const getContent = async()=> {
    try {
        return await axios.get (`${URL}/getContent`).then((res) => {
           
            res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}


export const deleteContent = async (contentID: string)=> {
    try {
return await axios.delete (`${URL}/${contentID}/deleteContent`).then ((res) => {
    return res.data.data
})
    } catch (error) {
        console.log (error)
    }
}
