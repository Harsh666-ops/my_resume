function showslide(){
    var slide = document.querySelector("#slide");
    slide.style.display = "flex";
}

const cross = document.querySelector("#cross");

var sld = document.querySelector("#slide")

cross.addEventListener("click", function(){
    sld.style.display = "none"
})





var main = document.querySelector("body")

var lc = document.querySelector(".loader-container")

setTimeout(function(main){
    lc.style.display = "none"
},3500)





gsap.from(".main",{
    duration: 9,
    delay: 1,
    opacity: 1,
    x: 1000,
})

gsap.from("h1", {
    duration: 10,
    delay: 1,
    opacity: 0,
})

gsap.from("p",{
    duration: 9,
    delay: 1,
    opacity: 0,
    x: 5000,
})


function showmain(){
    var spin = document.querySelector(".spinner")
    var main = document.querySelector(".main")
    var btn= document.querySelector('.touchbtn') 
    main.style.display = "flex"
    btn.style.display="none"
    spin.style.display = "none"

}


gsap.from("button", {
    duration: 2,
    delay: 1,
    y: -500,
    opacity: 0,
})





var cursor = document.querySelector(".cursor")

var main = document.querySelector(".main")


main.addEventListener("mousemove", function(run){
    gsap.to(cursor, {
        x: run.x,
        y: run.y,
    })
})



