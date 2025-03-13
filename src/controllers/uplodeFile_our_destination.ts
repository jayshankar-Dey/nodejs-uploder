   import multer from "multer";

    type parameter= {
       type:"destination"|"memory",
       folder?:String | "uplode/" | "files/" | "images/"
       }
  export const uplodeFile=({type,folder}:parameter)=>{
     let storage;
     if(type=='destination'){
       storage=multer.diskStorage({
              destination(req, file, cb) {
                cb(null, "");   
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

 