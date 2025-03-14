## nodejs file uplode online


### first you will create  a  project and install this package:

    npm i nodejs-uploder
second you will import top of this package:

    const { getFile, uplodeFile } =  require('nodejs-uploder')
  
  and the process are create a express js project 
  

    const { getFile, uplodeFile } =  require('nodejs-uploder')
    
    const  express  =  require('express');
    
    const  app  =  express()
    
    app.use(express.json())
    
    //create a image uplode api
    
    app.post("/uploads", uplodeFile().single('image'), (req, res) => {
    
    if (!req.file) {
    return  res.status(400).json({ error:  "No image uploaded!" });
    }
    
    //get buffer file
    const  file  =  getFile(req.file)
    console.log(file)
    
    res.json({
    message:  "image get succesfully",
    file  // URL of the uploaded image
    });
    });

secand step configore cloudinary for uplode file in online database:
goto your web browser and type cloudinary login
and you will get  
    
    cloud_name: 'my_cloud_name', 
    api_key: 'my_key', 
    api_secret: 'my_secret'
```
   install this package on your project

    npm install cloudinary
```
 import top of your project and configuration:

    const cloudinary = require('cloudinary');
                   or
    import cloudinary from 'cloudinary'
    const { getFile, uplodeFile } =  require('nodejs-uploder')
    const  express  =  require('express');
    
    const  app  =  express()
    
    app.use(express.json())
      ```
     cloudinary.v2.config({ 
     cloud_name: 'my_cloud_name', 
     api_key: 'my_key', 
     api_secret: 'my_secret'
     });
     
    app.post("/uploads", uplodeFile().single('image'),async (req, res) => {
    
    if (!req.file) {
    return  res.status(400).json({ error:  "No image uploaded!" });
    }
    
    //get buffer file
    const  file  =  getFile(req.file)
    console.log(file)
    ```
    const cdb=await cloudinary.v2.uploader.upload(file.content)
    console.log(cdb.public_id)
    console.log(cdb.secure_url)
    return res.json({
    message:  "image uplode succesfully",
    file  // URL of the uploaded image
    });
    });

   
     

