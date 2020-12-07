import { Injectable, NestMiddleware } from '@nestjs/common';

import { UserService } from '../service/user/user.service';

const dayjs = require('dayjs');
const fs = require('fs');
const path = require('path');
const os = require('os');
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private UserService: UserService) {}

  async use(req: any, res: any, next: () => void) {
    const str =
      dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss') +
      ' ' +
      `[${req.method}]` +
      ` ${req.originalUrl} ` +
      ' get参数:' +
      JSON.stringify(req.query) +
      ' post参数: ' +
      JSON.stringify(req.body) +
      os.EOL;

    const dir = path.resolve('./src/module/api/log');
    const filePath = dir + '/httpRequest.log';

    fs.readdir(dir, (err, directory) => {
      if (err) {
        fs.mkdirSync(dir);
      }
    });
    fs.appendFile(path.join(filePath), str, (err) => {
      if (err) {
        console.log(filePath);
      }
    });

    next();
  }
}
