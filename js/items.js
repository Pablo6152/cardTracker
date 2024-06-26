import { render } from "./index.js"
import { idNumberInput, curpInput } from "./input.js"
import { modalWindow, addModal, appContainer } from "./containers.js"
import { removeItem } from "./itemsBin.js"
import { approvedItem } from "./itemsApproved.js"

let items = [
    // {
    //     idNumber: 123456789,
    //     name: "Pablo Cisneros",
    //     curp: "aaaaaa"
    // }
]

appContainer.addEventListener("click", itemSelector)

function itemSelector(e){
    // console.log(`
    // Item id=${e.target.parentNode.id}
    // Operation=${e.target.id}
    // `)

    if (e.target.id == "s"){
        // doneItems()
        console.log(e.target.id)
        approvedItem(e.target.parentNode.id, 0)

    } else if (e.target.id == "b"){
        console.log(e.target.id)


    } else if (e.target.id == "r"){
        // e.target.parentNode.id is the id of the item, 0 is the origin "Items"
        console.log(e.target.parentNode.id)
        removeItem(e.target.parentNode.id, 0)
    }
}

function saveItems(){
    localStorage.setItem("itemsArray", JSON.stringify(items))
    console.log("Saved")
}

function loadItems(){
    items = []
    let loadedData = []

    if (localStorage.getItem("itemsArray") == null || loadedData.length < 0) {
    } else {
        loadedData = localStorage.getItem("itemsArray")
        items = JSON.parse(loadedData)
    }

}

function addItem(){

    let newItem = {
        id: items.length,
        requestNumber: idNumberInput.value,
        name: "Pablo Cisneros",
        curp: curpInput.value
    }

    items.push(newItem)

    saveItems()
    render(0)
}

export { addItem, loadItems, items, saveItems }