gsap.timeline({
    scrollTrigger:{
        trigger:".section_11",
        start:"top 10%",
        end:"bottom top",
        markers:false,
        scrub:true,
        pin :true

    }
}) 
.from(".ty",{x : innerWidth * 1,})

.from(".sec1",{y : innerWidth * 1,
rotate:360})

gsap.timeline({
    scrollTrigger:{
        trigger:".section_21",
        start:"top 90%",
        end:"top 60%",
        markers:false,
        scrub:true,
        pin :false
    }
}) 
.from(".section_21", {opacity:0})
.from(".section_23",{y :innerHeight * 1})

gsap.timeline({
    scrollTrigger:{
        trigger:".section41",
        start:"top 60%",
        end:"top 40%",
        markers:false,
        scrub:true,
        pin :true
    }
}) 
.from(".section42",{x :innerWidth * -1})

gsap.timeline({
    scrollTrigger:{
        trigger:".section_51",
        start:"top 70%",
        end:"top 10% ",
        markers:false,
        scrub:true,
        pin :false
    }
})
.from(".section_52",{y :innerHeight * -1, x :innerHeight*-1})
.from(".scroll1",{x :innerWidth * 1, y:innerWidth *-1})
.from(".scroll2",{x :innerWidth * 1,y : innerWidth *1})

gsap.timeline({
    scrollTrigger:{
        trigger:".section61",
        start:"top 80%",
        end:"top 25% ",
        markers:false,
        scrub:true,
        pin :false
    }
})
.from(".section62",{x :innerWidth * 1})


gsap.timeline({
    scrollTrigger:{
        trigger:".section71",
        start:"top 80%",
        end:"top 35% ",
        markers:false,
        scrub:true,
        pin :false
    }
})
.from(".scr7",{y :innerHeight * -1})
.from(".scr71",{y :innerHeight * 1})
.from(".section73",{y :innerHeight * 1})

gsap.timeline({
    scrollTrigger:{
        trigger:".section81",
        start:"top 80%",
        end:"top 50% ",
        markers:true,
        scrub:true,
        pin :false
    }
})
.from(".sec8",{x :innerWidth * 1})
.from(".sec81",{x :innerWidth * 1})
.from(".section83",{x :innerWidth * 1})