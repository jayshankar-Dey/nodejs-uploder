import multer from "multer";
import path from "path";
import fs from "fs";

    type parameter= {
       type:"destination"|"memory",
       }

  const uploadDir = path.join(__dirname, "files");
  if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
 }

  export const uplodeFile=({type='destination'}:parameter)=>{
     let storage;
     
     if(type=='destination'){
       storage=multer.diskStorage({
              destination(req, file, cb) {
                cb(null, uploadDir);   
              },
              filename(req, file, cb) {
                cb(null, Date.now() + '-' + file.originalname);
              },
       })
     }else{
       storage=multer.memoryStorage()
     }

     return multer({storage:storage})
    }

 