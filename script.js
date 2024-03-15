var s = document.getElementById('span')
var item1 = document.getElementById('item1')
var item2 = document.getElementById('item2')
var item3 = document.getElementById('item3')
var item4 = document.getElementById('item4')




function voltar(){
    if (s.innerText === 'Nike APP: O Mundo do seu jeito, Baixe agora!'){
        s.innerHTML = 'PRESENTES NIKE: Confira nossas indicações aqui!'
    }
    else{
        s.innerHTML = 'Nike APP: O Mundo do seu jeito, Baixe agora!'
    }
}

function esquerda() {
    var gridContainer = document.getElementById('tenis2')
    var items = gridContainer.querySelectorAll('.item')
    
   

    items.forEach(item => gridContainer.removeChild(item))
    
    
    
    gridContainer.appendChild(items[1]) // item 2
    gridContainer.appendChild(items[2]) // item 3
    gridContainer.appendChild(items[3]) // item 0
    gridContainer.appendChild(items[0]) // item 1
    
    var tempId = item4.id;
    item4.id = item3.id;
    item3.id = item2.id;
    item2.id = item1.id;
    item1.id = tempId;

    

}
function direita() {
    var gridContainer = document.getElementById('tenis2')
    var items = gridContainer.querySelectorAll('.item')
    
    items.forEach(item => gridContainer.removeChild(item))

    
    gridContainer.appendChild(items[3])
    gridContainer.appendChild(items[0])
    gridContainer.appendChild(items[1])
    gridContainer.appendChild(items[2])
    
    var tempId = item1.id
    item1.id = item2.id
    item2.id = item3.id
    item3.id = item4.id
    item4.id = tempId

    
    
}

let btnmenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay')

btnmenu.addEventListener('click', ()=> {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=> {
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', ()=> {
    menu.classList.remove('abrir-menu')
})
