const input = document.getElementById("text");
const save = document.getElementById("save");
const clear = document.getElementById("clear");
const output = document.getElementById("output");

let state = [];

const render = (value, domElement) => domElement.innerText = value;

save.addEventListener("click", () => {
    state.push(input.value);
    input.value = "";
    input.focus();
    render(state.join("\n"), output);
});

clear.addEventListener("click", () => {
    state = [];
    input.value = "";
    input.focus();
    render("", output);
})

