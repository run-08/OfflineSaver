import { useEffect, useRef, useState } from "react";

const MediaDevicesPermissions = () => {
    
   const videoRef = useRef(null);

   const [pos, setPos] = useState({ x: 100, y: 100 });

    function onPointerDown(e) {
    const startX = e.clientX;
    const startY = e.clientY;
    const origX = pos.x;
    const origY = pos.y;

    function onMove(ev) {
      setPos({
        x: origX + (ev.clientX - startX),
        y: origY + (ev.clientY - startY),
      });
    }

    function onUp() {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    }
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  }

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
   .then(stream => console.log(stream)
   )

   .catch(err =>{
        console.log(err);
        alert("Microphone is not detected!");  
   });

   return (
    <div className="liveStream">
          <div
      onPointerDown={onPointerDown}
      style={{
        position: "fixed",
        top: pos.y,
        left: pos.x,
        cursor: "grab",
        zIndex: 9999,
      }}
    >
      <video
        autoPlay
           ref={videoRef}
           height={100}
           width={300}
        className="border-2 border-green-500 rounded-2xl"
      />
    </div>
    </div>
   )
}
export default MediaDevicesPermissions;