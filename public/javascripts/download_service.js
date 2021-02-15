const axios = window.axios
const mp3_convert = document.getElementById("mp3-convert")
const mp4_convert = document.getElementById("mp4-convert")
const downloader= document.getElementById("downloader")

document.getElementById("loading").style.display = "none"
// const validation = () => {
//   const youtube_form = document.getElementById("youtube_url")
//   const file_name_form = document.getElementById("file_name")
//   if(youtube_form.value).match(){

//   }
//   if(file_name_form.value === "" || !file_name_form.value){
//     alert("ファイル名を入力してください")
//     return false
//   }
// }
mp3_convert.addEventListener("click", async () => {
  try{
    const youtube_url = document.getElementById("youtube_url").value
    const file_name = document.getElementById("file_name").value
    const res = await axios.post("/download/mp3", {
      youtube_url: youtube_url,
      file_name: file_name
    })
    console.log(res.data)
    downloader.href = res.data;
    downloader.click();
    
  }catch(error){
    console.log(error)
  }
})


mp4_convert.addEventListener("click", async () => {
  try{
    const youtube_url = document.getElementById("youtube_url").value
    const file_name = document.getElementById("file_name").value
    const res = await axios.post("/download/mp4", {
      youtube_url: youtube_url,
      file_name: file_name
    })
    console.log(res.data)
    downloader.href = res.data;
    downloader.click();
    
  }catch(error){
    console.log(error)
  }
})
