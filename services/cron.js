const cron = require('node-cron');
const fs = require('fs');
// 定期的にcronででファイル削除
cron.schedule('0 0 3,6,9,12,15,18,21 * * *', () => {

const dir = '../tmp';

fs.readdir(dir, function(err, files){
  if(err){
    throw err;
  }
  files.forEach(function(file){
    fs.unlink(`${dir}/${file}`, function(err){
      if(err){
        throw(err);
      }
      console.log(`deleted ${file}`);
    });
  });
});
});