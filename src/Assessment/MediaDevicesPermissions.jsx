import { useEffect, useRef } from "react";

const MediaDevicesPermissions = () => {
   const videoRef = useRef(null);
   useEffect(()=>{
      navigator.mediaDevices.getUserMedia({video:true})
    .then(stream => {
        if(videoRef.current) videoRef.current.srcObject=stream
   })
    .catch(err => {
        alert("Camera access denied!");
        console.log(err);
   });
   },[]);
   navigator.mediaDevices.getUserMedia({audio:true})
   .then(stream => console.log(stream))
   .catch(err =>{
        console.log(err);
        alert("Microphone is not detected!");  
   });
   return (
    <div className="liveStream">
        <div className="video-play">
            <video autoPlay ref={videoRef}></video>
        </div>
    </div>
   )
}
export default MediaDevicesPermissions;