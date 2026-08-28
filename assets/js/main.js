/* FinalFinal site — main.js
 * Intentionally tiny: mobile nav toggle only. The FAQ accordion uses native
 * <details>/<summary> elements, which need no JavaScript at all. No
 * analytics, no tracking, no third-party scripts.
 */
(function () {
    "use strict";

    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".main-nav");
    if (!toggle || !nav) { return; }

    toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    /* Close the mobile menu after choosing a link. */
    nav.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
            nav.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
        }
    });
}());
