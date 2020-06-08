import createStore from "./createStore";
import reducer from "./redux/reducer";
import {saveAction, clearAction} from "./redux/actions";

const input = document.getElementById("text");
const save = document.getElementById("save");
const clear = document.getElementById("clear");
const output = document.getElementById("output");

const store = createStore(reducer);

store.subscribe(() => {
    output.innerText = store.getState().saved.join("\n");
})

save.addEventListener("click", () => {
    store.dispatch(saveAction(input.value));
    input.value = "";
    input.focus();
});

clear.addEventListener("click", () => {
    store.dispatch(clearAction());
    input.value = "";
    input.focus();
})

