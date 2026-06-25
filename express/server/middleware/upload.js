

import multer from "multer"

const storeage = multer.diskStorage({
    destination:(req, File, callBack)=> {
        callBack(null, './uploads')
    },

    filename:(req, file, callBack)=> {

        let name = file.originalname.replace(/\s\s+/g, ' ');
        name = name.replace(/[g\/\\#, +()$~%'":=*?<>{}@-]/g, '_');
        callBack(null, Date.now()+ "_" + name)
    }
})

const fileFilterConfig = (req, file, callBack)=> {

    if(
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
    ) {
        callBack(null, true)
    }
    else {
        callBack(new Error('only png jpg jpeg allowed'))
    }
}

const upload = multer({
    storage:storeage,
    limits: {
        fileSize: 1024* 1024* 10
    },
    fileFilter: fileFilterConfig
    
})

export default upload