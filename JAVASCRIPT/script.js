
 

var main = document.querySelector(".main")
var scroll=document.querySelector(".scroll")
var hero= document.querySelector(".hero")

var black=document.querySelector(".black")
gsap.to(black,{
    height:"0",
    delay:1,
    duration: 1.5,
    top:"0%",
    // opacity:0
})
var green=document.querySelector(".green")
gsap.to(green,{
    height:"0",
    delay: 1.3,
    duration: 1.9,
    top:"-130%"
})

black.addEventListener("mousemove",function(){
    scroll.style.height="0px",
    scroll.style.width="0px",
    scroll.innerHTML="."
})
hero.addEventListener("mousemove",function(run){
    scroll.style.height="100px",
    scroll.style.width="100px",
    scroll.innerHTML="SCROLL"
    gsap.to(scroll,{
        x:run.x,
        y:run.y,
        ease:"elastic",
        duration:0.6,
        delay:0.3


    })
})

var nav = document.querySelector(".nav")
nav.addEventListener("mousemove",function(move){
    scroll.style.height="10px",
    scroll.style.width="10px",
    scroll.innerHTML="."
    gsap.to(scroll,{
        x:move.x,
        y:move.y,
        ease:"elastic",
        duration:0.6,
        delay:0
    })
})

var page2 = document.querySelector(".page-2")
page2.addEventListener("mousemove",function(page2){
    scroll.style.height="100px",
    scroll.style.width="100px",
    gsap.to(scroll,{
        x:page2.x,
        y:page2.y,
    })
})

var page3 = document.querySelector(".page-3")
page3.addEventListener("mousemove",function (page3) {
    scroll.style.height="100px",
    scroll.style.width="100px",
    scroll.innerHTML="SCROLL"
    gsap.to(scroll,{
        x:page3.x,
        y:page3.y
    })
    
})
var page4=document.querySelector(".page-4")
page4.addEventListener("mousemove",function(page4){
    scroll.style.height="10px",
    scroll.style.width="10px",
    scroll.innerHTML="."
    gsap.to(scroll,{
        x:page4.x,
        y:page4.y
    })
})
var open1 = document.querySelector(".open")
open1.addEventListener("mousemove",function(open){
    scroll.style.height="10px",
    scroll.style.width="10px",
    scroll.innerHTML="."
    gsap.to(scroll,{
        x:open.x,
        y:open.y
    })
})

var team_page = document.querySelector(".team-page")
team_page.addEventListener("mousemove",function(team){
    scroll.style.height="100px",
    scroll.style.width="100px",
    scroll.innerHTML="Scroll"
    gsap.to(scroll,{
        x:team.x,
        y:team.y
    })
})

var big_s = document.querySelector(".big-s")
big_s.addEventListener("mousemove",function(bigs){
    scroll.style.height="100px",
    scroll.style.width="100px",
    scroll.innerHTML="Scroll"
    gsap.to(scroll,{
        x:bigs.x,
        y:bigs.y
    })
})

var foot= document.querySelector(".footer")
foot.addEventListener("mousemove",function(foot){
    scroll.style.height="10px",
    scroll.style.width="10px",
    scroll.innerHTML="."
    gsap.to(scroll,{
        x:foot.x,
        y:foot.y
    })
})
// var card3 = document.querySelector(".page-4 .card3")
// card3.addEventListener("mousemove",function(card3){
//     scroll.style.height="100px",
//     scroll.style.width="100px",
//     scroll.innerHTML="SCROLL",
//     gsap.to(scroll,{
//         x:card3.x,
//         y:card3.y
//     })
// })
// nav.addEventListener("mouseenter",function(){
//     if (out==1) {
//         gsap.to(scroll,{
//             scale:0.1,
//             ease:"elastic",
//             delay:0,
//         out=0
//     })
//     else{
        
//         out=1
//     })
    
    
// })

var open = document.querySelector(".open .card")
gsap.to(open,{
   width:"100%",
   opacity:1,
   scrollTrigger:{
    scroller:"body",
    trigger:".open",
    // markers:true,
    start:"top 70%",
    end:"top 20%",
    scrub:2
   } 
})

var we=document.querySelector(".WE h1")
gsap.from(we,{
    y:100,
    duration:0.5,
    delay:2.1,
    opacity:0,
    
})
var are= document.querySelector(".ARE h1")
gsap.from(are,{
    y:100,
    duration:0.4,
    delay:1.9,
    opacity:0,
    
})
var lirix = document.querySelector(".LIRIX h1")
gsap.from(lirix,{
    y:100,
    duration:0.4,
    delay:1.8,
    opacity:0
})

