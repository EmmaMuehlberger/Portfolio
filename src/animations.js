import gsap from "gsap";

let tl = gsap.timeline();

export const showMenuAni = () => {    
    tl
    .to(".MobileMenu", 1.2, {
      y: 0,
      ease: "power4.out"
    })
    .to(".Header", 0, {
        css: { boxShadow: "none" },
        ease: "power4.out",
        delay: -1.2
    })
    .to(".Header__burgerMenu", 0, {
        css: { display: "none" },
        ease: "power4.out",
        delay: -1.2
    })
    .to(".Header__close", 0, {
        css: { display: "initial" },
        ease: "power4.out",
        delay: -1.2
    });
};

export const closeMenuAni = (height) => {
    tl
    .to(".MobileMenu", 1.2, {
        y: - Number(height),
        ease: "power4.out"
    })
    .to(".Header", 0, {
        css: { boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" },
        ease: "power4.out",
        delay: -1.2
    })
    .to(".Header__close", 0, {
        css: { display: "none" },
        ease: "power4.out",
        delay: -1.2
    })
    .to(".Header__burgerMenu", 0, {
        css: { display: "initial" },
        ease: "power4.out",
        delay: -1.2
    });
};