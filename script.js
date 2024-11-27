
let gradient = document.getElementById("gradient");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");

let col1;
let col2;
let col3;

color1.addEventListener("input", () => {
    col1 = color1.value;
    applyGradient();
});

color2.addEventListener("input", () => {
    col2 = color2.value;
    applyGradient();
});

color3.addEventListener("input", () => {
    col3 = color3.value;
    applyGradient();
});

gradient.addEventListener("change", () => {
    applyGradient();
});

let applyGradient=()=> {
    let box_container = document.getElementById("box");
    switch (gradient.value) {
        case "Linear":
            box_container.style.background = `linear-gradient(${col1}, ${col2}, ${col3})`;
            break;
        case "Conic":
            box_container.style.background = `conic-gradient(${col1}, ${col2}, ${col3})`;
            break;
        case "Radial":
            box_container.style.background = `radial-gradient(${col1}, ${col2}, ${col3})`;
            break;
    }
}
