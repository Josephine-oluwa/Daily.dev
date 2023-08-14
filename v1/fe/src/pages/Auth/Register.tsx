import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import pix from "../../assets/pix.jpg"
import * as yup from "yup"
import {useForm} from "react-hook-form"


const Register = () => {
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
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password")])

  })

  const {handleSubmit, register, formState: {errors}}= useForm({
    resolver: yupResolver(model)
  })

  const onSubmit = handleSubmit (async (data)=> {
    const {name, email, password }= data
  })

  return (
    <div className='w-full flex justify-center items-center h-[50vh] bg-purple-300'>
      <form onSubmit={onsubmit}
      className='flex flex-col items-center mb-8'>
        <div className='flex flex-col items-center mb-8'>
        <img className='py-2 px-4 my-2 bg-purple-400-700'></img>
        </div>
      </form>
      
    </div>
  )
}

export default Register