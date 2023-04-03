var video=document.createElement('video');
var first=true;
     window.addEventListener('mousedown',onmousedown);

   function onmousedown(){
      if(!first) return;
      first=false;
      video.src="src/video/pigment.mp4";
      video.play();
   }