import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = path.join(__dirname, "files");

// Ensure directory exists when saving to disk
const ensureUploadDirExists = () => {
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }
};

// Define the parameter type
interface UploadOptions {
  type?: "destination" | "memory";
}
  export const uplodeFile=({ type = "destination" }: UploadOptions)=>{
     let storage: multer.StorageEngine;
     
     if(type=='destination'){
       storage=multer.diskStorage({
              destination(req, file, cb) {
                ensureUploadDirExists(); 
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

 