import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { uWriteFiles } from '../../../utils/fileUtils';

const dayjs = require('dayjs');
const path = require('path');
const os = require('os');

@Catch(HttpException)
export class HttpExceptionFilter<T> implements ExceptionFilter {
  catch(exception, host: ArgumentsHost) {
    // const ctx = host.switchToHttp();
    // const response = ctx.getResponse();
    // const req = ctx.getRequest();
    // const status = exception.getStatus();

    // const str =
    //   dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss') +
    //   ' ' +
    //   `[${req.method}]` +
    //   ` ${req.originalUrl} ` +
    //   ' error:' +
    //   exception.message +
    //   os.EOL;
    // const dir = path.resolve('./src/module/admin/log');
    // const filePath = dir + '/error.log';
    // uWriteFiles(dir, filePath, str);

    // // 发送响应
    // response.status(status).json({
    //   code: -1,
    //   statusCode: status,
    //   msg: exception.message,
    //   path: req.url,
    // });
  }
}
