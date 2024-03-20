var tl=gsap.timeline()

function time(){
  var a=0
  setInterval(function(){
    a=a+Math.floor(Math.random()*40)
    if (a<100){
      document.querySelector(".loader h1").innerHTML=a+"%"
    } else{
      a=100
      document.querySelector(".loader h1").innerHTML=a+"%"
    }
  },150)
}

tl.to(".loader h1",{
  duration:1,
  onStart:time
})
tl.to(".loader",{
  top:"-100vh",
  delay:0.3,
  duration:2
})

tl.from(".navbar>img,.nav-links a",{
  x:-100,
  opacity:0,
  duration:1,
  stagger:0.5
})

tl.from(".hero-section",{
  opacity:0,
  scale:0.5,
  duration:1
})

tl.from(".left-prt video",{
  x:-500,
  opacity:0,
  duration:0.5,
  scrollTrigger:{
    trigger:".left-prt video",
    scroller:"body",
    // markers:true,
    start:"top 35%",
    end:"top 15%",
    scrub:2
  }
})
tl.from(".right-prt h2,.right-prt p,.right-prt .btn",{
  x:500,
  opacity:0,
  duration:1,
  stagger:0.5,
  scrollTrigger:{
    trigger:".left-prt video",
    scroller:"body",
    // markers:true,
    start:"top 35%",
    end:"top 15%",
    scrub:2
  }
})


tl.from("#up",{
  x:-500,
  opacity:0,
  duration:1,
  delay:0.5,
  scrollTrigger:{
    trigger:"#up",
    scroller:"body",
    // markers:true,
    start:"top 50%",
    end:"top 40%",
    scrub:2
  }
})
tl.from("#down",{
  x:500,
  opacity:0,
  duration:1,
  delay:0.5,
  scrollTrigger:{
    trigger:"#down",
    scroller:"body",
    // markers:true,
    start:"top 65%",
    end:"top 55%",
    scrub:2
  }
})

tl.from(".third-section img",{
  x:-500,
  opacity:0,
  duration:1,
  delay:0.5,
  scale:0.5,
  rotate:360,
  scrollTrigger:{
    trigger:".third-section img",
    scroller:"body",
    // markers:true,
    start:"top 60%",
    end:"top 45%",
    scrub:2
  }
})
tl.from(".third-content",{
  x:150,
  opacity:0,
  duration:1,
  delay:1,
  fontWeight:700,
  scrollTrigger:{
    trigger:".third-content",
    scroller:"body",
    // markers:true,
    start:"top 50%",
    end:"top 35%",
    scrub:2
  }
})
tl.from(".inquiry-form-section",{
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".inquiry-form-section",
    scroller:"body",
    // markers:true,
    start:"top 60%",
    end:"top 30%",
    scrub:2
  }
})
tl.from(".form-heading h2",{
  x:-500,
  color:"#125e99",
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".inquiry-form-section",
    scroller:"body",
    // markers:true,
    start:"top 60%",
    end:"top 30%",
    scrub:2
  }
})
tl.from(".inquiry-form ",{
  x:-500,
  color:"#125e99",
  opacity:0,
  duration:2,
  delay:2,
  scrollTrigger:{
    trigger:".inquiry-form",
    scroller:"body",
    // markers:true,
    start:"top 60%",
    end:"top 30%",
    scrub:2
  }
})
tl.from(".blogs-section h2 ,#blog-para",{
  x:-500,
  opacity:0,
  duration:1,
  delay:0.5,
  stagger:0.5,
  scrollTrigger:{
    trigger:".blogs-section h2",
    scroller:"body",
    // markers:true,
    start:"top 60%",
    end:"top 40%",
    scrub:2
  }
})
tl.from("#b1",{
  x:-200,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#b1",
    scroller:"body",
    // markers:true,
    start:"top 45%",
    end:"top 30%",
    scrub:2
  }
})
tl.from("#b2",{
  y:100,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#b2",
    scroller:"body",
    // markers:true,
    start:"top 60%",
    end:"top 45%",
    scrub:2
  }
})
tl.from("#b3",{
  x:200,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#b3",
    scroller:"body",
    // markers:true,
    start:"top 45%",
    end:"top 30%",
    scrub:2
  }
})
tl.from(".col1,.col2,.col3,.col4",{
  opacity:0,
  scale:0.5,
  duration:1,
  delay:1,
  stagger:0.5,
  scrollTrigger:{
    trigger:".col1,.col2,.col3,.col4",
    scroller:"body",
    // markers:true,
    start:"top 80%",
    end:"top 60%",
    scrub:2
  }
})
tl.from(".sub-footer-container h4",{
  x:-500,
  opacity:0,
  scale:0.5,
  duration:0.5,
  stagger:0.3,
  scrollTrigger:{
    trigger:".sub-footer",
    scroller:"body",
    // markers:true,
    start:"top 99%",
    end:"top 95%",
    scrub:2
  }
})
