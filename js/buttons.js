import { showWindow, changePage, render, currentPage, hideWindow } from "./index.js"

const menu = document.getElementById("menu")

const requestBtn = document.getElementById("requests-btn")
const approvedBtn = document.getElementById("approved-btn")
const statisticsBtn = document.getElementById("statistics-btn")
const recycleBtn = document.getElementById("recycle-btn")

requestBtn.addEventListener("click", () => {
    changePage(0)
    hideWindow(1)
    render(currentPage)
})
approvedBtn.addEventListener("click", () => {
    changePage(1)
    hideWindow(1)
    render(currentPage)
})
statisticsBtn.addEventListener("click", () => {
    changePage(2)
    hideWindow(1)
    render(currentPage)
})
recycleBtn.addEventListener("click", () => {
    changePage(3)
    hideWindow(1)
    render(currentPage)
})


menu.addEventListener("click", () => {
    showWindow(1)
})

export { menu }