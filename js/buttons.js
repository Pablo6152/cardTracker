import { showWindow } from "./index.js"


const menu = document.getElementById("menu")




menu.addEventListener("click", () => {
    showWindow(1)
})

export { menu }