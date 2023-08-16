import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import pix from "../../assets/pix.jpg"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
const Write = () => {

  const navigate = useNavigate()
  const [image, setImage] = useState<string>("")
  const [avatar, setAvatar] = useState<string>(pix)
 

  const onHandleImage = (e: any)=> {
    const localImage = e.target.files[0]
    const saveImage = URL.createObjectURL(localImage)
    setImage(localImage)
    setAvatar(saveImage)
  }

  const model = yup.object({
    Title: yup.string().required(),
    image: yup.string().required(),
    content: yup.string().required()
  })
  const {handleSubmit, formState} = useForm({
    resolver: yupResolver(model)
  })
  
  const onSubmit = handleSubmit (async(data: any) => {
    const {Title, image, content} = data

    const formData = new FormData()
    formData.append("Title", Title)
    formData.append("image", image)
    formData.append("content", content)
  })
  
  return (
    
     <div className='  flex flex-col'>
       <div className='w-full h-[80px] flex justify-center items-center bg-yellow-300'>

<div className=''>Name</div>
<div className='w-50% h-full '>

   </div>
   
      </div>
      <div className='w-full min-h-[100vh] flex justify-center items-center bg-slate-500 flex-col'>
      <img className="w-[300px] h-[300px]  object-cover border-4  bg-yellow-300  "
                        src={avatar}
                    />
        
        <label className="py-2 px-4 my-2 bg-yellow-300 text-black rounded-md hover:scale-[1.02] hover:cursor-pointer duration-300 transition-all mt-5"
                        htmlFor="image"
                    >create  your image </label>
                     <input placeholder="image"
                        className="hidden"
                        id='image'
                        type="file"
                        accept="image/png, image/jpeg, image/jpg"
                        onChange={onHandleImage}
                    />
                    <div >Title </div>
                    <div > </div>

                   



       
      </div>
     </div>
  )
}

export default Write