import axios from "axios"

interface Picture {
    createdAt: Date
    id: number
    name: string
  }

interface PictureResp {
    isSuccess: boolean
    message: string
    images: Picture[]
  }

type CreatePictureFunk = (files: FormData | null) => Promise<PictureResp>

export const createPictures: CreatePictureFunk = async ( files ) => {
    let obj: PictureResp ={
        isSuccess: false,
        message: 'pictures did not send',
        images: []
    } 
    if(files){
        const {data} = await axios.post<PictureResp>('http://localhost:4002/upload',files)
        obj = data
    } 
    return obj
}