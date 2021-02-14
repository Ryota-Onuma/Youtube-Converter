var express = require('express');
var router = express.Router();

const fs = require('fs');
const ytdl = require('ytdl-core');
const readline = require('readline');


/* GET users listing. */
router.post('/mp3', async function(req, res, next) {
  const youtube_url = req.body.youtube_url
  const file_name = req.body.file_name

  const convert_process = ytdl(youtube_url,{filter: (format) => format.container === 'mp4' })
  convert_process.pipe(fs.createWriteStream(`mp3/${file_name}.mp3`));
  convert_process.on('end', () => {
    console.log("end")
    res.send(`/${file_name}.mp3`)
  });

 
});

router.post('/mp4', async function(req, res, next) {
  const youtube_url = req.body.youtube_url
  const file_name = req.body.file_name

  const convert_process = ytdl(youtube_url,{filter: (format) => format.container === 'mp4' })
  convert_process.pipe(fs.createWriteStream(`mp4/${file_name}.mp4`));
  convert_process.on('end', () => {
    console.log("end")
    res.send(`/${file_name}.mp4`)
  });

 
});

module.exports = router;
