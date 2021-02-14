const axios = window.axios
const mp3_convert = document.getElementById("mp3-convert")
const mp4_convert = document.getElementById("mp4-convert")
// const link = document.getElementById("link")

mp3_convert.addEventListener("click", async () => {
  try{
    const youtube_url = document.getElementById("youtube_url").value
    const file_name = document.getElementById("file_name").value
    const res = await axios.post("/download/mp3", {
      youtube_url: youtube_url,
      file_name: file_name
    })
    const link = document.createElement("a")
    link.download = res.data
    link.href = res.data;
    link.click();
    link.remove()
    
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
    const link = document.createElement("a")
    link.download = res.data
    link.href = res.data;
    link.click();
    link.remove()
    
  }catch(error){
    console.log(error)
  }
})

