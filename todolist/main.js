/* 
   this code will save the todo items even you refresh the page
*/
        
function tekan(){
    let prioritasan = (document.fform.prioritas.value);
    document.fform.Oprioritas.value = prioritasan;
}




const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
const add = document.querySelector('.add');

if(window.localStorage.getItem("todos") == undefined){
     var todos = [];
     window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);


class item{
    constructor(name){
        this.createItem(name);
    }
    createItem(name){
        var itemBox = document.createElement('a');
        itemBox.setAttribute('href', "index2.html");
        itemBox.classList.add('item');
    
    

        var input = document.createElement('input');
        input.type = "text";
        input.disabled = true;
        input.value = name;
        input.classList.add('item_input');

        const image = document.createElement('img');
        image.setAttribute('src', 'aktivitas.png');
        image.classList.add('gambarku');

        let date = document.createElement('div');
        let bulanan = new Array("januari","februari","maret","april","mei","juni","juli","agustus","september","oktober","november","desember");
        date.classList.add('tanggalan');
        let s = new Date();
        let tanggal = s.getDate();
        let bulan = bulanan[s.getMonth()];
        let tahun = s.getFullYear();
        date.innerHTML = (" "+tanggal+" "+bulan+" "+tahun);
        
        

       
        var remove = document.createElement('button');
        remove.classList.add('remove')
        remove.innerHTML = ("");
        remove.addEventListener('click', () => this.remove(itemBox, name));


        container.appendChild(itemBox);
       
        itemBox.appendChild(input);
        itemBox.appendChild(image);
        itemBox.appendChild(date);
        itemBox.appendChild(remove);

    }

   

    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        check();
    }
})

function check(){
    if(inputValue.value != ""){
        new item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
        inputValue.value = "";
    }
}


for (var v = 0 ; v < todos.length ; v++){
    new item(todos[v]);
}
