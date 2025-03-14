import multer from "multer";
import path from 'path'
import datauriPerser from 'datauri/parser'

// Define the parameter type

  export const uplodeFile=()=>{
     const storage=multer.memoryStorage()
     return multer({storage:storage})
     
 }

 export const getFile=(file:any)=>{
    const parser=new datauriPerser()
    const extname=path.extname(file.originalname).toString()
    return parser.format(extname,file.buffer)
   }
 