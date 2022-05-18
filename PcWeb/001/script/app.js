const todoList = document.querySelector("#todoList")
const addItem = document.querySelector("#addItem")
console.log(addItem)

/** 
 * Função para recuperar o valor digitado no input
 * @param 
 * @returns - String task
 */ 
const getTask = () => {
    const item = document.querySelector("#item")
    return (item.value)?item.value:false
}
/**
 * criar um li
 */
const createLi = task => {
    const itemList = document.createElement("li")
    const contentItemList = document.createTextNode(task)
    itemList.appendChild(contentItemList)
    return itemList.appendChild(contentItemList)
    itemList.appendChild
}
/**
 *  criar link de remoção
 */
const createLinkDelete = () => {
    const link = document.createElement("a")
    const linkText = document.createTextNode("Remover")
    link.appendChild(linkText)
    link.setAttribute("href", "#")
    return link
}


const createLinkEdit = () => {
    const link = document.createElement("a")
    const linkText = document.createTextNode("Editar")
    link.appendChild(linkText)
    link.setAttribute("href", "#")
    return link
}
/**  
 * Função para adicionar itens
 * @param String task
 * @returns none
*/

const editLi(itemList) = (itemList =>{
    console.log (itemList.textContent)
    let taskName = itemList.textContent
    let sizeTask = taskName.length

    // taskName = taskName.substring(0, sizeTask-13)
    // const editInput = document.createElement("input")
    // editInput 
})

const addItemList = task => {
    const itemList = createLi(task)
    const linkRemove = createLinkDelete()
    const linkEdit = createLinkEdit()

    itemList.appendChild(linkRemove)
    itemList.appendChild(linkEdit)
    //adicionar o li na lista "todoList"
    todoList.appendChild(itemList)
}

// criar uma função para o clique do botão
addItem.addEventListener("click", () => { 
    const task = getTask()
    if(task) 
        addItemList(task)
})

todoList.addEventListener("click", (evento) => {
    //se o clique não for no a, saia
    if(evento.target.nodeName != "A") return false
    // caso contrário, siga em frente
    const activeLink = evento.target
    console.log(activeLink)
    const liParent = activeLink.parentNode
    
    liParent.parentNode.removeChild(liParent)

    if(activeLink.className == "edit"){

    }
    else{
        liParent.parentNode.removeChild(liParent)
    }

})

todoList.addEventListener("keydowns", (evento) =>{
    if(evento.target.nodeName != "INPUT") return false
    const inputEdit=evento.target
    const newValueTask=inputEdit.value
    //recuprando li
    const liParent =inputEdit.parentNode
    //recuperando o span(primeiro filho de li)
    const spanChild=liParent
})