var page2_h1=document.querySelector(".page-2 h1")
gsap.from(page2_h1,{
    y:50,
    opacity:0,
    scrollTrigger:{
        scrolller:"body",
        trigger:".page-2",
        // markers:true,
        start:"top 50%",
        end:"top 15%",
        scrub:3

    }
})

var right=document.querySelector(".page-2 .right-img")
gsap.from(right,{
    // opacity:0,
    transform:"rotate(7deg)",
    y:180,
    scrollTrigger:{
        scroller:"body",
        trigger:".page-2",
        // markers:true,
        start:"top 70%",
        end:"top 5%",
        scrub:5
    }
})

var left=document.querySelector(".page-2 .left-img")
gsap.from(left,{
    y:200,
    transform:"rotate(7deg)",
    scrollTrigger:{
        scroller:"body",
        trigger:".page-2",
        // markers:true,
        start:"top 50%",
        end:"top 15%",
        scrub:5
    }
})

var page3_h1=document.querySelector(".page-3-left h1")
gsap.from(page3_h1,{
    y:100,
    opacity:0,
    duration:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".page-3",
        // markers:true,
        start:"top 30%",
        end:"top 5%",
        scrub:3
    }
})
var action = document.querySelector(".page-3 .action")
gsap.from(action,{
    y:180,
    opacity:0,
    duration:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".page-3",
        // markers:true,
        start:"top 18%",
        end:"top 5%",
        scrub:3
    }
 })
var what_we_do = document.querySelector(".upper-page-4 h1")
gsap.from(what_we_do,{
    y:200,
    duration:1,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".page-4",
        // markers:true,
        start:"top 80%",
        end:"top 75%",
        scrub:3
    }
    
})

// var what_we_do_p = document.querySelector(".upper-page-4 p")
// gsap.from(what_we_do_p,{
//     z:200,
//     duration:1,
//     opacity:0,
//     stagger:1,
//     scrollTrigger:{
//         scroller:"body",
//         trigger:".page-4",
//         markers:true,
//         start:"top 70%",
//         end:"top 55%",
//         scrub:3
//     }
// })

var card1=document.querySelector(".card1")
gsap.from(card1,{
    x:250,
    duration:1,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".page-4",
        // markers:true,
        start:"top 18%",
        end:"top 5%",
        scrub:3
    }
})
var card2=document.querySelector(".card2")
gsap.from(card2,{
    z:150,
    duration:1,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".page-4",
        // markers:true,
        start:"top 12%",
        end:"top 5%",
        scrub:3
    }
})

var s=document.querySelector(".big-s h1")
gsap.to(s,{
    scale:1,
    duration:10,
    // delay:4,
    scrollTrigger:{
        scroll:"body",
        trigger:".big-s",
        // markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true
    }
})
var card2 = document.querySelector(".card2")
card2.addEventListener("mousemove",function(){
    scroll.style.height="100px",
    scroll.style.width="100px",
    scroll.innerHTML="SCROLL"
})
var left_team_img = document.querySelector(".left-team img")
gsap.from(left_team_img,{
    transform:"rotate(4deg)",
    scrollTrigger:{
        scroller:"body",
        trigger:".team-page",
        // markers:true,
        start:"top 70%",
        end:"top 20%",
        scrub:5
    }
})

// // const firstname = docume.querySelector("#first_name")
// // const lastname = docume.querySelector("#last_name")
// // firstname.addEventListener(
// //     'input',function(){
// //         lastname.value=firstname.value
// //     }
// // )
// function fillLastName() {
//     const firstName = document.querySelector("#first_name").value;
//     document.querySelector("#last_name").value = firstName;
// }


// var main = document.querySelector(".main")
// var cursor = document.querySelector(".cursor")
// var box =document.querySelector(".main-1 .box")
// var boxa=document.querySelector(".main-1 .boxa")

// // main.addEventListener("mousemove",function(run){
// //     gsap.to(cursor,{
// //         x:run.x,
// //         y:run.y,
// //         duration:1,
// //         ease:"elastic.out(1,0.5)",
// //         scale:2
// //     })
// // })
// gsap.to(box,{
//     duration:2,
//     x: 1000,
//     opacity:0,
//     scrollTrigger:{
//         scroller:"body",
//         trigger:".main-1",
//         markers:true,
//         start:"top 50%",
//         end:"top 20%",
//         scrub:2

//     }
    
// })
// gsap.from(boxa,{
//     duration:2,
//     x:1000,
//     opacity:0,
//     scrollTrigger:{
//         scroller:"body",
//         trigger:".main-1",
//         markers:true,
//         start:"top 40%",
//         end:"top 10%",
//         scrub:2
//     }
// })

// let myarr=[1,2,3,4,5,65,6,19]

// // myarr.forEach((item)=>(
// //     console.log(item)
// // ))
// // function  num (val) {
// //     console.log(val*100)
// // }

// // myarr.forEach(num)