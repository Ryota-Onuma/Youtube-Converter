const axios = window.axios
const mp3_convert = document.getElementById("mp3-convert")
const mp4_convert = document.getElementById("mp4-convert")
const downloader= document.getElementById("downloader")

const validation = () => {
  const youtube_form = document.getElementById("youtube_url")
  const file_name_form = document.getElementById("file_name")
  if(file_name_form.value === "" || !file_name_form.value){
    alert("Youtubeリンクを入力してください")
    return false
  }
  if(file_name_form.value === "" || !file_name_form.value){
    alert("ファイル名を入力してください")
    return false
  }
  return true
}
mp3_convert.addEventListener("click", async () => {
  const validate = validation()
  if(!validate){
    return
  }
  try{
    document.getElementById("loading").style.display = "block"
    const youtube_url = document.getElementById("youtube_url").value
    const file_name = document.getElementById("file_name").value
    const res = await axios.post("/download/mp3", {
      youtube_url: youtube_url,
      file_name: file_name
    })
    document.getElementById("loading").style.display = "none"
    downloader.href = res.data;
    downloader.click();
    downloader.href = null
    youtube_url = null
    file_name = null
    alert("ダウンロードしました")
  }catch(error){
    console.log(error)
  }
})


mp4_convert.addEventListener("click", async () => {
  try{  
    const validate = validation()
    if(!validate){
      return
    }
    document.getElementById("loading").style.display = "block"
    const youtube_url = document.getElementById("youtube_url").value
    const file_name = document.getElementById("file_name").value
    const res = await axios.post("/download/mp4", {
      youtube_url: youtube_url,
      file_name: file_name
    })
    document.getElementById("loading").style.display = "none"
    downloader.href = res.data;
    downloader.click();
    downloader.href = null
    youtube_url = null
    file_name = null
    alert("ダウンロードしました")
  }catch(error){
    console.log(error)
  }
})
