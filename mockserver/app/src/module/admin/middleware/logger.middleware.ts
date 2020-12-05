import { Injectable, NestMiddleware } from '@nestjs/common';

const dayjs = require('dayjs')
const path = require("path")
const os = require('os')
import {uWriteFiles} from "../../../utils/fileUtils";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {

    const str=dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss')+" "+`[${req.method}]`
        +` ${req.originalUrl} `+" get参数:" +JSON.stringify(req.query) +' post参数: '+JSON.stringify(req.body)+os.EOL

    const dir = path.resolve('./src/module/admin/log');
    const filePath =dir+"/httpRequest.log"

    uWriteFiles(dir,filePath,str)

    next();

  }
}
