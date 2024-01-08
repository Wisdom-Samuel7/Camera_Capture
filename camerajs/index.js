const video = document.querySelector("video")
const canvas = document.querySelector("canvas")
const snap = document.querySelector(".snap")
const context =  canvas.getContext("2d")
const btn = document.querySelectorAll(".btn")
const link = document.querySelector("a")


const constraint = {
    audio : true,
    video : true
}

navigator.mediaDevices.getUserMedia(constraint).then(
  (stream) =>{

    video.srcObject = stream
  }

)

 snap.addEventListener("click",(e)=>{
     context.drawImage(video,0,0,canvas.width,canvas.height)
     btn[0].style.visibility= 'visible'
     btn[1].style.visibility= 'visible'
     link.style.display = "block"

  // console.log(canvas.toDataURL())

 })

btn[1].addEventListener("click",Delete)

btn[0].addEventListener("click",Save)

 function Delete() {

    context.clearRect(0,0,canvas.width,canvas.height)
    btn[0].style.visibility= 'hidden'
    btn[1].style.visibility= 'hidden'
    link.href = "#"
 }

function Save(){
    const url = canvas.toDataURL()
    link.style.visibility = "visible"
 link.href = url
 link.download = "CANVAS-IMAGE-TEST JAVASCRIPT -BY WISDOM"
}

