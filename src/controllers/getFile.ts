import path from 'path'
import datauriPerser from 'datauri/parser'

///getFile using datauri
export const getFile=(file:any)=>{
 const parser=new datauriPerser()
 const extname=path.extname(file.originalname).toString()
 return parser.format(extname,file.buffer)
}