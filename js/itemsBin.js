import { renderItems } from "./index.js"
import { saveItems, items } from "./items.js"

let itemsBin = []


function removeItem(itemId, origin){
    let idSelected = parseInt(itemId)

    // console.log(itemId, origin)
    
        if(!isNaN(parseInt(itemId))  && origin == 0){
            let itemsBinBuffer = []
            itemsBinBuffer = items.splice(parseInt(itemId), 1)
            
            for (let i = 0; i < itemsBinBuffer.length; i++) {
                itemsBinBuffer[i].id = itemsBin.length
            }
    
            itemsBin.push(itemsBinBuffer[0])
    
            for (let i = idSelected; i < items.length; i++) { 
                items[i].id--
            }
    
            saveItems()
            saveItemsBin()
            renderItems()
        }

    if (!isNaN(parseInt(itemId)) && origin == 1){
            let itemsBinBuffer = []
            itemsBinBuffer = favoriteItems.splice(parseInt(itemId), 1)
            
            // console.log(favoriteItems)
            
            for (let i = 0; i < itemsBinBuffer.length; i++) {
                itemsBinBuffer[i].id = itemsBin.length
            }

            itemsBin.push(itemsBinBuffer[0])
    
            for (let i = idSelected; i < favoriteItems.length; i++) { 
                favoriteItems[i].id--
            }
    
            // saveFavoriteItems()
            saveItemsBin()
            renderItems()
    }
}

function saveItemsBin(){
    localStorage.setItem("itemsBinArray", JSON.stringify(itemsBin))
}

function loadItemsBin(){
    let loadedData = []
    if (localStorage.getItem("itemsBinArray") == null || loadedData.length < 0) {
    } else { 
        loadedData = localStorage.getItem("itemsBinArray")
        itemsBin = JSON.parse(loadedData)
    }
}

export { removeItem }