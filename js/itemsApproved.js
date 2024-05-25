import { items, saveItems } from "./items.js"
import { render } from "./index.js"

let approvedItems = []

function approvedItem(itemId, origin){
    let idSelected = parseInt(itemId)

    // console.log(itemId, origin)
    
        if(!isNaN(parseInt(itemId))  && origin == 0){

            let approvedItemsBuffer = []
            approvedItemsBuffer = items.splice(parseInt(itemId), 1)
            
            for (let i = 0; i < approvedItemsBuffer.length; i++) {
                approvedItemsBuffer[i].id = approvedItems.length
            }
    
            approvedItems.push(approvedItemsBuffer[0])
    
            for (let i = idSelected; i < items.length; i++) { 
                items[i].id--
            }
    
            saveApprovedItems()
            saveItems()

            render(0)

        }

        // Legacy code, used to determine the location where the items is coming from (Items or recycle bin)
    // if (!isNaN(parseInt(itemId)) && origin == 1){
    //         let itemsBinBuffer = []
    //         itemsBinBuffer = favoriteItems.splice(parseInt(itemId), 1)
            
    //         // console.log(favoriteItems)
            
    //         for (let i = 0; i < itemsBinBuffer.length; i++) {
    //             itemsBinBuffer[i].id = itemsBin.length
    //         }

    //         itemsBin.push(itemsBinBuffer[0])
    
    //         for (let i = idSelected; i < favoriteItems.length; i++) { 
    //             favoriteItems[i].id--
    //         }
    
    //         // saveFavoriteItems()
    //         saveItemsBin()
    //         render()
    // }
}

function saveApprovedItems(){
    localStorage.setItem("approvedItemsArray", JSON.stringify(approvedItems))
    console.log("Saved Approved")
}

function loadApprovedItems(){
    approvedItems = []
    let loadedData = []
    
    if (localStorage.getItem("approvedItemsArray") == null || loadedData.length < 0) {
    } else {
        loadedData = localStorage.getItem("approvedItemsArray")
        approvedItems = JSON.parse(loadedData)
    }

}

export { approvedItem, loadApprovedItems, approvedItems }