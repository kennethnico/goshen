(function(){
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }
    const typed = select('.typed')
    if (typed) {
        let typed_strings = typed.getAttribute('data-typed-items')
        typed_strings = typed_strings.split(',')
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 3000
        });
    }

    const typedDesc = select('.typedDesc')
    if (typedDesc) {
        let typed_strings = typedDesc.getAttribute('data-typed-items')
        typed_strings = typed_strings.split(',')
        new Typed('.typedDesc', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 35,
            backDelay: 1500
        });
    }
})()