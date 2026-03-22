import { pxProps, nonPxProps } from "./library.js";

function applyChaiStyles() {
    const elements = document.querySelectorAll("*");

    for (let el of elements) {
        const classes = Array.from(el.classList);

        for (let str of classes) {
            if (!str.startsWith("chai-")) continue;

            const [, prop, ...rest] = str.split("-");
            const val = rest.join("-");

            // TEXT
            if (prop === "text") {
                if (["left", "center", "right", "justify"].includes(val)) {
                    el.style.textAlign = val;
                } else {
                    el.style.color = val;
                }
                continue;
            }

            // BORDER
            if (prop === "bd") {
                el.style.border = val + "px solid black";
                continue;
            }

            // OPACITY
            if (prop === "op") {
                el.style.opacity = val;
                continue;
            }

            // TRANSFORM
            if (prop === "scale") {
                el.style.transform = `scale(${val})`;
                continue;
            }

            if (prop === "rotate") {
                el.style.transform = `rotate(${val}deg)`;
                continue;
            }

            // PX
            if (pxProps[prop]) {
                el.style[pxProps[prop]] = val + "px";
            }

            // NON PX
            else if (nonPxProps[prop]) {
                el.style[nonPxProps[prop]] = val;
            }
        }
    }

    document.body.style.visibility = "visible";
}

// Auto-run (for CDN)
if (typeof window !== "undefined") {
    window.addEventListener("DOMContentLoaded", applyChaiStyles);
}

// Export (for npm users)
export { applyChaiStyles };