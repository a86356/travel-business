const fs = require('fs')
const path = require("path")


export const uWriteFiles=(dir,filePath,content)=>{
    fs.readdir(dir,(err,directory)=>{
        if(err){
            fs.mkdirSync(dir)
        }
    })
    fs.appendFile(path.join(filePath),content,err=>{
        if (err) {
            console.log(filePath)
        }
    })
}