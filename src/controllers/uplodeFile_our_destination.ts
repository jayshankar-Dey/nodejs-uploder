import multer from "multer";
import path from "path";
import fs from "fs";


// Ensure directory exists when saving to disk
const ensureUploadDirExists = (folder:string) => {
  const uploadDir = path.join(__dirname, folder);
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }
  return uploadDir
};

// Define the parameter type
interface UploadOptions {
  type?: "destination" | "memory";
  folder?: "images/" | "files/" | "uploads/"
}
  export const uplodeFile=({ type = "destination" ,folder='files/'}: UploadOptions)=>{
     let storage: multer.StorageEngine;
     
     if(type=='destination'){
       storage=multer.diskStorage({
              destination(req, file, cb) { 
                cb(null, ensureUploadDirExists(folder));   
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

 