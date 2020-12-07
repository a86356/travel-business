const crypto = require('crypto');

export const encryptPwd = (password: string) => {
  let md5 = crypto.createHash('md5');
  return md5.update(password).digest('hex');
};
