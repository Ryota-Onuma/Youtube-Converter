var express = require('express');
var router = express.Router();

const fs = require('fs');
const ytdl = require('ytdl-core');
const { execSync } = require('child_process')


router.post('/mp3', async function(req, res, next) {
  const youtube_url = req.body.youtube_url
  const file_name = req.body.file_name
  const convert_process = ytdl(youtube_url,{filter: (format) => format.container === 'mp4' })
  convert_process.pipe(fs.createWriteStream(`tmp/${file_name}.mp4`));
  convert_process.on('end', () => {
    console.log("mp4のconvertはend")
    // 以下でshellからffmpegの変換コマンドを叩く 同期処理なのでexecSync
    const stdout = execSync(`ffmpeg -y -i ${process.env.root_path}/tmp/${file_name}.mp4 -ab 192 ${process.env.root_path}/tmp/${file_name}.mp3`)
    console.log("mp3のconvertもend")
    res.send(`/${file_name}.mp3`)
  });

 
});

router.post('/mp4', async function(req, res, next) {
  const youtube_url = req.body.youtube_url
  const file_name = req.body.file_name
  const convert_process = ytdl(youtube_url,{filter: (format) => format.container === 'mp4' })
  convert_process.pipe(fs.createWriteStream(`tmp/${file_name}.mp4`));
  convert_process.on('end', () => {
    console.log("end")
    res.send(`/${file_name}.mp4`)
  });

 
});

module.exports = router;
