const cursorFollwer = document.querySelector(".cursor-follower");
document.addEventListener("mousemove",(e)=>{
    cursorFollwer.style.top = e.clientY + "px";
    cursorFollwer.style.left = e.clientX + "px";
    // cursorFollwer.style.transform = `scale(${e.clientY/100})`;
})