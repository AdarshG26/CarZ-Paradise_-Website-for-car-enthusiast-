let crsr = document.querySelector("#cursor");
let crsrBlur = document.querySelector("#cursorBlur");

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x - 10  + "px"
    crsr.style.top = dets.y -5 + "px"
    crsrBlur.style.left = dets.x - 175 + "px"
    crsrBlur.style.top = dets.y - 175 + "px"
})
var h4all = document.querySelectorAll('#nav h4')
h4all.forEach(function(elem){
    elem.addEventListener('mouseenter', function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener('mouseleave', function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})


gsap.to("#nav",{
    backgroundColor: "#000",
    height: "150px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10px",
        end: "top -11px",
        scrub: 1
    }
}) 

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -30%",
        end: "top -80%",
        scrub: 2
    }
})

gsap.from("#about-us img, #about-us-in",{
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 58%",
        scrub: 2
    }
})

