const fs = require("fs")
const multer = require('multer');

const uploader = () => {
    const myStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            let dirPath = "./public/uploads"
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true })
            }
            cb(null, dirPath)

        },
        filename: (req, file, cb) => {
            const fileName = Date.now() + "-" + file.originalname
            cb(null, fileName)
        }

    })

    let allowedExits = ["jpg", "png", "jpeg", "gif", "webp", "bmp", "svg", "jfif"]
    let maxFileSize = 3 * 1024 * 1024
    let type = ""
    if (type === "docs") {
        allowedExits = ["pdf", "docs", "docx", "csv", "xls", "xlxs", "json"]
        maxFileSize = 10 * 1024 * 1024
    }


    const validateFileType = (req, file, cb) => {

        const fileExt = file.originalname.split(".").pop()
        console.log({ file });

        console.log("file ext:", fileExt);

        if (allowedExits.includes(fileExt.toLowerCase())) {
            console.log("hellot");
            cb(null, true)
        } else (
            cb({
                code: 422,
                message: "Validation failed",
                status: "VALIDATION_FAILED",
                options: null
            })
        )
    }


    return multer({// this will need configuration
        storage: myStorage,
        fileFilter: validateFileType,
        limits: {
            fileSize: maxFileSize
        }
    })
}

module.exports = uploader